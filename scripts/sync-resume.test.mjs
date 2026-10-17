import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import test from "node:test";

const run = promisify(execFile);
const current = "%PDF-1.7\ncurrent resume\n%%EOF";
const previous = "%PDF-1.7\nprevious resume\n%%EOF";

async function fixture(t, files) {
  const directory = await mkdtemp(path.join(tmpdir(), "portfolio-resume-test-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await mkdir(path.join(directory, "public"));
  await mkdir(path.join(directory, "scripts"));
  const script = path.join(directory, "scripts", "sync-resume.mjs");
  await copyFile(new URL("./sync-resume.mjs", import.meta.url), script);
  await Promise.all(Object.entries(files).map(([name, content]) =>
    writeFile(path.join(directory, "public", name), content),
  ));
  return {
    sync: () => run(process.execPath, [script]),
    published: () => readFile(path.join(directory, "public", "resume.pdf"), "utf8"),
  };
}

test("selects the current resume when a merge retains both resume filenames", async t => {
  const files = await fixture(t, {
    "Shashank-Tripathi-Resume.pdf": previous,
    "Shashank_Tripathi_Resume.pdf": current,
    "resume.pdf": previous,
  });
  await files.sync();
  assert.equal(await files.published(), current);
});

test("supports deployments containing only the published resume", async t => {
  const files = await fixture(t, { "resume.pdf": current });
  await files.sync();
  assert.equal(await files.published(), current);
});

test("supports a renamed single source and replaces the old published asset", async t => {
  const files = await fixture(t, { "Updated resume.pdf": current, "resume.pdf": previous });
  await files.sync();
  assert.equal(await files.published(), current);
});

test("keeps the published resume when multiple unknown sources are ambiguous", async t => {
  const files = await fixture(t, { "one.pdf": previous, "two.pdf": previous, "resume.pdf": current });
  const result = await files.sync();
  assert.equal(await files.published(), current);
  assert.match(result.stderr, /kept the published resume/);
});

test("reports how to fix a missing resume", async t => {
  const files = await fixture(t, {});
  await assert.rejects(files.sync(), /No usable resume was found/);
});

test("does not overwrite the published resume with a corrupt source", async t => {
  const files = await fixture(t, { "Shashank_Tripathi_Resume.pdf": "not a PDF", "resume.pdf": current });
  await assert.rejects(files.sync(), /Resume is not a valid PDF/);
  assert.equal(await files.published(), current);
});
