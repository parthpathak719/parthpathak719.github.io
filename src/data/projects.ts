export const TAGS = {
    PHP: {
        name: "PHP",
        class: "bg-[#777bb3]/20 text-[#aeb2d5]",
        icon: "logos:php",
    },
    LARAVEL: {
        name: "Laravel",
        class: "bg-[#ff2d20]/20 text-[#ff6b60]",
        icon: "logos:laravel",
    },
    BLADE: {
        name: "Blade",
        class: "bg-gray-700/20 text-gray-300",
        icon: "lucide:file-code",
    },
    SQLITE: {
        name: "SQLite",
        class: "bg-[#003b57]/20 text-[#4db6e2]",
        icon: "logos:sqlite",
    },
    CSS: {
        name: "CSS3",
        class: "bg-[#264de4]/20 text-[#5c85ff]",
        icon: "logos:css-3",
    },
    JS: {
        name: "JavaScript",
        class: "bg-[#f7df1e]/20 text-[#f7df1e]",
        icon: "logos:javascript",
    },
    XAMPP: {
        name: "XAMPP",
        class: "bg-[#fb7a24]/20 text-[#ff9b4a]",
        icon: "simple-icons:xampp",
    },
    CLOUDINARY: {
        name: "Cloudinary",
        class: "bg-[#3448c5]/20 text-[#6c7cff]",
        icon: "simple-icons:cloudinary",
    },
    GEMINI: {
        name: "Gemini",
        class: "bg-[#8e44ad]/20 text-[#c084fc]",
        icon: "lucide:sparkles",
    },
    PYTHON: {
        name: "Python",
        class: "bg-[#3776AB]/20 text-[#4ea1ff]",
        icon: "logos:python",
    },
    STREAMLIT: {
        name: "Streamlit",
        class: "bg-[#ff4b4b]/20 text-[#ff7a7a]",
        icon: "simple-icons:streamlit",
    },
    HUGGINGFACE: {
        name: "HuggingFace",
        class: "bg-[#ffcc00]/20 text-[#ffd84d]",
        icon: "simple-icons:huggingface",
    },
    PYTORCH: {
        name: "PyTorch",
        class: "bg-[#ee4c2c]/20 text-[#ff7a59]",
        icon: "logos:pytorch",
    },
    SM2: {
        name: "SM-2 Algorithm",
        class: "bg-gray-600/20 text-gray-300",
        icon: "lucide:brain",
    },
    NUMPY: {
        name: "NumPy",
        class: "bg-[#013243]/20 text-[#4dabf7]",
        icon: "simple-icons:numpy",
    },
    TRIMESH: {
        name: "Trimesh",
        class: "bg-gray-600/20 text-gray-300",
        icon: "lucide:box",
    },
    SCIKIT: {
        name: "Scikit-learn",
        class: "bg-[#f7931e]/20 text-[#ffb347]",
        icon: "simple-icons:scikitlearn",
    },
    MATPLOTLIB: {
        name: "Matplotlib",
        class: "bg-[#11557c]/20 text-[#4ea1ff]",
        icon: "lucide:line-chart",
    },
    GRADIO: {
        name: "Gradio",
        class: "bg-[#ff4b4b]/20 text-[#ff7a7a]",
        icon: "simple-icons:gradio",
    },
};

export const PROJECTS = [
    {
        title: "🪄 The-Arcane-Universe",
        description: 
                "A cinematic, full-stack web experience inspired by the magical world of Harry Potter — because why build a boring project when you can build one with Hogwarts archives, character records, and magical animations? Built on Laravel using PHP and XAMPP with a Blade + CSS3 + JavaScript frontend, SQLite database, and AI-generated visuals powered by GeminiPro. Media is managed through Cloudinary, the whole app is deployed on InfinityFree, but sadly, the hosted version lags a lot coz this has audios and videos. But hey, at least I can give the source code. Oh and did I mention this took 3 months to finish? Not because it's complicated (okay, it is), but because college decided that 5th semester was the perfect time to be absolutely unhinged with the workload. Somehow, between assignments, exams, and questioning my life choices, I still shipped it — and it turned out to be the biggest personal project I've ever built. Equal parts web dev practice and an excuse to spend way too much time on Harry Potter lore.",
        github: "https://github.com/parthpathak719/The-Arcane-Universe",
        image: "/projects/hogwarts.jpg",
        tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.BLADE, TAGS.CSS, TAGS.JS, TAGS.SQLITE, TAGS.XAMPP, TAGS.CLOUDINARY, TAGS.GEMINI],
    },
    {
        title: "📘 StudyBot++ — SmartStudy Engine",
        description:
            "An NLP-powered study assistant built as a college project that combines T5 for question generation, BART for summarization, and the SM-2 spaced repetition algorithm — all in one place. Because manually making flashcards and figuring out when to review them is a 2010 problem. Built with Python, Streamlit, and HuggingFace Transformers. Team project, but still counts.",
        link: "https://studybot-nlp.streamlit.app/",
        github: "https://github.com/parthpathak719/StudyBot",
        image: "/projects/studybot.jpg",
        tags: [TAGS.PYTHON, TAGS.STREAMLIT, TAGS.HUGGINGFACE, TAGS.PYTORCH, TAGS.SM2],
    },
    {
        title: "🧊 3D Object Classification using PointNet & PointNet++",
        description:
            "A deep learning project that implements and compares PointNet and PointNet++ for classifying 3D objects from raw point cloud data — no voxelization, no shortcuts. Trained on ModelNet10 across 10 object categories, with PointNet++ hitting 86.38% accuracy by actually paying attention to local geometry. Wrapped it up with a Gradio web interface so you can drop in a .off file and get a real-time classification. College project, but the results were genuinely satisfying.",
        github: "https://github.com/parthpathak719/3D-Object-Classification-On-ModelNet10",
        image: "/projects/deeplearning.png",
        tags: [TAGS.PYTHON, TAGS.PYTORCH, TAGS.NUMPY, TAGS.TRIMESH, TAGS.SCIKIT, TAGS.MATPLOTLIB, TAGS.GRADIO],
    },
];
