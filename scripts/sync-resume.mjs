import { readdir, readFile, copyFile } from "node:fs/promises";

const publicDirectory = new URL("../public/", import.meta.url);
const destination = new URL("resume.pdf", publicDirectory);
const preferredSource = "Shashank_Tripathi_Resume.pdf";
const candidates = (await readdir(publicDirectory)).filter(
  name => /\.pdf$/i.test(name) && name.toLowerCase() !== "resume.pdf",
);

// Prefer the current resume explicitly. Git merges can retain older PDFs, and
// their order or modification times must not decide which resume is published.
const sourceName = candidates.includes(preferredSource)
  ? preferredSource
  : candidates.length === 1
    ? candidates[0]
    : undefined;

async function readPdf(file) {
  const bytes = await readFile(file);
  if (bytes.subarray(0, 5).toString() !== "%PDF-") {
    throw new Error(`Resume is not a valid PDF: ${file.pathname}`);
  }
  return bytes;
}

if (sourceName) {
  const source = new URL(encodeURIComponent(sourceName), publicDirectory);
  await readPdf(source);
  await copyFile(source, destination);
  console.log(`Updated public/resume.pdf from ${sourceName}.`);
} else {
  // A deployment may contain just the already-published resume asset. Reuse it
  // when there is no source, or when multiple unknown sources are ambiguous.
  try {
    await readPdf(destination);
  } catch (error) {
    throw new Error(
      `No usable resume was found. Add public/${preferredSource}, keep a single source PDF, or provide a valid public/resume.pdf.`,
      { cause: error },
    );
  }
  console.log("Using existing public/resume.pdf.");
  if (candidates.length > 1) {
    console.warn(`Multiple source PDFs found; kept the published resume. Name the intended source ${preferredSource} to select it explicitly.`);
  }
}
