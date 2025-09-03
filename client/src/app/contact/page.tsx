import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
// import Map from "@/components/section/Map";

export const metadata = {
    title: "Contact Us | Cyberpeak IT Solutions",
    description:
        "We're here to assist you! Contact us for any questions, feedback, or support – we’d love to hear from you and help with anything you need.",
};

export default function ContactUs() {
    const heroData = {
        title: "Contact Us",
        description:
        "We're here to assist you! Contact us for any questions, feedback, or support – we’d love to hear from you and help with anything you need.",
        imageSrc: "/images/contact.jpg",
        imageAlt: "Cyberpeak team collaborating",
        buttonText: "Explore Our Services",
        buttonLink: "/services",
    };

    return (
        <div className="min-h-screen">
            <Hero {...heroData} />
            {/* <Map /> */}
            <CTA />
        </div>
    );
}
