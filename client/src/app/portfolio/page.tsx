import CTA from "@/components/section/CTA";
import Project from "@/components/section/Project";
import Hero from "@/components/section/services/Hero";
import Testimonial from "@/components/section/Testimonial";
// import Map from "@/components/section/Map";

export const metadata = {
    title: "Our Portfolio | Cyberpeak IT Solutions",
    description:
        "Showcasing innovative web solutions, full-stack development expertise, and modern UI/UX design. Explore our portfolio to see how we bring ideas to life.",
};

export default function ContactUs() {
    const heroData = {
        title: "Our Portfolio",
        description:
        "Showcasing innovative web solutions, full-stack development expertise, and modern UI/UX design. Explore our portfolio to see how we bring ideas to life.",
        imageSrc: "/images/services/portfolio.avif",
        imageAlt: "Cyberpeak team collaborating",
        buttonText: "Explore Our Services",
        buttonLink: "/services",
    };
    const projectsData =  [
        {
          id: "choueri",
          title: "The Choueri",
          description: "Choueri Real Estate will never settle for anything less than offering our clients the best in quality projects.",
          industry: "Real Estate",
          type: "Web Application, Ecommerce, Wordpress",
          date: "April 20, 2023",
          image: "/images/portfolio/Choueri.png",
          link: "https://choueri-uae.com"

        },
        {
          id: "theumashow",
          title: "The Uma Show",
          description: "Practical tips, strategies and insights to help you in your quest for increasing vitality and quality of life.",
          industry: "Ecommerce",
          type: "Web Application, Ecommerce, Shopify",
          date: "March 7, 2023",
          image: "/images/portfolio/theumashow.jpg",
          link: "https://theumashow.com/"
        },
        {
          id: "consopharma",
          title: "Consopharma",
          description: "We are thus considered as top Orthopedic Implants company.",
          industry: "Medical",
          type: "Website",
          date: "July 7, 2023",
          image: "/images/portfolio/consopharma.png",
          link: "https://consopharma.com"

        },
        {
            id: "himakshi",
            title: "Himakshi Road-Cons",
            description: "Manufacturer & Exporter of a Premium Quality Construction Equipment.",
            industry: "Manufacturing",
            type: "Website",
            date: "November 24, 2023",
            image: "/images/portfolio/himakshi.jpg",
            link: "https://www.kerbpaver.in/"
            
          },
          {
            id: "rtexports",
            title: "R.T.Exports",
            description: "R.T.Export was established in the year 1992 and for over two decades.",
            industry: "Textile",
            type: "Website",
            date: "Feb 16, 2024",
            image: "/images/portfolio/rtexports.jpg",
            link: "https://rtexports.in"

          },
          {
            id: "hotminutehair",
            title: "Hotminute Hair",
            description: "Salon-worthy results In a hot minute! Innovative haircare that turns head.",
            industry: "Cosmetics",
            type: "Website",
            date: "June 25, 2024",
            image: "/images/portfolio/hotminutehair.jpg",
            link: "https://hotminutehair.com.au"

          },
          {
            id: "polyclinic",
            title: "The Practice Poly Clinic",
            description: "The Practice Poly Clinic is home of experienced Doctors in Dubai.",
            industry: "Medical",
            type: "Website",
            date: "October 13, 2024",
            image: "/images/portfolio/polyclinic.png",
            link: "https://www.thepractice.ae/"

          },
          {
            id: "alsainternational",
            title: "Alsa International",
            description: "Alsa International is leading Customized Books Cover Printing Services provider in USA.",
            industry: "Creative",
            type: "Website",
            date: "Jan 8, 2025",
            image: "/images/portfolio/consopharma.png",
            link: "https://www.alsainternational.in"

          },
      ];

    return (
        <div className="min-h-screen">
            <Hero {...heroData} />
            {/* <Map /> */}
            <Project
                projects={projectsData}
                ctaText="Curious about who we are and what drives our work? Get to know us better."
                ctaButton={{ text: "About Us", href: "/about" }}
                gradient="bg-gradient-to-bl from-white via-[#002440] to-[#002440]"
            />
            <Testimonial gradientColors={"bg-gradient-to-br from-[#002440] via-[#002440] to-white"} />
            <CTA />
        </div>
    );
}
