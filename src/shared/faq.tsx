import { useState } from "react";
import { faqs } from "../constants/helpers";

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const selectedIndex = activeIndex ?? 0;

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="my-24">
      <h2 className="text-[32px] sm:text-[48px] text-center mb-12">
        Frequently Asked Questions
      </h2>

      {/* mobile: accordion */}
      <div className="flex flex-col gap-4 md:hidden">
        {faqs.map((items, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-[#E5E5E5] rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <span className="text-[16px]">{items.question}</span>
                <span className="text-[24px] leading-none shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-5 text-[15px] leading-7">
                  {items.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* tablet & desktop: questions list + answer panel */}
      <div className="hidden md:flex gap-4 items-stretch">
        <div className="w-1/2 flex flex-col gap-6">
          {faqs.map((items, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-8 py-7 rounded-3xl border text-[18px] lg:text-[22px] cursor-pointer transition-colors ${
                selectedIndex === index
                  ? "bg-[#2E2E2E] border-[#2E2E2E] text-white"
                  : "bg-white border-[#E5E5E5] hover:bg-[#F7F7F7]"
              }`}
            >
              {items.question}
            </button>
          ))}
        </div>
        <div className="w-1/2 bg-[#222222] text-white rounded-3xl p-8 lg:p-10">
          <p className="text-[28px] lg:text-[32px] font-medium">Ans:</p>
          <p className="mt-12 lg:mt-20 text-[18px] lg:text-[22px] leading-[1.9]">
            {faqs[selectedIndex].answer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqComp;
