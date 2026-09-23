import { companyLinks, socialLinks } from "../constants/helpers";
import { FinoteImages } from "../constants/image";

const FooterComponent = () => {
  return (
    <footer className="max-w-[90%] xl:max-w-300 mx-auto pt-8 pb-16 text-[#222222]">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <img src={FinoteImages.logo} alt="finote_logo" width={104} />
          <div className="flex items-center gap-4 mt-6">
            {[FinoteImages.downloadApple, FinoteImages.downloadPlaystore].map(
              (items, index) => (
                <button className="cursor-pointer" key={index}>
                  <img
                    src={items}
                    alt="download_buttons"
                    className="h-9 w-auto"
                  />
                </button>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-26 lg:mr-70 lg:mt-14">
          <div className="flex flex-col gap-2 text-[14px]">
            <p className="text-[15px] mb-1">Company</p>
            {companyLinks.map((items, index) => (
              <a href={items.href} key={index} className="hover:underline">
                {items.label}
              </a>
            ))}
          </div>
          <div className="text-[14px]">
            <p className="mb-3">Ketu, Lagos state Nigeria.</p>
            <a href="mailto:info@finote.com" className="block hover:underline">
              info@finote.com
            </a>
            <a href="tel:+2348051346872" className="block hover:underline">
              +234 805 134 6872
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-20 lg:mt-24">
        <div>
          <p className="text-[14px]">Connect with us</p>
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((items, index) => (
              <a
                href={items.href}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <img src={items.icon} alt={items.alt} className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[14px] lg:mr-6">
          <span className="flex w-5 h-5 rounded-full overflow-hidden">
            <span className="w-1/3 bg-[#57B35F]" />
            <span className="w-1/3 bg-white" />
            <span className="w-1/3 bg-[#57B35F]" />
          </span>
          <p>Nigeria</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-16 text-[12px]">
        <p>Copyright © {new Date().getFullYear()}, Finote</p>
        <div className="flex items-center gap-10 sm:gap-22">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
