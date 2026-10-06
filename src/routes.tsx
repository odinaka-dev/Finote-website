import type { ReactNode } from "react";
import { Route, Routes } from "react-router";
import { pageRoutes, type PagePath } from "./constants/routes";
import NotFoundPage from "./screens/not-found";
import ContactPage from "./screens/contact";
import LandingPageComponent from "./screens/page";
import PrivacyPolicyPage from "./screens/privacy-policy";
import LayoutComponent from "./shared/layout";

// add a page here and in constants/routes.ts
const pageElements: Record<PagePath, ReactNode> = {
  "/": <LandingPageComponent />,
  "/privacy-policy": <PrivacyPolicyPage />,
  "/contact": <ContactPage />,
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        {pageRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={pageElements[route.path]}
          />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
