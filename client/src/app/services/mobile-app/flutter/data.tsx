// flutterAppDevServiceData.js

import {
    FaMobileAlt,
    FaCode,
    FaTools,
    FaBug,
    FaRocket,
    FaCogs,
    FaPalette,
    FaSyncAlt,
  } from "react-icons/fa";
  import {
    LuSmartphone,
    LuLayers,
    LuTrendingUp,
    LuShieldCheck,
  } from "react-icons/lu";
  
  export const heroData = {
    title: "Flutter App Development",
    description:
      "Build beautiful, high-performance mobile apps with a single codebase. Our Flutter experts at CyberPeak create scalable cross-platform applications that deliver native-like experiences on both Android and iOS.",
    imageSrc: "/images/services/flutter.avif",
    imageAlt: "Flutter app development by CyberPeak",
    buttonText: "Start Your Flutter Project",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Flutter App Development</b> with Native Performance",
    subtitle:
      "We specialize in Flutter to deliver cost-effective, cross-platform apps without compromising on quality, speed, or design. Reach more users, faster.",
    buttonText: "Get a Free App Consultation",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Advantage in Flutter Development",
    bullets: [
      "Single codebase for Android & iOS.",
      "Faster time-to-market with Flutter’s hot reload.",
      "Pixel-perfect UI with customizable widgets.",
      "Seamless integration with native modules & APIs.",
      "Ongoing support and cross-platform updates.",
    ],
    features: [
      {
        id: 1,
        icon: <FaMobileAlt />,
        title: "Cross-Platform Delivery",
        desc: "We create apps that run natively on both Android and iOS, using a single Flutter codebase for maximum efficiency and consistency.",
      },
      {
        id: 2,
        icon: <FaPalette />,
        title: "Beautiful, Native-like UI",
        desc: "Our Flutter apps use custom widgets and animations to replicate native design while delivering a smooth and responsive user experience.",
      },
      {
        id: 3,
        icon: <FaCode />,
        title: "Optimized Code Architecture",
        desc: "We follow scalable architecture patterns like BLoC and Provider to ensure maintainable, testable, and future-proof code.",
      },
      {
        id: 4,
        icon: <LuShieldCheck />,
        title: "Secure Development Standards",
        desc: "Our Flutter solutions are built with strong data encryption, secure APIs, and robust authentication to protect user data.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Cross-Platform Features</b> That Drive Results",
      description:
        "Our Flutter apps combine the best of native performance and cross-platform flexibility — enabling rapid development without trade-offs.",
    },
    features: [
      {
        icon: <FaTools />,
        title: "Full-Cycle Flutter Development",
        description:
          "We handle everything — from concept and design to development and deployment — under one roof with a unified Flutter workflow.",
      },
      {
        icon: <LuSmartphone />,
        title: "Device & Platform Optimization",
        description:
          "We ensure consistent performance across Android and iOS devices, handling platform-specific differences through platform channels.",
      },
      {
        icon: <FaCogs />,
        title: "Native API & SDK Integration",
        description:
          "Need access to camera, Bluetooth, sensors, or payment systems? We integrate native features seamlessly using platform channels and plugins.",
      },
      {
        icon: <FaBug />,
        title: "Comprehensive QA Testing",
        description:
          "We test for performance, responsiveness, and functionality using both manual and automated tools to ensure a bug-free experience.",
      },
      {
        icon: <LuLayers />,
        title: "Modular & Scalable Codebase",
        description:
          "We implement modular architecture using best practices like BLoC, MVC, and clean architecture — enabling fast iteration and scalability.",
      },
      {
        icon: <FaSyncAlt />,
        title: "Realtime Data & Sync",
        description:
          "We integrate with Firebase, REST APIs, and GraphQL to deliver real-time experiences and smooth data synchronization across devices.",
      },
      {
        icon: <LuTrendingUp />,
        title: "App Store & Play Store Optimization",
        description:
          "We optimize your listing, visuals, keywords, and performance to boost visibility and downloads on both app stores.",
      },
      {
        icon: <FaRocket />,
        title: "Post-Launch Support & Updates",
        description:
          "After going live, we continue to support you with performance monitoring, updates, and feature enhancements for long-term success.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Development Process",
    servicesData: [
      {
        id: "step1",
        title: "Requirement Discovery",
        description:
          "We start with in-depth discussions to understand your app idea, business goals, and target audience. During this phase, we define core features, platform-specific considerations, and how Flutter can accelerate your go-to-market strategy while reducing costs. We ensure the app’s vision is technically feasible and aligns with your long-term roadmap.",
        icon: <LuSmartphone />,
        image: "/images/services/reuirement.jpg",
      },
      {
        id: "step2",
        title: "UI/UX Design",
        description:
          "Our design team creates visually compelling, user-friendly interfaces using Flutter's widget-based framework. We design screens that reflect your brand identity and ensure a consistent look and feel across Android and iOS platforms. This includes wireframes, interactive prototypes, and visual designs optimized for mobile usability.",
        icon: <FaMobileAlt />,
        image: "/images/services/mobile-ui.avif",
      },
      {
        id: "step3",
        title: "Flutter Development",
        description:
          "Using Dart and Flutter, we write high-quality, modular code that’s optimized for performance. We build scalable, reactive UI with custom animations, integrate backend APIs, and implement local storage, authentication, push notifications, and other native capabilities. Our codebase supports long-term maintenance and multi-platform support from day one.",
        icon: <FaCode />,
        image: "/images/services/development-coding.jpg",
      },
      {
        id: "step4",
        title: "Testing & Quality Assurance",
        description:
          "We run comprehensive QA tests across devices and OS versions to ensure visual accuracy, stable performance, and smooth interaction. Our process includes unit tests, widget tests, integration testing, and manual validation for real-world usage, ensuring your Flutter app is production-ready and bug-free.",
        icon: <FaBug />,
        image: "/images/services/testing.jpg",
      },
      {
        id: "step5",
        title: "Deployment & Store Launch",
        description:
          "We help you publish your Flutter app to both the Google Play Store and Apple App Store. This includes configuring builds, creating assets, and optimizing metadata for App Store Optimization (ASO). We also set up analytics and crash reporting tools to monitor real-world performance from the moment you go live.",
        icon: <FaRocket />,
        image: "/images/services/deployment.avif",
      },
      {
        id: "step6",
        title: "Support & Maintenance",
        description:
          "Once live, we provide continuous support for app updates, bug fixes, performance monitoring, and new feature rollouts. Whether you need OS version upgrades, SDK updates, or backend changes, we ensure your app evolves with your business and continues to delight users across platforms.",
        icon: <LuShieldCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  