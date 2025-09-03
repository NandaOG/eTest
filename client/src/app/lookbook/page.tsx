import CTA from "@/components/section/CTA";
import Project from "@/components/section/Project";
import Hero from "@/components/section/services/Hero";
import Testimonial from "@/components/section/Testimonial";

export const metadata = {
    title: "Our Lookbook | Luxe Apparel",
    description:
        "Explore our latest fashion collections and styling inspiration. Discover how to create stunning looks with our luxury pieces.",
};

export default function Lookbook() {
    const heroData = {
        title: "Fashion Lookbook",
        description:
        "Explore our latest fashion collections and styling inspiration. Discover how to create stunning looks with our luxury pieces.",
        imageSrc: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
        imageAlt: "Fashion lookbook",
        buttonText: "Shop the Look",
        buttonLink: "/shop",
    };
    
    const lookbookData = [
        {
          id: "spring-elegance",
          title: "Spring Elegance",
          description: "Discover the perfect balance of comfort and sophistication with our spring collection featuring flowing fabrics and fresh colors.",
          industry: "Fashion",
          type: "Seasonal Collection",
          date: "Spring 2024",
          image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
          link: "/collections/spring"
        },
        {
          id: "executive-power",
          title: "Executive Power",
          description: "Command attention in the boardroom with our executive collection of tailored suits and sophisticated business wear.",
          industry: "Fashion",
          type: "Business Collection",
          date: "Fall 2024",
          image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
          link: "/collections/executive"
        },
        {
          id: "weekend-luxury",
          title: "Weekend Luxury",
          description: "Elevate your casual moments with our weekend collection featuring premium casual wear and comfortable luxury pieces.",
          industry: "Fashion",
          type: "Casual Collection",
          date: "Summer 2024",
          image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
          link: "/collections/casual"
        },
        {
            id: "evening-glamour",
            title: "Evening Glamour",
            description: "Make a statement at any event with our evening collection featuring elegant gowns and sophisticated cocktail dresses.",
            industry: "Fashion",
            type: "Evening Wear",
            date: "Winter 2024",
            image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
            link: "/collections/evening"
        },
        {
            id: "accessory-perfection",
            title: "Accessory Perfection",
            description: "Complete your look with our curated selection of luxury accessories, from designer handbags to statement jewelry.",
            industry: "Fashion",
            type: "Accessories",
            date: "Year Round",
            image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
            link: "/collections/accessories"
        },
        {
            id: "sustainable-style",
            title: "Sustainable Style",
            description: "Fashion with a conscience. Our eco-friendly collection proves that luxury and sustainability can beautifully coexist.",
            industry: "Fashion",
            type: "Sustainable Collection",
            date: "Ongoing",
            image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
            link: "/collections/sustainable"
        },
      ];

    return (
        <div className="min-h-screen">
            <Hero {...heroData} />
            <Project
                projects={lookbookData}
                ctaText="Ready to create your signature style?"
                ctaButton={{ text: "Shop Now", href: "/shop" }}
                gradient="bg-gradient-to-bl from-white via-[#002440] to-white"
            />
            <Testimonial gradientColors={"bg-gradient-to-br from-[#002440] via-[#002440] to-white"} />
            <CTA />
        </div>
    );
}