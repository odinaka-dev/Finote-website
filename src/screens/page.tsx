import { FinoteImages } from "../constants/image";
import DownloadButtonComp from "../shared/downloadButton";
import FaqComp from "../shared/faq";
import FooterComponent from "../shared/footer";
import HeaderComponent from "../shared/header";
import BookKeepingComp from "./book-keeping";
import SubBannerComp from "./sub-banner";

const LandingPageComponent = () => {
  return (
    <main className="">
      <div className="banner-image min-h-screen overflow-hidden">
        <div className="max-w-[92%] sm:max-w-[90%] xl:max-w-300 mx-auto">
          <HeaderComponent />

          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-6">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[48px] sm:text-[54px]">
                Simple solution that powers your Finance
              </h1>
              <p className="text-[18px] sm:text-[24px]">
                Record payments, income, expenses, access your daily financial
                operations all in one simple app.
              </p>
              <DownloadButtonComp />
            </div>
            <div className="w-full lg:w-[65%] flex justify-end relative top-0 md:top-20">
              <img
                src={FinoteImages.bannerImg}
                alt="Person recording salary income and spending in the Finote app"
                width={803}
                height={925}
                fetchPriority="high"
                className="w-full max-w-8xl h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sub landing page components */}
      <div className="max-w-[90%] xl:max-w-300 mx-auto">
        <BookKeepingComp />
        <SubBannerComp />
        <FaqComp />
      </div>
      <FooterComponent />
    </main>
  );
};

export default LandingPageComponent;
