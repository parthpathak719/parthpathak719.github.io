export const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "React",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:atom",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: "lucide:wind",
    },
    NODE: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:server",
    },
};

export const PROJECTS = [
    {
        title: "🪄 The-Arcane-Universe",
        description:
            "A cinematic, full-stack web experience inspired by the magical world of Harry Potter. The-Arcane-Universe is a dynamic Laravel-based web application featuring interactive archives, character records, magical animations, and AI-enhanced visual elements.",
        github: "https://github.com/parthpathak719/The-Arcane-Universe",
        image: "/projects/cryptoviz.webp",
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NODE],
    },
    {
        title: "📘 StudyBot++ — SmartStudy Engine",
        description:
            "StudyBot++ is an NLP-powered study assistant that combines Generative AI with Spaced Repetition (SM-2) to automate quiz creation, summarization, and review scheduling.",
        link: "https://studybot-nlp.streamlit.app/",
        github: "https://github.com/parthpathak719/StudyBot",
        image: "/projects/ecoearth.webp",
        tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.REACT],
    },
    {
        title: "🧊 3D Object Classification using PointNet & PointNet++",
        description:
            "This project implements and compares PointNet and PointNet++ architectures for 3D point cloud classification using the ModelNet10 dataset. The goal is to directly process raw point cloud data while handling permutation invariance and capturing both global and local geometric features.",
        github: "https://github.com/parthpathak719/3D-Object-Classification-On-ModelNet10",
        image: "/projects/cryptoviz.webp",
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NODE],
    },
];
