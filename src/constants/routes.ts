export const pageRoutes = [
  {
    path: "/",
    file: "index.html",
    title: "Finote | Simple Bookkeeping App to Track Income, Expenses & Debt",
    description:
      "Finote is a simple bookkeeping app to record payments, income and expenses, track debts with daily reminders, and see your daily financial operations in one place. Available on iOS and Android.",
  },
  {
    path: "/privacy-policy",
    file: "privacy-policy.html",
    title: "Privacy Policy | Finote",
    description:
      "Learn how Finote collects, uses, stores, and protects your personal and financial information when you use the Finote app.",
  },
] as const;

export type PagePath = (typeof pageRoutes)[number]["path"];

// catch-all page; Vercel serves 404.html for any unknown URL
export const notFoundRoute = {
  path: "/404",
  file: "404.html",
  title: "Page not found | Finote",
  description: "The page you are looking for does not exist or has been moved.",
} as const;
