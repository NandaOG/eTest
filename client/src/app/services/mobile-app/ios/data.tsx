// iosAppDevServiceData.js
import {
    FaApple,
    FaMobileAlt,
    FaCode,
    FaTools,
    FaBug,
    FaRocket,
    FaCogs,
    FaDatabase,
  } from "react-icons/fa";
  import {
    LuSmartphone,
    LuLayers,
    LuTrendingUp,
    LuShieldCheck,
  } from "react-icons/lu";
  
  export const heroData = {
    title: "iOS App Development",
    description:
      "Transform your vision into polished, high-performance iOS apps that drive engagement and business success. At CyberPeak, we harness Apple’s ecosystem, Swift expertise, and elegant UI design to create standout mobile experiences for iPhone, iPad, and beyond.",
    imageSrc: "/images/services/ios.jpg",
    imageAlt: "iOS app development by CyberPeak",
    buttonText: "Start Your iOS Project",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>iOS App Development</b> That Delivers Excellence",
    subtitle:
      "We bring your app idea to life with pixel-perfect design, clean Swift code, and seamless integration into Apple’s ecosystem. Deliver elegant and high-performance iOS apps users love.",
    buttonText: "Book a Free Consultation",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Edge in iOS Development",
    bullets: [
      "Proficiency in Swift, Objective-C & Xcode.",
      "Human Interface Guideline-compliant UI/UX design.",
      "Robust APIs and Apple ecosystem integration.",
      "Security-first development with Touch ID, Face ID, and Keychain.",
      "App Store deployment, ASO, and ongoing support.",
    ],
    features: [
      {
        id: 1,
        icon: <FaApple />,
        title: "Native iOS Expertise",
        desc: "We build native apps using Swift and Objective-C, optimized for performance across iPhone, iPad, and Apple Watch.",
      },
      {
        id: 2,
        icon: <FaMobileAlt />,
        title: "Premium UI/UX Design",
        desc: "Our iOS apps offer stunning visuals and seamless usability, guided by Apple’s Human Interface Guidelines.",
      },
      {
        id: 3,
        icon: <FaCode />,
        title: "Maintainable Codebase",
        desc: "We write scalable, clean Swift code with strong architecture patterns like MVVM and VIPER for easier maintenance and upgrades.",
      },
      {
        id: 4,
        icon: <LuShieldCheck />,
        title: "Security-First Engineering",
        desc: "Our apps are built with user data security in mind — leveraging Apple’s secure APIs, encryption, and biometric authentication.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Beautifully Engineered iOS Apps</b> That Perform",
      description:
        "We develop iOS apps that combine exceptional design, performance, and security — helping your business thrive in the Apple ecosystem.",
    },
    features: [
      {
        icon: <FaTools />,
        title: "Full-Cycle iOS Development",
        description:
          "We handle the entire process — from ideation and design to coding, testing, and deployment on the App Store.",
      },
      {
        icon: <LuSmartphone />,
        title: "Device & OS Compatibility",
        description:
          "We ensure your app works flawlessly across all Apple devices and iOS versions, including the latest releases.",
      },
      {
        icon: <FaCogs />,
        title: "Powerful Backend Integration",
        description:
          "We connect your app to any backend — including Firebase, GraphQL, RESTful APIs, or custom servers for real-time data handling.",
      },
      {
        icon: <FaBug />,
        title: "Comprehensive QA & Testing",
        description:
          "We perform extensive manual and automated tests across Apple devices to ensure your app is stable, secure, and fast.",
      },
      {
        icon: <LuLayers />,
        title: "Modern App Architecture",
        description:
          "Our apps use modular and layered architectures like MVVM, VIPER, and Clean Architecture for long-term maintainability.",
      },
      {
        icon: <FaDatabase />,
        title: "Offline Functionality",
        description:
          "From CoreData to smart caching strategies, we ensure your iOS app works reliably — even without constant connectivity.",
      },
      {
        icon: <LuTrendingUp />,
        title: "App Store Optimization (ASO)",
        description:
          "We optimize your app listing for visibility and conversions — through compelling visuals, copy, and ratings management.",
      },
      {
        icon: <FaRocket />,
        title: "Launch & Lifecycle Support",
        description:
          "Post-launch, we offer monitoring, crash analytics, and versioning support to evolve your app with your business.",
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
          "We start with a collaborative discovery phase to understand your business goals, user needs, and app vision. Whether it's a startup MVP or a complex enterprise solution, we define clear project objectives, use cases, and technical expectations. Our team conducts competitive research and platform feasibility assessments to craft a detailed project scope that aligns with the Apple ecosystem and App Store guidelines.",
        icon: <LuSmartphone />,
        image: "/images/services/reuirement.jpg",
      },
      {
        id: "step2",
        title: "UI/UX Design",
        description:
          "In this phase, we translate your ideas into elegant, intuitive user interfaces that embody Apple’s Human Interface Guidelines (HIG). Our design team creates wireframes, prototypes, and high-fidelity mockups optimized for different screen sizes including iPhones and iPads. We prioritize clean aesthetics, fluid navigation, and user delight to ensure an engaging experience that’s instantly familiar to iOS users.",
        icon: <FaMobileAlt />,
        image: "/images/services/mobile-ui.avif",
      },
      {
        id: "step3",
        title: "App Development",
        description:
          "Our iOS developers write robust, scalable Swift code that delivers fast performance and seamless integration with Apple APIs. Whether it's building native features like Push Notifications, Siri Shortcuts, or Apple Maps, we follow industry-standard architecture patterns like MVVM or VIPER to keep the codebase maintainable and future-ready. We also integrate backend services, analytics, and secure authentication mechanisms.",
        icon: <FaCode />,
        image: "/images/services/development.avif",
      },
      {
        id: "step4",
        title: "Testing & QA",
        description:
          "Every iOS app we develop undergoes rigorous testing across multiple Apple devices, iOS versions, and real-world conditions. We perform manual and automated testing to identify bugs, UI inconsistencies, crashes, and performance bottlenecks. Our QA experts test for responsiveness, speed, accessibility, and Apple review compliance — ensuring your app is rock-solid before launch.",
        icon: <FaBug />,
        image: "/images/services/testing.avif",
      },
      {
        id: "step5",
        title: "Launch & Optimization",
        description:
          "We handle the entire App Store submission process — preparing assets like app icons, descriptions, screenshots, and privacy policies while ensuring compliance with Apple's review policies. Once your app is live, we monitor user engagement, performance metrics, and crash reports to fine-tune the app. We also implement ASO (App Store Optimization) strategies to help your app get discovered by the right users.",
        icon: <FaRocket />,
        image: "/images/services/launch-app.jpg",
      },
      {
        id: "step6",
        title: "Support & Maintenance",
        description:
          "Post-launch, we offer reliable support and app maintenance services to ensure your app stays updated with the latest iOS releases and Apple hardware changes. From addressing bug reports and user feedback to rolling out feature enhancements and UI refreshes, our team works proactively to keep your iOS app performant, secure, and relevant in a rapidly evolving tech landscape.",
        icon: <LuShieldCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
  