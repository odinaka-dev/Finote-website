import { FinoteImages } from "../constants/image";
import DownloadButtonComp from "../shared/downloadButton";

const SubBannerComp = () => {
  return (
    <section className="bg-[#222222] p-4 sm:p-6 md:p-12 rounded-3xl overflow-hidden sub-image my-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-1/2 relative bottom-0 md:bottom-20">
          <h2 className="text-[32px] text-white sm:text-[48px]">
            Simple solution that powers your Finance
          </h2>
          <p className="text-[18px] text-white sm:text-[24px]">
            Record payments, income, expenses, access your daily financial
            operations all in one simple app.
          </p>
          <DownloadButtonComp />
        </div>
        <div className="relative md:top-20 w-full">
          <img
            src={FinoteImages.subBannerImg}
            alt="Finote app reminders for payments and debts"
            width={946}
            height={671}
            loading="lazy"
            decoding="async"
            className="w-full max-w-3xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SubBannerComp;
