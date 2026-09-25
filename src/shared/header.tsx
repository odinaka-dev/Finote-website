import { FinoteImages } from "../constants/image";

const HeaderComponent = () => {
  return (
    <header className="bg-none w-full pt-8 flex justify-between items-center">
      <a href="/" aria-label="Finote home">
        <img
          src={FinoteImages.logo}
          alt="Finote logo"
          width={140}
          height={50}
        />
      </a>
      <nav aria-label="Legal" className="hidden md:flex items-center gap-12">
        {["Privacy Policy", "Terms & Conditions"].map((items, index) => (
          <p className="" key={index}>
            {items}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default HeaderComponent;
