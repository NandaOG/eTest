// reactNativeAppDevServiceData.js

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
    title: "React Native App Development",
    description:
      "Build high-performance, truly native mobile apps for iOS and Android with a shared codebase. Our React Native developers craft scalable, cost-effective solutions with seamless UX and native power.",
    imageSrc: "/images/services/react-native.jpg",
    imageAlt: "React Native app development by CyberPeak",
    buttonText: "Start Your RN Project",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>React Native App Development</b> with Native Performance",
    subtitle:
      "Our React Native team builds robust apps that behave like native applications — without doubling your budget. Launch faster with seamless updates and native integrations.",
    buttonText: "Get a Free App Consultation",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Advantage in React Native",
    bullets: [
      "Shared codebase for iOS and Android.",
      "Native module integration for top performance.",
      "Faster development and cost savings.",
      "Reusable UI components and animations.",
      "Ongoing maintenance and scaling support.",
    ],
    features: [
      {
        id: 1,
        icon: <FaMobileAlt />,
        title: "Cross-Platform Apps",
        desc: "We deliver consistent experiences across platforms using React Native's shared components and logic — all while maintaining native performance.",
      },
      {
        id: 2,
        icon: <FaPalette />,
        title: "Custom UI & Animations",
        desc: "Our apps feature elegant, platform-specific UIs that users love, powered by React Native’s powerful styling and animation libraries.",
      },
      {
        id: 3,
        icon: <FaCode />,
        title: "Modern Code Architecture",
        desc: "We follow proven architecture patterns like Redux, Context API, and MVVM to build maintainable and modular codebases.",
      },
      {
        id: 4,
        icon: <LuShieldCheck />,
        title: "Secure & Scalable",
        desc: "From secure authentication to encrypted storage and robust API handling, we build React Native apps that scale securely.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Cross-Platform Features</b> That Deliver Impact",
      description:
        "React Native lets you go to market faster with one codebase, while delivering native feel, fast interactions, and seamless animations.",
    },
    features: [
      {
        icon: <FaTools />,
        title: "End-to-End React Native Development",
        description:
          "From ideation and prototyping to deployment and post-launch support — we provide full-cycle development using React Native.",
      },
      {
        icon: <LuSmartphone />,
        title: "Native Feel & Performance",
        description:
          "Your app will feel just like a native app thanks to React Native's native components and device-optimized rendering.",
      },
      {
        icon: <FaCogs />,
        title: "Native Module Integration",
        description:
          "Need to integrate features like GPS, camera, Bluetooth, or payments? We seamlessly integrate native modules using Objective-C, Swift, or Java.",
      },
      {
        icon: <FaBug />,
        title: "Rigorous Testing & QA",
        description:
          "We run unit tests, UI tests, and performance tests on real devices to ensure your app is reliable, responsive, and bug-free.",
      },
      {
        icon: <LuLayers />,
        title: "Component-Based Development",
        description:
          "We design modular UI components using React Native's powerful composition model, which allows fast iteration and reusability.",
      },
      {
        icon: <FaSyncAlt />,
        title: "Live & Hot Reload",
        description:
          "React Native's hot reloading accelerates development and enables real-time preview of updates — cutting dev time significantly.",
      },
      {
        icon: <LuTrendingUp />,
        title: "App Store Optimization",
        description:
          "We optimize your app for visibility, downloads, and reviews on both the App Store and Google Play using strategic ASO techniques.",
      },
      {
        icon: <FaRocket />,
        title: "Ongoing Support & Versioning",
        description:
          "We keep your app up to date with platform upgrades, device changes, and evolving user expectations through continuous support.",
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
          "We begin by understanding your business goals, audience, and app features. This helps us decide when React Native is the best fit for rapid cross-platform delivery, and lets us plan the most scalable tech architecture for your mobile solution.",
        icon: <LuSmartphone />,
        image: "/images/services/requirement-gathering.jpg",
      },
      {
        id: "step2",
        title: "UI/UX Design",
        description:
          "Our design team crafts intuitive UI with user-centric wireframes and prototypes. We follow mobile-first principles while designing screens for both iOS and Android — ensuring a polished, accessible experience on every device.",
        icon: <FaPalette />,
        image: "/images/services/mobile-ui.avif",
      },
      {
        id: "step3",
        title: "React Native Development",
        description:
          "We write reusable, optimized code using React Native, Redux, and TypeScript (or JavaScript) to create fast, scalable apps. From navigation and APIs to native device features and push notifications — we ensure seamless performance across devices.",
        icon: <FaCode />,
        image: "/images/services/development.avif",
      },
      {
        id: "step4",
        title: "Testing & Quality Assurance",
        description:
          "Every app we build undergoes manual and automated testing on various device resolutions and OS versions. We ensure no memory leaks, visual glitches, or performance bottlenecks — so your app is reliable from day one.",
        icon: <FaBug />,
        image: "/images/services/testing.avif",
      },
      {
        id: "step5",
        title: "App Store Deployment",
        description:
          "We take care of everything needed to launch your app on Apple’s App Store and Google Play — from preparing assets to submission, privacy policies, and versioning. You’ll get a production-ready build with proper ASO optimization.",
        icon: <FaRocket />,
        image: "/images/services/deployment.avif",
      },
      {
        id: "step6",
        title: "Post-Launch Support & Updates",
        description:
          "Once your app is live, we continue to support it with new features, bug fixes, and SDK upgrades. Our ongoing maintenance ensures your React Native app evolves with your users and platforms.",
        icon: <LuShieldCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  