import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { pageRoutes } from "../constants/routes";
import FooterComponent from "./footer";

// shared shell for every page; each page renders its own hero + header
const LayoutComponent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = pageRoutes.find((item) => item.path === pathname);
    if (route) document.title = route.title;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
