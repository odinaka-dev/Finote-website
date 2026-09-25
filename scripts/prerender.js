// Injects the server-rendered app into dist/index.html so search engines
// receive fully rendered content without needing to run JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "dist/index.html");
const serverEntry = path.join(root, "dist-ssr/entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(templatePath, "utf-8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("Prerender placeholder <!--app-html--> not found in index.html");
}

fs.writeFileSync(templatePath, template.replace("<!--app-html-->", render()));
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log("Prerendered dist/index.html");
