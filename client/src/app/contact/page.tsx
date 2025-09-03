import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
// import Map from "@/components/section/Map";

export const metadata = {
    title: "Contact Us | Luxe Apparel",
    description:
        "We're here to help you find your perfect style! Contact us for styling advice, product questions, or personalized shopping assistance.",
};

export default function ContactUs() {
    const heroData = {
        title: "Contact Us",
        description:
        "We're here to help you find your perfect style! Contact us for styling advice, product questions, or personalized shopping assistance.",
        imageSrc: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
        imageAlt: "Fashion consultation",
        buttonText: "Shop Collection",
        buttonLink: "/shop",
    };

    return (
        <div className="min-h-screen">
            <Hero {...heroData} />
            {/* <Map /> */}
            <CTA />
        </div>
    );
}
