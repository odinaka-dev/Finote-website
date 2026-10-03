import { Link } from "react-router";
import { FinoteImages } from "../constants/image";

const HeaderComponent = () => {
  return (
    <header className="bg-none w-full pt-8 flex justify-between items-center">
      <Link to="/" aria-label="Finote home">
        <img
          src={FinoteImages.logo}
          alt="Finote logo"
          width={140}
          height={50}
        />
      </Link>
      <nav aria-label="Legal" className="hidden md:flex items-center gap-12">
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <p>Terms & Conditions</p>
      </nav>
    </header>
  );
};

export default HeaderComponent;
