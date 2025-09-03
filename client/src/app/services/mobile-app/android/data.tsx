// androidAppDevServiceData.js
import {
    FaAndroid,
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
    title: "Android App Development",
    description:
      "Launch scalable, high-performance Android apps that drive user engagement and business growth. At CyberPeak, we blend intuitive UI, powerful backends, and native Android expertise to deliver top-tier mobile solutions.",
    imageSrc: "/images/services/android.avif",
    imageAlt: "Android app development by CyberPeak",
    buttonText: "Start Your Android Project",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Android App Development</b> That Fuels Innovation",
    subtitle:
      "From idea to launch, we craft Android applications that blend cutting-edge technology with user-centric design. Build fast, scale faster.",
    buttonText: "Get a Free App Consultation",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Edge in Android Development",
    bullets: [
      "Expertise in Kotlin, Java & Android SDK.",
      "Custom-built apps optimized for performance and scalability.",
      "Seamless API integrations and backend support.",
      "Security-first development and testing practices.",
      "Play Store deployment and post-launch support.",
    ],
    features: [
      {
        id: 1,
        icon: <FaAndroid />,
        title: "Native Android Expertise",
        desc: "We specialize in Android-specific technologies, ensuring your app performs optimally on every device and OS version.",
      },
      {
        id: 2,
        icon: <FaMobileAlt />,
        title: "Custom UI/UX Design",
        desc: "We design intuitive interfaces that keep users engaged and enhance brand perception across Android phones and tablets.",
      },
      {
        id: 3,
        icon: <FaCode />,
        title: "Clean & Scalable Codebase",
        desc: "Our developers follow best practices for clean architecture and future-ready code that’s easy to maintain and scale.",
      },
      {
        id: 4,
        icon: <LuShieldCheck />,
        title: "Security-Driven Development",
        desc: "We implement encryption, authentication, and secure data handling to safeguard user and business data.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Feature-Rich Android Apps</b> Built for Business Impact",
      description:
        "We create Android apps that aren't just functional — they’re robust, user-friendly, and built to deliver measurable value to your business.",
    },
    features: [
      {
        icon: <FaTools />,
        title: "End-to-End App Development",
        description:
          "From wireframing and UI design to coding, testing, and deployment — we offer comprehensive Android development services that cover the entire product lifecycle.",
      },
      {
        icon: <LuSmartphone />,
        title: "Device Compatibility",
        description:
          "We build apps that work seamlessly across the Android ecosystem, from low-end smartphones to high-performance flagship devices, ensuring a consistent experience.",
      },
      {
        icon: <FaCogs />,
        title: "Backend Integration",
        description:
          "We integrate powerful backend systems and APIs using technologies like Firebase, Node.js, or custom-built solutions tailored to your app’s logic and workflows.",
      },
      {
        icon: <FaBug />,
        title: "Rigorous QA & Testing",
        description:
          "We ensure a flawless Android app experience through rigorous testing including UI tests, unit tests, security scans, and real-device performance checks.",
      },
      {
        icon: <LuLayers />,
        title: "Modular Architecture",
        description:
          "Our use of scalable architectures like MVVM and modular codebases ensures clean separation of concerns, easier debugging, and faster iteration cycles.",
      },
      {
        icon: <FaDatabase />,
        title: "Offline & Data Sync Capabilities",
        description:
          "We build apps that stay functional even when offline, with robust data sync logic that automatically updates when connectivity resumes.",
      },
      {
        icon: <LuTrendingUp />,
        title: "App Store Optimization (ASO)",
        description:
          "We help your Android app gain visibility and traction on Google Play with keyword-rich descriptions, compelling visuals, and rating strategies.",
      },
      {
        icon: <FaRocket />,
        title: "Launch & Post-Launch Support",
        description:
          "We handle Play Store submission, versioning, analytics setup, crash reporting, and updates, ensuring your app stays competitive and error-free post-launch.",
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
          "We kick off with in-depth requirement gathering and market research to understand your business goals, target users, feature needs, and scalability expectations. This step ensures a strong foundation for a strategic Android app development roadmap tailored to your vision.",
        icon: <LuSmartphone />,
        image: "/images/services/planning.avif",
      },
      {
        id: "step2",
        title: "UI/UX Design",
        description:
          "Our design experts craft visually appealing and user-friendly interfaces using Material Design guidelines. We prioritize usability and visual consistency, delivering wireframes, prototypes, and high-fidelity mockups that streamline the user journey on Android devices.",
        icon: <FaMobileAlt />,
        image: "/images/services/cross-platform-ui.jpg",
      },
      {
        id: "step3",
        title: "App Development",
        description:
          "Our Android developers build powerful mobile apps using Kotlin and Java, structured with Clean Architecture and MVVM patterns. We focus on feature-rich development with seamless third-party integrations and robust API connectivity for real-time interactions.",
        icon: <FaCode />,
        image: "/images/services/development-coding.jpg",
      },
      {
        id: "step4",
        title: "Testing & QA",
        description:
          "Every Android app we build undergoes comprehensive QA testing. We use both manual and automated methods to ensure flawless UI behavior, performance stability across screen sizes, and compliance with Android security standards.",
        icon: <FaBug />,
        image: "/images/services/testing.jpg",
      },
      {
        id: "step5",
        title: "Launch & Optimization",
        description:
          "We prepare your app for a successful Google Play launch with ASO-optimized listings, compelling visuals, and targeted descriptions. Post-launch, we analyze user feedback, monitor analytics, and make enhancements to boost performance and retention.",
        icon: <FaRocket />,
        image: "/images/services/optimization.avif",
      },
      {
        id: "step6",
        title: "Support & Maintenance",
        description:
          "We provide long-term maintenance and support services including bug fixes, feature updates, OS compatibility upgrades, and proactive monitoring — ensuring your Android app evolves with market trends and user expectations.",
        icon: <LuShieldCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  