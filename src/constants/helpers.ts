import { FinoteImages } from "./image";

// here goes the data
export const PROPSDATA = [
  {
    id: 1,
    badge: "Book Keeping",
    image: FinoteImages.dashboardImg,
    alt: "Finote dashboard for recording income and expenses",
    title: "Record easily your finance, income & Expenses.",
    content:
      "Open a finote account easily in minutes. Easily record your income, expenditures, expenses and even financial mistakes for better tracking.",
  },
  {
    id: 2,
    badge: "Debt",
    image: FinoteImages.debtImg,
    alt: "Finote debt tracker with payment reminders",
    title: "Curate, Record and Collect money owed or owed to Easily.",
    content:
      "Owing money, rent, or a very big loan, now you can easily track all that debt in one simple application for easy payment and reminder.",
  },
];

// frequently asked question
export const faqs = [
  {
    question: "What is Finote?",
    answer:
      "Finote is a bookkeeping record application that helps you create a habit of recording your finances easily, all in one simple app. Track debt, view cost spent and correlate records of your total expenditures.",
  },
  {
    question: "How to get started?",
    answer:
      "Download the Finote app, create an account and start recording your payments, income and expenses right away.",
  },
  {
    question: "How do I get Finote application",
    answer:
      "Finote is available for download on both the Google Play Store and the Apple App Store.",
  },
  {
    question: "Is It Available on playstore & App store.",
    answer:
      "Yes. Finote is available on both the Google Play Store and the Apple App Store.",
  },
  {
    question: "Can I set a daily reminder for debt owed",
    answer:
      "Yes. You can set daily reminders so you never lose track of debts owed to you or by you.",
  },
];

// app store download links (replace "#" with the real store URLs)
export const storeLinks = [
  {
    image: FinoteImages.downloadApple,
    alt: "Download Finote on the App Store",
    href: "#",
  },
  {
    image: FinoteImages.downloadPlaystore,
    alt: "Get Finote on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.odinakadevv.finote&pcampaignid=web_share",
  },
];

// footer content
export const socialLinks = [
  { icon: FinoteImages.linkedInIcon, alt: "linkedIn", href: "#" },
  { icon: FinoteImages.facebookIcon, alt: "facebook", href: "#" },
  { icon: FinoteImages.instagramIcon, alt: "instagram", href: "#" },
];

export const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

// contact page
export const contactEmail = "info@finote.com";

export const contactDetails = [
  { icon: "mail", label: contactEmail, href: `mailto:${contactEmail}` },
  { icon: "location", label: "Ketu, Lagos state Nigeria." },
  { icon: "phone", label: "+234 805 134 6872", href: "tel:+2348051346872" },
] as const;

export const contactTopics = ["Support", "Feedback", "General Enquiry"];
