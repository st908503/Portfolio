import { readdir, readFile, copyFile } from "node:fs/promises";

const publicDirectory = new URL("../public/", import.meta.url);
const candidates = (await readdir(publicDirectory)).filter(
  name => /\.pdf$/i.test(name) && name.toLowerCase() !== "resume.pdf",
);
if (candidates.length !== 1) {
  throw new Error("Keep exactly one source resume PDF in public/, in addition to the generated resume.pdf. Its filename can change.");
}
const source = new URL(encodeURIComponent(candidates[0]), publicDirectory);
const bytes = await readFile(source);
if (bytes.subarray(0, 5).toString() !== "%PDF-") {
  throw new Error("The source resume must be a valid PDF.");
}
await copyFile(source, new URL("resume.pdf", publicDirectory));
console.log(`Updated public/resume.pdf from ${candidates[0]}.`);
