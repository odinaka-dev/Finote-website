import {
  privacyContact,
  privacyIntro,
  privacyLastUpdated,
  privacySections,
  type PolicyBlock,
} from "../constants/privacy-policy";
import HeaderComponent from "../shared/header";

const PolicyBlocks = ({ blocks }: { blocks: PolicyBlock[] }) => (
  <>
    {blocks.map((block, index) =>
      typeof block === "string" ? (
        <p key={index}>{block}</p>
      ) : (
        <ul key={index} className="list-disc pl-6 flex flex-col gap-1.5">
          {block.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    )}
  </>
);

const PrivacyPolicyPage = () => {
  return (
    <main>
      <div className="bg-[#f4f4f4]">
        <div className="max-w-[92%] sm:max-w-[90%] xl:max-w-292 mx-auto">
          <HeaderComponent />
          <h1 className="text-center text-[36px] sm:text-[52px] py-10 sm:py-16 my-0!">
            Privacy Policy
          </h1>
        </div>
      </div>

      <article className="max-w-[90%] sm:max-w-[640px] mx-auto py-14 sm:py-20 text-[15px] sm:text-[16px] text-[#4A4A4A]">
        <p className="text-[14px] font-semibold text-[#222222]">
          Last updated: {privacyLastUpdated}
        </p>

        <section className="mt-10 flex flex-col gap-3">
          <h2 className="text-[22px] sm:text-[24px] text-[#222222]">
            Introduction
          </h2>
          <PolicyBlocks blocks={privacyIntro} />
        </section>

        {privacySections.map((section, index) => (
          <section key={section.title} className="mt-12 flex flex-col gap-3">
            <h2 className="text-[22px] sm:text-[24px] text-[#222222]">
              {index + 1}. {section.title}
            </h2>
            {section.content && <PolicyBlocks blocks={section.content} />}
            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mt-4 flex flex-col gap-3">
                <h3 className="text-[17px]! sm:text-[18px]! m-0! text-[#222222]">
                  {sub.title}
                </h3>
                <PolicyBlocks blocks={sub.content} />
              </div>
            ))}
          </section>
        ))}

        <section className="mt-12 flex flex-col gap-3">
          <h2 className="text-[22px] sm:text-[24px] text-[#222222]">
            {privacySections.length + 1}. Contact Us
          </h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or your personal information, please contact us:
          </p>
          <p className="font-semibold text-[#222222]">Finote</p>
          <ul className="flex flex-col gap-1.5">
            {privacyContact.map((item) => (
              <li key={item.label}>
                <span className="font-semibold text-[#222222]">
                  {item.label}:
                </span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-14! pt-8 border-t border-[#E5E5E5] font-semibold text-[#222222]">
          Finote, Simple solution that powers your finance.
        </p>
      </article>
    </main>
  );
};

export default PrivacyPolicyPage;
