import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./screens/page.tsx";

// used at build time by scripts/prerender.js to generate static HTML for SEO
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
