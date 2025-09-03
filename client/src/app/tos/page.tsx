import Privacy from "@/components/layout/Privacy";


export const metadata = {
    title: "Terms of Service | Cyberpeak IT Solutions",
    description:
        "At Cyberpeak IT Solutions, we provide our services under clear and fair terms, ensuring transparent processes, reliable support, and professional standards set by our team of IT, business strategy, and technical development experts.",
};

export default function TermsOfServicePage() {
    const heroData = {
        title: "Cyberpeak Terms of Service",
        description:
            "At Cyberpeak IT Solutions, we provide our services under clear and fair terms, ensuring transparent processes, reliable support, and professional standards set by our team of IT, business strategy, and technical development experts.",
        imageSrc: "/images/tos.jpg",
        imageAlt: "Cyberpeak team collaborating",
        buttonText: "Explore Our Services",
        buttonLink: "/services",
    };

    const tosData = {
        title: "Terms of Service",
        sections: [
            {
                id: "intro",
                title: "Introduction",
                content: `Effective Date: [21-07-2025]
Company Name: CyberPeak IT Solutions Pvt. Ltd.
Website: www.cyberpeakitsolutions.com
Email: marketing@cyberpeakitsolutions.com

Welcome to CyberPeak IT Solutions. By accessing or using our website, products, and services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.`,
            },
            {
                id: "acceptance",
                title: "1. Acceptance of Terms",
                content: `By accessing this website or engaging with our services, including communications via email or SMS, you confirm your agreement to these Terms. If you do not agree, please refrain from using our services.`,
            },
            {
                id: "services",
                title: "2. Services Provided",
                content: `CyberPeak IT Solutions provides digital services including but not limited to:
• E-commerce development
• Mobile & web applications
• ERP integration
• Data analytics
• Marketing strategy and automation
• SMS notifications & 2FA

These services are offered under separate service agreements, which may include additional terms.`,
            },
            {
                id: "user-responsibilities",
                title: "3. User Responsibilities",
                content: `You agree to:
• Provide accurate and up-to-date information
• Use our services only for lawful purposes
• Maintain confidentiality of login credentials, where applicable
• Refrain from interfering with or disrupting the security of the platform`,
            },
            {
                id: "intellectual-property",
                title: "4. Intellectual Property",
                content: `All materials on this site—including code, design elements, graphics, content, and logos—are the intellectual property of CyberPeak IT Solutions or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.`,
            },
            {
                id: "third-party",
                title: "5. Third-Party Tools & Links",
                content: `We may use third-party services and tools for functionality (e.g., analytics, hosting, SMS gateways). While we choose reliable partners, we are not responsible for the content or policies of third-party platforms.`,
            },
            {
                id: "liability",
                title: "6. Limitation of Liability",
                content: `CyberPeak IT Solutions will not be liable for any indirect, incidental, special, or consequential damages resulting from:
• Service interruptions
• Third-party misuse
• Data loss or system failure
• User errors or unauthorized access

Our total liability is limited to the amount paid (if any) for the specific service provided.`,
            },
            {
                id: "sms",
                title: "7. SMS Terms & Conditions",
                content: `By providing your mobile number through any of our forms or service engagements, you agree to receive SMS messages from CyberPeak IT Solutions for:
• Transactional updates (e.g., service progress, OTPs)
• Appointment reminders
• Service-related notifications
• Marketing or promotional messages (only with explicit opt-in)`,
                subsections: [
                    {
                        id: "sms-optin",
                        title: "a. SMS Opt-In",
                        content: `You will only receive marketing-related SMS messages if you explicitly opt in via:
• Website forms
• Checkboxes
• SMS keyword responses
• Written/email request`,
                    },
                    {
                        id: "sms-optout",
                        title: "b. SMS Opt-Out",
                        content: `You may opt out of receiving SMS messages at any time by:
• Replying "STOP" to any SMS
• Contacting us at: privacy@cyberpeakitsolutions.com
• Calling our support line: +91 91477 11721

After opting out, you may still receive essential transactional messages (such as OTPs or billing alerts) unless you deactivate all services.`,
                    },
                ],
            },
            {
                id: "privacy",
                title: "8. Privacy & Data Usage",
                content: `All data collected through our platform, including mobile numbers, is handled in accordance with our [Privacy Policy]. We take every reasonable step to protect your data and ensure responsible usage under applicable data protection laws (GDPR, DPDP, etc.).`,
            },
            {
                id: "termination",
                title: "9. Termination",
                content: `We reserve the right to suspend or terminate your access to our website or services at any time, without prior notice, if:
• You violate these Terms
• Engage in unlawful or abusive activity
• Misuse or tamper with our systems`,
            },
            {
                id: "amendments",
                title: "10. Amendments to Terms",
                content: `We may revise these Terms at any time. Changes will be effective immediately upon posting to the website. Continued use of the site or services constitutes acceptance of the updated Terms.`,
            },
            {
                id: "governing-law",
                title: "11. Governing Law & Jurisdiction",
                content: `These Terms are governed by the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Kolkata, India].`,
            },
            {
                id: "contact",
                title: "12. Contact Us",
                content: `If you have any questions regarding these Terms, your rights, or our practices, please contact us at:
CyberPeak IT Solutions Pvt. Ltd.
Email: marketing@cyberpeakitsolutions.com
Phone: +91 91477 11721
Web: www.cyberpeakitsolutions.com`,
            },
        ],
    };


    return (
        <Privacy
            heroData={heroData}
            privacyData={tosData}
        />
    );
}
