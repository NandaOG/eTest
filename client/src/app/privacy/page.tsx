import Privacy from "@/components/layout/Privacy";


export const metadata = {
  title: "Privacy Policy | Cyberpeak IT Solutions",
  description:
    "At Cyberpeak IT Solutions, we value your privacy and protect your personal information with care, using strict security measures and transparent practices guided by our team of IT, business strategy, and technical development professionals",
};

export default function PrivacyPolicyPage() {
  const heroData = {
    title: "Cyberpeak Privacy Policy",
    description:
      "At Cyberpeak IT Solutions, we value your privacy and protect your personal information with care, using strict security measures and transparent practices guided by our team of IT, business strategy, and technical development professionals",
    imageSrc: "/images/privacy-policy.jpg",
    imageAlt: "Cyberpeak team collaborating",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
  };

  const privacyData = {
    sections: [
      {
        id: "intro",
        title: "Privacy Policy",
        content: `Effective Date: [21-07-2025]
Company: Cyber Peak IT Solutions Pvt. Ltd.
Website: www.cyberpeakitsolutions.com

At CyberPeak IT Solutions, we prioritize your privacy with the same precision we bring to our digital solutions. This Privacy Policy outlines how we collect, use, and protect your personal data across all touchpoints—including web, mobile, email, and SMS interactions. Our practices comply with global standards including GDPR, and reflect our commitment to ethical, secure, and user-centric data management.`,
      },
      {
        id: "scope",
        title: "1. Scope of Data Collection",
        content: `We collect only the data necessary to deliver and optimize our services.`,
        subsections: [
          {
            id: "scope-identifiable",
            title: "a. Identifiable Information",
            content: `• Name, email, mobile number, job title, company name
• Billing and project details (if applicable)`,
          },
          {
            id: "scope-technical",
            title: "b. Technical Information",
            content: `• IP address, browser, device identifiers, user behavior via cookies
• Location and system usage (for support and analytics)`,
          },
          {
            id: "scope-sms",
            title: "c. SMS Data",
            content: `When you opt-in to receive SMS messages, we securely store:
• Your mobile number
• Consent metadata (timestamp, source, intent)
• SMS delivery and interaction records

We never share or sell your SMS data.`,
          },
        ],
      },
      {
        id: "use",
        title: "2. Use of Information",
        content: `We use your data strictly to:
• Deliver and personalize services
• Send service alerts, project updates, and SMS notifications (with consent)
• Provide secure two-factor authentication
• Perform analytics to improve service performance
• Comply with legal and regulatory obligations

All processing is done under lawful basis: consent, contract, legal obligation, or legitimate interest.`,
      },
      {
        id: "sms",
        title: "3. SMS Communication Policy",
        content: `We leverage SMS for:
• Transactional notifications
• Account verification (OTP/2FA)
• Service updates and reminders
• Marketing (only with explicit opt-in consent)

Users may opt out anytime by replying "STOP" or emailing us. We ensure compliance with local telecom and data protection laws in all regions we operate.`,
      },
      {
        id: "sharing",
        title: "4. Data Sharing & Third Parties",
        content: `Your data is shared only with trusted vendors and partners under strict confidentiality agreements, and solely for fulfilling services (e.g., secure hosting, SMS gateways, analytics).

We do not:
• Sell or rent your data
• Authorize third-party access without contract and compliance`,
      },
      {
        id: "retention",
        title: "5. Data Retention & Security",
        content: `We retain personal data only for as long as necessary for the purposes outlined. We employ enterprise-grade security protocols including:
• Encrypted databases and TLS/SSL connections
• Access control, audit logs, and MFA on all systems
• Regular vulnerability testing and compliance reviews`,
      },
      {
        id: "rights",
        title: "6. Your Rights (GDPR & Global Compliance)",
        content: `You have the right to:
• Access, correct, or delete your data
• Withdraw consent or object to data processing
• Request data portability
• File a complaint with a regulatory authority

To exercise your rights, contact: privacy@cyberpeakitsolutions.com`,
      },
      {
        id: "cookies",
        title: "7. Cookies & Tracking Technologies",
        content: `Our website uses cookies to:
• Enable core functionality
• Analyze usage patterns
• Customize content and experience

You may manage your cookie preferences through your browser. For full details, see our [Cookie Policy].`,
      },
      {
        id: "updates",
        title: "8. Policy Updates",
        content: `We may update this Privacy Policy to reflect changes in law or best practices. Users will be notified via website updates or email.`,
      },
      {
        id: "contact",
        title: "9. Contact Us",
        content: `CyberPeak IT Solutions Pvt. Ltd.
India (Global operations)
Email: privacy@cyberpeakitsolutions.com
Website: www.cyberpeakitsolutions.com
Phone: +91 91477 11721`,
      },
      {
        id: "consent",
        title: "Consent Check Box",
        subsections: [
          {
            id: "required-consent",
            title: "1. Required Consent (for all form submissions)",
            content: `I agree to the Privacy Policy and consent to being contacted by CyberPeak IT Solutions.`,
          },
          {
            id: "optional-consent",
            title: "2. Optional Marketing Consent (for SMS & email updates)",
            content: `I’d like to receive updates, offers, and insights via SMS or email.`,
          },
        ],
      },
    ],
  };


  return (
    <Privacy
      heroData={heroData}
      privacyData={privacyData}
    />
  );
}
