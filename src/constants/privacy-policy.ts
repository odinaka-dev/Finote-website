// privacy policy content (source: Finote Privacy Policy.pdf)
export const privacyLastUpdated = "September 7, 2026";
export const privacyEmail = "odinakap421@gmail.com";

export const privacyIntro = [
  'Finote ("Finote", "we", "us", or "our") respects your privacy and is committed to protecting your personal information.',
  'This Privacy Policy explains how Finote collects, uses, stores, and protects information when you use the Finote mobile application (the "App").',
  "By using Finote, you agree to the practices described in this Privacy Policy.",
];

export type PolicyBlock = string | { list: string[] };

type PolicySection = {
  title: string;
  content?: PolicyBlock[];
  subsections?: { title: string; content: PolicyBlock[] }[];
};

export const privacySections: PolicySection[] = [
  {
    title: "Information We Collect",
    content: [
      "When you use Finote, we may collect the following categories of information.",
    ],
    subsections: [
      {
        title: "Account Information",
        content: [
          "When you create an account, we may collect:",
          {
            list: [
              "Full name",
              "Email address",
              "Phone number, where provided",
              "Occupation, where provided",
              "Authentication information required to securely access your account",
            ],
          },
          "Your authentication credentials are processed through our authentication provider and are not stored by Finote in plain text.",
        ],
      },
      {
        title: "Financial Information",
        content: [
          "Finote allows you to record and manage your personal financial information, which may include:",
          {
            list: [
              "Earnings and income records",
              "Spending and expense records",
              "Transaction information",
              "Transaction amounts",
              "Transaction status",
              "Descriptions or notes associated with transactions",
              "Information about money owed to you",
              "Names or identifying information you choose to enter for people who owe you money",
              "Dates associated with financial records",
            ],
          },
          "This information is provided by you and is used to provide Finote's financial tracking and record-keeping features.",
        ],
      },
      {
        title: "Device and Technical Information",
        content: [
          "Depending on how you use the App and the services supporting it, certain technical information may be processed, such as:",
          {
            list: [
              "Device type",
              "Operating system",
              "App version",
              "Basic diagnostic information",
              "Error and crash information",
            ],
          },
          "We use this information, where applicable, to maintain, troubleshoot, secure, and improve the App.",
        ],
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We may use the information we collect to:",
      {
        list: [
          "Create and manage your Finote account",
          "Authenticate your identity and keep your account secure",
          "Provide financial tracking and record-keeping features",
          "Store and display your earnings, spending, and transaction records",
          "Help you track money owed to you",
          "Provide reminders and notifications that you request",
          "Generate transaction history and financial records",
          "Provide customer support",
          "Maintain and improve the App",
          "Detect, prevent, and address security issues, fraud, misuse, or technical problems",
          "Comply with applicable legal obligations",
        ],
      },
      "We do not use your financial records for purposes unrelated to providing or improving Finote unless permitted or required by applicable law.",
    ],
  },
  {
    title: "How We Store Your Information",
    content: [
      "Finote uses third-party infrastructure and service providers to securely process and store information.",
      "Our application uses Supabase, which provides database, authentication, and related backend infrastructure.",
      "Your information may therefore be processed and stored on servers operated by our service providers.",
      "We take reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction.",
      "However, no method of electronic storage or transmission over the Internet can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Authentication and Account Security",
    content: [
      "Finote uses authentication services to securely manage user accounts.",
      "You are responsible for maintaining the confidentiality of your account credentials and for activity occurring through your account.",
      "If you believe that your account has been accessed without authorization, please contact us using the contact information provided below.",
    ],
  },
  {
    title: "Notifications and Reminders",
    content: [
      "Finote may provide notifications and reminders for features you choose to use, including financial reminders and other account-related notifications.",
      "You can manage notification permissions through your device settings.",
    ],
  },
  {
    title: "Sharing of Information",
    content: [
      "We do not sell your personal information.",
      "We may share or provide access to information with trusted service providers when necessary to operate Finote, including providers that support:",
      {
        list: [
          "Authentication",
          "Database and cloud storage",
          "Application infrastructure",
          "Notifications",
          "Security and technical operations",
        ],
      },
      "These service providers are permitted to process information only as necessary to provide their services or as otherwise permitted by applicable law.",
      "We may also disclose information when required by law, legal process, court order, or governmental request, or when reasonably necessary to protect the rights, safety, security, or property of Finote, our users, or others.",
    ],
  },
  {
    title: "Financial Information",
    content: [
      "Finote is a personal financial record-keeping and tracking application.",
      "The financial information you enter into Finote is used to provide the features of the App.",
      "Finote does not provide banking, investment, tax, accounting, lending, or financial advisory services unless explicitly stated within the App.",
      "You should ensure that the information you enter into the App is accurate and should not rely on Finote as a substitute for professional financial advice.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your information for as long as necessary to provide the App and its features, maintain your account, comply with legal obligations, resolve disputes, enforce agreements, and protect our legitimate interests.",
      "When you request deletion of your account, we will take reasonable steps to delete or anonymize your personal information, subject to information that we are required or permitted to retain under applicable law.",
    ],
  },
  {
    title: "Account and Data Deletion",
    content: [
      "You may request deletion of your Finote account and associated personal information.",
      `To request account or data deletion, contact us at ${privacyEmail}.`,
      "We may need to verify your request before processing it.",
      "Certain information may be retained where required by law or where necessary for legitimate legal, security, or operational purposes.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Finote is not intended for children under the age of 13.",
      "We do not knowingly collect personal information from children under 13.",
      "If you believe that a child has provided personal information to us, please contact us so that we can take appropriate steps to address the situation.",
      "If applicable laws in your jurisdiction require a higher minimum age, that higher age will apply.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Finote may rely on third-party services to provide certain functionality.",
      "These services may process information in accordance with their own privacy policies and terms.",
      "Our current backend infrastructure includes Supabase.",
      "You should review the privacy practices of third-party services used by the App where appropriate.",
    ],
  },
  {
    title: "International Data Transfers",
    content: [
      "Depending on the location of our service providers and infrastructure, your information may be processed or stored in countries other than the country in which you live.",
      "Where required by applicable law, we take appropriate measures to provide protection for information transferred across borders.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We use reasonable security measures designed to protect your information.",
      "These measures may include secure authentication, encrypted connections, access controls, and appropriate backend security practices.",
      "However, no digital service can guarantee absolute security.",
      "You should also take reasonable steps to protect your account, including keeping your login credentials private and using a strong password.",
    ],
  },
  {
    title: "Your Privacy Rights",
    content: [
      "Depending on your location and applicable law, you may have rights regarding your personal information, including the right to:",
      {
        list: [
          "Access your personal information",
          "Request correction of inaccurate information",
          "Request deletion of your personal information",
          "Request restrictions on certain processing",
          "Object to certain processing",
          "Request a copy of certain information",
          "Withdraw consent where processing is based on consent",
        ],
      },
      "To exercise an applicable privacy right, contact us using the details below.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time.",
      'When we make changes, we will update the "Last updated" date at the beginning of this policy.',
      "Where appropriate, we may also provide additional notice through the App.",
      "Your continued use of Finote after an updated Privacy Policy becomes effective means that you acknowledge the updated policy.",
    ],
  },
];

export const privacyContact = [
  { label: "Developer/Company", value: "Finote" },
  { label: "Country", value: "Nigeria" },
];
