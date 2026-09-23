import { FinoteImages } from "../constants/image";

const HeaderComponent = () => {
  return (
    <div className="bg-none w-full pt-8 flex justify-between items-center">
      <div>
        <img src={FinoteImages.logo} alt="fintoe_logo" width={140} />
      </div>
      <div className="hidden md:flex items-center gap-12">
        {["Privacy Policy", "Terms & Conditions"].map((items, index) => (
          <p className="" key={index}>
            {items}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
