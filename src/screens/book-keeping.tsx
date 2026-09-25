import { PROPSDATA } from "../constants/helpers";
import DownloadButtonComp from "../shared/downloadButton";

const BookKeepingComp = () => {
  return (
    <section className="mt-24 sm:mt-32">
      <h2 className="sm:text-center w-full text-[32px] sm:text-[40px] sm:px-0">
        The necessary tools you need to record{" "}
        <br className="hidden md:block" /> your finance easily
      </h2>
      {PROPSDATA.map((items) => (
        <div
          key={items.id}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${items.id === 1 ? "mt-14" : "mt-16"}`}
        >
          <div
            className={`w-full lg:w-[80%] ${items.id === 1 ? "md:order-1" : "md:order-2"}`}
          >
            <h3 className="text-[24px] sm:text-[40px]">{items.title}</h3>
            <p className="text-[#222222]/60 text-[18px]">{items.content}</p>
            <div className="hidden md:block">
              <DownloadButtonComp />
            </div>
          </div>
          <div
            className={`overflow-hidden bg-[#222222] w-full h-96 md:h-150 place-items-center p-10 rounded-3xl ${items.id === 1 ? "md:order-2" : "md:order-1"}`}
          >
            <img
              src={items.image}
              alt={items.alt}
              width={477}
              height={1037}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ))}
      <div className="mt-8 flex items-center justify-center md:hidden">
        <DownloadButtonComp />
      </div>
    </section>
  );
};

export default BookKeepingComp;
