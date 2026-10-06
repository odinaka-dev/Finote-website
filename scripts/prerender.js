import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE_URL = "https://finote.app";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "dist/index.html");
const serverEntry = path.join(root, "dist-ssr/entry-server.js");

const { render, pageRoutes, notFoundRoute } = await import(
  pathToFileURL(serverEntry).href
);
const template = fs.readFileSync(templatePath, "utf-8");

if (!template.includes("<!--app-html-->")) {
  throw new Error(
    "Prerender placeholder <!--app-html--> not found in index.html",
  );
}

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// swap the homepage's head tags in index.html for this page's own
const withPageHead = (html, page) => {
  const url = `${SITE_URL}${page.path}`;
  const title = escapeAttr(page.title);
  const description = escapeAttr(page.description);
  const setContent = (attr, value) =>
    html.replace(
      new RegExp(`(${attr}\\s+content=")[^"]*"`),
      (_, start) => `${start}${value}"`,
    );

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = setContent('name="description"', description);
  html = setContent('property="og:url"', url);
  html = setContent('property="og:title"', title);
  html = setContent('property="og:description"', description);
  html = setContent('name="twitter:title"', title);
  html = setContent('name="twitter:description"', description);
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*"/,
    (_, start) => `${start}${url}"`,
  );
  // structured data (FAQ, app listing) describes the homepage only
  return html.replace(/<!--home-only-->[\s\S]*?<!--\/home-only-->/g, "");
};

// the 404 page has no URL of its own, so keep it out of search results
const withNotFoundHead = (html) =>
  withPageHead(html, notFoundRoute)
    .replace(
      /(name="robots"\s+content=")[^"]*"/,
      (_, start) => `${start}noindex"`,
    )
    .replace(/\s*<link rel="canonical"[^>]*>/, "")
    .replace(/\s*<meta property="og:url"[^>]*>/, "");

for (const page of [...pageRoutes, notFoundRoute]) {
  const head =
    page === notFoundRoute
      ? withNotFoundHead(template)
      : page.path === "/"
        ? template
        : withPageHead(template, page);
  const outPath = path.join(root, "dist", page.file);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, head.replace("<!--app-html-->", render(page.path)));
  console.log(`Prerendered dist/${page.file}`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
