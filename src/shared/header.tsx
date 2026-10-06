import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FinoteImages } from "../constants/image";

// links without a path are pages that don't exist yet
const navLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions" },
  { label: "Contact Us", path: "/contact" },
];

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative z-20 bg-none w-full pt-8 flex justify-between items-center">
      <Link to="/" aria-label="Finote home">
        <img
          src={FinoteImages.logo}
          alt="Finote logo"
          width={140}
          height={50}
        />
      </Link>

      <nav aria-label="Main" className="hidden md:flex items-center gap-12">
        {navLinks.map((item) =>
          item.path ? (
            <Link key={item.label} to={item.path} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <p key={item.label}>{item.label}</p>
          ),
        )}
      </nav>

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/80 text-[#222222] cursor-pointer"
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden absolute top-full right-0 left-0 mt-3 rounded-2xl bg-white shadow-(--shadow) border border-[#E5E5E5] p-2"
        >
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-[16px] hover:bg-[#f4f4f4] ${
                      pathname === item.path ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="block px-4 py-3 text-[16px] text-[#222222]/50">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
