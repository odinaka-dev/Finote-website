<p align="center">
  <img src="src/assets/image/logo.png" alt="Finote logo" width="160" />
</p>

<h3 align="center">Simple solution that powers your Finance</h3>

<p align="center">
  Record payments, income and expenses, and see your daily financial operations, all in one simple app.
</p>

<p align="center">
  <img src="src/assets/image/download-apple.png" alt="Download on the App Store" height="40" />
  &nbsp;
  <img src="src/assets/image/download-playstore.png" alt="Get it on Google Play" height="40" />
</p>

<p align="center">
  <img src="src/assets/image/banner-image.png" alt="Finote app preview" width="520" />
</p>

---

## What is Finote?

**Finote** is a bookkeeping app that helps you build the habit of recording your finances. Track debts, see what you've spent, and compare records of your total spending, all in one simple app.

This repository is the **landing page** for Finote.

## What Finote helps you do

<table>
  <tr>
    <td width="50%" valign="top">
      <img src="" alt="Finote dashboard" width="100%" />
    </td>
    <td width="50%" valign="top">
      <h3>📒 Bookkeeping</h3>
      <p><b>Record your finances, income and expenses easily.</b></p>
      <p>Open a Finote account in minutes. Record your income, spending and expenses, and even your financial mistakes, so they're easier to track.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>💸 Debt tracking</h3>
      <p><b>Record and collect money you owe or that's owed to you.</b></p>
      <p>Whether it's rent, a loan or money a friend owes you, keep every debt in one place with payment tracking and reminders.</p>
    </td>
    <td width="50%" valign="top">
      <img src="" alt="Finote debt tracking" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="src/assets/image/sub-banner-image.png" alt="Finote debt reminders and savings notifications" width="520" />
</p>

<p align="center"><i>Daily debt reminders, due-date alerts and savings updates, sent right when you need them.</i></p>

---

## Keeping it simple

The landing page is **deliberately simple**. It's one scrolling page with only the sections it needs:

1. **Hero:** the headline, a short description, the app store buttons and an app preview
2. **Features:** bookkeeping and debt tracking, with screenshots
3. **Call to action:** a dark banner showing reminders and notifications
4. **FAQ:** a questions list with an answer panel on desktop, and a +/− dropdown on mobile
5. **Footer:** company links, contact details, social links and policies

The page has no router, no state management library, no UI kit and no animation library. Content like the feature cards, FAQs and links lives in plain arrays in [`src/constants/helpers.ts`](src/constants/helpers.ts), and all images are imported in one place, [`src/constants/image.ts`](src/constants/image.ts). The only state on the whole page is a single `useState` in the FAQ.

## Tools used

| Tool                                                     | Why                                                                |
| -------------------------------------------------------- | ------------------------------------------------------------------ |
| [React 19](https://react.dev)                            | Components                                                         |
| [TypeScript](https://www.typescriptlang.org)             | Type safety                                                        |
| [Vite](https://vite.dev)                                 | Dev server and build                                               |
| [Tailwind CSS v4](https://tailwindcss.com)               | Styling, set up with the `@tailwindcss/vite` plugin                |
| [React Compiler](https://react.dev/learn/react-compiler) | Automatic memoization, with no need for `useMemo` or `useCallback` |
| Google Fonts                                             | **Manrope** for headings, **Outfit** for body text                 |

The only runtime dependencies are `react`, `react-dom` and `tailwindcss`.

## Project structure

```
src/
├── assets/
│   ├── icons/        # social icons (svg)
│   └── image/        # logo, banners, screenshots, store badges
├── constants/
│   ├── helpers.ts    # page content: features, FAQs, links
│   └── image.ts      # single import point for all images
├── screens/
│   ├── page.tsx      # the landing page
│   ├── book-keeping.tsx
│   └── sub-banner.tsx
├── shared/           # header, footer, faq, download buttons
├── styles/
│   └── index.css     # fonts, colour tokens, Tailwind import
└── main.tsx
```

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build
```

---

<p align="center">Made in Lagos, Nigeria 🇳🇬 · <a href="mailto:info@finote.com">info@finote.com</a></p>
