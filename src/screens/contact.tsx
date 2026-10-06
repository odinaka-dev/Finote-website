import { useState, type FormEvent, type ReactNode } from "react";
import {
  contactDetails,
  contactEmail,
  contactTopics,
} from "../constants/helpers";
import HeaderComponent from "../shared/header";

type ContactIcon = (typeof contactDetails)[number]["icon"];

const iconPaths: Record<ContactIcon, ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
};

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3.5 text-[15px] text-[#222222] placeholder:text-[#8A8A8A] outline-none border border-transparent focus:border-[#222222]/30 transition-colors";
const labelClass = "block text-[14px] text-[#222222] mb-2.5";

const ContactPage = () => {
  const [topic, setTopic] = useState(contactTopics[0]);
  const [submitted, setSubmitted] = useState(false);

  // no backend yet: open the visitor's email client with the message pre-filled
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const phone = String(data.get("phone") || "Not provided");

    const subject = `${topic} - ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Phone: ${phone}`,
      `Topic: ${topic}`,
      "",
      String(data.get("message")),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <main>
      <div className="max-w-[92%] sm:max-w-[90%] xl:max-w-292 mx-auto">
        <HeaderComponent />
      </div>

      <section className="max-w-[92%] sm:max-w-[90%] xl:max-w-292 mx-auto py-14 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="flex flex-col justify-between gap-12 lg:pt-10">
          <div>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] my-0! text-[#222222]">
              Talk to our support team
            </h1>
            <p className="mt-6! max-w-120 text-[15px] sm:text-[16px] text-[#222222]/70">
              Need help with the app, have an idea to make Finote better, or
              just want to say hello? Send us a message and we&rsquo;ll get
              back to you.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {contactDetails.map((item) => (
              <li key={item.icon} className="flex items-center gap-4">
                <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-[#f4f4f4]">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {iconPaths[item.icon]}
                  </svg>
                </span>
                {"href" in item ? (
                  <a href={item.href} className="text-[15px] hover:underline">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-[15px]">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#f4f4f4] p-6 sm:p-10 flex flex-col gap-6"
        >
          <fieldset>
            <legend className={labelClass}>What can we help with?</legend>
            <div className="flex flex-wrap gap-2">
              {contactTopics.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={topic === item}
                  onClick={() => setTopic(item)}
                  className={`px-4 py-2 rounded-full text-[14px] transition-colors cursor-pointer ${
                    topic === item
                      ? "bg-[#222222] text-white"
                      : "bg-white text-[#222222] hover:bg-[#e9e9e9]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter Your Full Name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Enter Your Email Address"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-[#8A8A8A]">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter Your Phone Number"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder={
                topic === "Feedback"
                  ? "Tell us what you like or what we can improve"
                  : "Write Your Message Here"
              }
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
            <button
              type="submit"
              className="self-start inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#222222] hover:bg-[#111111] text-white text-[15px] transition-colors cursor-pointer"
            >
              Send Message
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            {submitted && (
              <p role="status" className="text-[14px] text-[#222222]/70">
                Your email app should open with the message ready to send.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
