// crossPlatformAppDevServiceData.js

import {
    FaProjectDiagram,
    FaLaptopCode,
    FaChartLine,
    FaClock,
    FaBug,
    FaRocket,
    FaCloudUploadAlt,
    FaCogs,
  } from "react-icons/fa";
  import {
    LuSmartphone,
    LuLayers,
    LuTrendingUp,
    LuGlobe,
    LuShieldCheck,
  } from "react-icons/lu";
  
  export const heroData = {
    title: "Cross-Platform App Development",
    description:
      "Build once, deploy everywhere. We develop high-quality mobile apps that work seamlessly across iOS, Android, and the web — reducing costs and maximizing reach with a unified codebase.",
    imageSrc: "/images/services/cross-platform-app.jpg",
    imageAlt: "Cross-platform mobile development services by CyberPeak",
    buttonText: "Request a Free Consultation",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Cross-Platform App Development</b> for Maximum ROI",
    subtitle:
      "Our cross-platform solutions help you go live faster, reduce engineering overhead, and scale across platforms with consistent user experience — all from a single, agile codebase.",
    buttonText: "Start Building Smarter",
    buttonLink: "/contact",
    highlightTitle: "What Sets CyberPeak Apart",
    bullets: [
      "One codebase, multiple platforms.",
      "Streamlined updates and version control.",
      "Consistent design and performance.",
      "Faster time to market, lower development costs.",
      "Scalable architecture for long-term growth.",
    ],
    features: [
      {
        id: 1,
        icon: <FaProjectDiagram />,
        title: "Unified Architecture",
        desc: "We architect scalable solutions that run smoothly across platforms — saving you from duplicated effort and fragmented code.",
      },
      {
        id: 2,
        icon: <LuGlobe />,
        title: "Wider Market Reach",
        desc: "Reach users across iOS, Android, web, and desktop with one solution. More platforms, more customers, more ROI.",
      },
      {
        id: 3,
        icon: <FaChartLine />,
        title: "Cost Efficiency",
        desc: "Avoid the cost of separate iOS and Android teams. Our cross-platform approach delivers exceptional value with reduced development time.",
      },
      {
        id: 4,
        icon: <LuShieldCheck />,
        title: "Enterprise-Grade Security",
        desc: "We implement robust security across platforms, including secure APIs, encrypted storage, and role-based access controls.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Cross-Platform Features</b> that Drive Growth",
      description:
        "Whether you're a startup or an enterprise, our cross-platform expertise ensures rapid development and consistent performance — on any device, anywhere.",
    },
    features: [
      {
        icon: <FaLaptopCode />,
        title: "Single Codebase Advantage",
        description:
          "We use frameworks like Flutter, React Native, and Kotlin Multiplatform to maintain one efficient codebase for multiple targets.",
      },
      {
        icon: <LuSmartphone />,
        title: "Platform-Specific UI",
        description:
          "Your app will follow platform-specific design patterns (Material Design for Android, Cupertino for iOS) while sharing the same logic underneath.",
      },
      {
        icon: <FaClock />,
        title: "Faster Development Cycles",
        description:
          "Our approach cuts build time in half by allowing parallel platform releases — with shared logic and unified testing.",
      },
      {
        icon: <LuLayers />,
        title: "Modular & Maintainable Code",
        description:
          "We write modular code and follow component-based architecture, making it easier to scale, refactor, and maintain across platforms.",
      },
      {
        icon: <FaCloudUploadAlt />,
        title: "CI/CD for All Platforms",
        description:
          "Automated pipelines for iOS, Android, and web ensure faster deployment and frequent, stable releases.",
      },
      {
        icon: <FaBug />,
        title: "Cross-Device Testing",
        description:
          "Our QA team tests on real devices across screen sizes and OS versions to guarantee pixel-perfect experiences everywhere.",
      },
      {
        icon: <LuTrendingUp />,
        title: "Optimized for Performance",
        description:
          "We ensure native-like speed and responsiveness by leveraging platform bridges and low-level optimizations.",
      },
      {
        icon: <FaCogs />,
        title: "API-Driven Architecture",
        description:
          "Cross-platform apps rely heavily on APIs — we design scalable, secure, and fast backend integrations to drive your business logic.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Development Process",
    servicesData: [
      {
        id: "step1",
        title: "Strategy & Requirement Analysis",
        description:
          "Our cross-platform journey starts by deeply understanding your business objectives, target audience, and performance expectations. We conduct competitive research, prioritize key features, and recommend the best-fit technologies like Flutter, React Native, or Kotlin Multiplatform based on your needs. This ensures a unified codebase strategy without compromising user experience on any device.",
        icon: <FaProjectDiagram />,
        image: "/images/services/quantitative-market-research.avif",
      },
      {
        id: "step2",
        title: "Cross-Platform Design",
        description:
          "Our design team creates fluid interfaces that feel natural on both iOS and Android. We align with each platform's visual language — like Material Design or Cupertino — while maintaining brand consistency. Wireframes, interactive prototypes, and responsive layouts ensure your app looks and feels native, even with a shared backend and codebase.",
        icon: <LuSmartphone />,
        image: "/images/services/cross-platform-ui.jpg",
      },
      {
        id: "step3",
        title: "Agile Development",
        description:
          "Using modern frameworks, we develop modular and reusable code that powers your app across platforms. Our agile sprint cycles ensure rapid feature delivery, regular feedback loops, and transparent progress. With tools like hot reload and shared logic components, we deliver a faster MVP with native performance characteristics.",
        icon: <FaLaptopCode />,
        image: "/images/services/agile-development.jpg",
      },
      {
        id: "step4",
        title: "Multi-Platform Testing",
        description:
          "To ensure seamless functionality and consistent UI, we run rigorous testing on real iOS and Android devices. Our QA team performs unit tests, UI tests, cross-device testing, and regression testing to eliminate bugs, performance glitches, and UX inconsistencies. You get a stable app that works across various screen sizes and OS versions.",
        icon: <FaBug />,
        image: "/images/services/multi-device.jpg",
      },
      {
        id: "step5",
        title: "Deployment & Store Launch",
        description:
          "We guide you through successful app store launches by handling app signing, store listing creation, compliance checks, and performance optimization. Whether you're targeting Google Play, the App Store, or both, we make sure your app meets guidelines, passes review processes, and is discoverable by your users.",
        icon: <FaRocket />,
        image: "/images/services/launch-app.jpg",
      },
      {
        id: "step6",
        title: "Monitoring & Post-Launch Support",
        description:
          "After launch, we stay involved by monitoring performance metrics, crash reports, and user behavior. We provide ongoing maintenance, updates, and feature enhancements to keep your app optimized and scalable. Our support ensures your app continues to perform well and evolve as your business grows.",
        icon: <LuShieldCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
  