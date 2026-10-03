import { useEffect } from "react";
import { Link } from "react-router";
import { notFoundRoute } from "../constants/routes";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = notFoundRoute.title;
  }, []);

  return (
    <main className="relative min-h-screen bg-[#e4e4e4] overflow-hidden flex items-center justify-center px-4">
      <p
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-semibold leading-none tracking-tight text-[#222222]/10 text-[42vw] sm:text-[38vw] lg:text-[460px] select-none pointer-events-none"
        style={{ fontFamily: "var(--heading)" }}
      >
        404
      </p>

      <div className="relative text-center max-w-md">
        <h1 className="text-[36px] sm:text-[44px] my-0! text-[#222222]">
          Page not found
        </h1>
        <p className="mt-4! mx-auto! max-w-80 text-[15px] sm:text-[16px] text-[#222222]/70">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-full bg-[#222222] hover:bg-[#111111] text-white text-[15px] transition-colors"
        >
          Go to Home
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
