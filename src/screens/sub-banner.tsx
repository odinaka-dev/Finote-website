import { FinoteImages } from "../constants/image";
import DownloadButtonComp from "../shared/downloadButton";

const SubBannerComp = () => {
  return (
    <div className="bg-[#222222] p-4 sm:p-6 md:p-12 rounded-3xl overflow-hidden sub-image my-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-1/2 relative bottom-0 md:bottom-20">
          <h1 className="text-[32px] text-white sm:text-[48px]">
            Simple solution that powers your Finance
          </h1>
          <p className="text-[18px] text-white sm:text-[24px]">
            Record payments, income, expenses, access your daily financial
            operations all in one simple app.
          </p>
          <DownloadButtonComp />
        </div>
        <div className="relative md:top-20 w-full">
          <img
            src={FinoteImages.subBannerImg}
            alt="reminder-banner-image"
            className="w-full max-w-3xl h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SubBannerComp;
