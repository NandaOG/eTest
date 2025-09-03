import CTA from "@/components/section/CTA";
import Hero from "@/components/section/services/Hero";
import Service from "@/components/section/Services";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaLayerGroup,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export const metadata = {
  title: "Mobile App Development Services | Cyberpeak IT Solutions",
  description:
    "CyberPeak IT Solutions offers expert mobile app development services to help businesses create cutting-edge, user-friendly applications.",
};

export default function MobileAppServices() {
  const services = [
    {
      id: "cross-platform",
      title: "Cross Platform App Development",
      description:
        "We build apps that work seamlessly on both iOS and Android using a single codebase. Get faster time-to-market with cost-effective, unified mobile experiences.",
      icon: <FaLayerGroup />,
      image: "/images/services/cross-platform-app.jpg",
      link: "/mobile-app/cross-platform",
    },
    {
      id: "react-native",
      title: "React Native App Development",
      description:
        "Our React Native developers create fast, responsive, and user-friendly mobile apps that leverage native components for an exceptional user experience.",
      icon: <FaReact />,
      image: "/images/services/react-native.jpg",
      link: "/mobile-app/react-native",
    },
    {
      id: "flutter",
      title: "Flutter App Development",
      description:
        "We use Flutter to develop visually appealing and high-performance apps. Enjoy rapid development, expressive UIs, and seamless user experiences.",
      icon: <SiFlutter />,
      image: "/images/services/flutter.avif",
      link: "/mobile-app/flutter",
    },
    {
      id: "ios",
      title: "iOS App Development",
      description:
        "We deliver sleek, high-performance iOS apps built in Swift and Objective-C. Perfect for startups and enterprises aiming to thrive in the Apple ecosystem.",
      icon: <FaApple />,
      image: "/images/services/ios.jpg",
      link: "/mobile-app/ios",
    },
    {
      id: "android",
      title: "Android App Development",
      description:
        "Our Android apps are optimized for performance, security, and scalability. Reach a massive user base with robust, native Android applications.",
      icon: <FaAndroid />,
      image: "/images/services/android.avif",
      link: "/mobile-app/android",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Mobile App Development Services"
        description="CyberPeak IT Solutions offers expert mobile app development services to help businesses create cutting-edge, user-friendly applications."
        imageSrc="/images/mobile2.jpg"
        imageAlt="mobile app development"
        buttonText="Let's Build Your App"
        buttonLink="/contact"
      />
      <Service
        gradientColors="bg-gradient-to-bl from-white via-[#002440] to-white"
        title="Our Expertise"
        servicesData={services}
      />
      <CTA gradientColors="bg-gradient-to-br from-white via-[#002440] to-[#002440]" />
    </div>
  );
}
