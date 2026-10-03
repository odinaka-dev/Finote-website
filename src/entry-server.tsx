import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import AppRoutes from "./routes.tsx";

export { notFoundRoute, pageRoutes } from "./constants/routes.ts";

// used at build time by scripts/prerender.js to generate static HTML for SEO
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
