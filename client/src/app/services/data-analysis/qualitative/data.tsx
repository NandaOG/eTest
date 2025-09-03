import {
    LuUsers,
    LuMic,
    LuMessagesSquare,
    LuBookOpenCheck,
    LuBrainCircuit,
} from "react-icons/lu";
import {
    FaRegComments,
    FaClipboardList,
    FaLightbulb,
    FaCogs,
    FaBullhorn,
    FaCheckCircle,
    FaFolderOpen,
    FaChartLine,

} from "react-icons/fa";

export const heroData = {
    title: "Qualitative Market Research Services",
    description:
        "Understand customer behavior, motivation, and perception through interviews, focus groups, and observational studies. Our Qualitative Market Research reveals deep insights to guide business strategy.",
    imageSrc: "/images/services/qualitative-market-research.jpg",
    imageAlt: "qualitative market research",
    buttonText: "Get a Research Plan",
    buttonLink: "/contact",
};

export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for Qualitative Research?",
    subtitle:
        "We uncover the *why* behind the *what*. With deep analytical rigor and human-centered methods, our qualitative research services explore customer needs, values, and perceptions to inform smarter business decisions.",
    buttonText: "Talk to Our Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Difference in Qualitative Market Research.",
    bullets: [
        "Expert-led in-depth interviews and focus groups.",
        "Behavioral observation and ethnographic research methods.",
        "Thematic analysis for actionable insights.",
        "Custom research design tailored to your business needs.",
        "Data confidentiality and ethical participant handling.",
    ],
    features: [
        {
            id: 1,
            icon: <LuMic />,
            title: "In-depth Interviews",
            desc: "One-on-one conversations to understand nuanced opinions and motivations.",
        },
        {
            id: 2,
            icon: <LuUsers />,
            title: "Focus Groups",
            desc: "Facilitated discussions to explore group dynamics and attitudes.",
        },
        {
            id: 3,
            icon: <LuMessagesSquare />,
            title: "Customer Journey Mapping",
            desc: "Visualize user behavior from awareness to decision-making.",
        },
        {
            id: 4,
            icon: <LuBrainCircuit />,
            title: "Thematic Analysis",
            desc: "We decode patterns and themes from rich qualitative data.",
        },
    ],
};

export const featuresData = {
    title: "Overview",
    textData: {
        title: "<b>Unlock Human Insight</b> to Drive Strategy",
        description:
            "Qualitative research dives into how people think, feel, and decide. We combine empathy with strategy to uncover insights that quantitative methods miss — helping you build products and messaging that resonate.",
    },
    features: [
        {
            icon: <FaRegComments />,
            title: "Voice of Customer Research",
            description: "Get unfiltered feedback straight from your audience.",
        },
        {
            icon: <FaClipboardList />,
            title: "Moderator-Guided Sessions",
            description: "Our trained moderators keep conversations insightful and goal-driven.",
        },
        {
            icon: <FaChartLine />,
            title: "Use Case Exploration",
            description: "Understand how real users interact with your products or services.",
        },
        {
            icon: <LuBookOpenCheck />,
            title: "Persona Development",
            description: "Translate qualitative findings into actionable customer personas.",
        },
        {
            icon: <FaFolderOpen />,
            title: "Data Coding & Categorization",
            description: "Structure qualitative data into usable formats for business teams.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Rigorous Validation",
            description: "Ensure that interpretations are grounded and replicable.",
        },
        {
            icon: <FaCogs />,
            title: "Insights Integration",
            description: "We integrate findings into your marketing, UX, and product strategies.",
        },
        {
            icon: <FaLightbulb />,
            title: "Strategic Reporting",
            description: "Deliver findings through visual, executive-ready summaries.",
        },
    ],
};

export const servicesData = {
    title: "Our Process",
    servicesData: [
        {
            id: "step1",
            title: "Research Planning",
            description: "We align on objectives and choose the right qualitative method for your goals.",
            icon: <FaClipboardList />,
            image: "/images/services/research-planning.jpg",
        },
        {
            id: "step2",
            title: "Recruitment & Screening",
            description: "Identify and recruit relevant participants that match your target audience.",
            icon: <LuUsers />,
            image: "/images/services/recruitment.jpg",
        },
        {
            id: "step3",
            title: "Conducting Sessions",
            description: "Facilitated interviews, focus groups, or observations are conducted and recorded.",
            icon: <LuMic />,
            image: "/images/services/conducting-sessions.jpg",
        },
        {
            id: "step4",
            title: "Data Transcription & Coding",
            description: "We clean, organize, and code raw qualitative data for analysis.",
            icon: <FaFolderOpen />,
            image: "/images/services/data-transcription.avif",
        },
        {
            id: "step5",
            title: "Insight Extraction",
            description: "Identify recurring themes, sentiments, and drivers behind customer behavior.",
            icon: <FaLightbulb />,
            image: "/images/services/insight-extraction.jpg",
        },
        {
            id: "step6",
            title: "Report Delivery",
            description: "Share visual, actionable reports with clear takeaways for stakeholders.",
            icon: <FaBullhorn />,
            image: "/images/services/report-delivery.jpg",
        },
    ],
};