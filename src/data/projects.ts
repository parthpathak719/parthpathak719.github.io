export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Web & applications' | 'Cloud & systems' | 'Security & networks' | 'Algorithms';
  kind: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  detail: string;
  note?: string;
}

export const projects: Project[] = [
  {
    id: 'lexora', title: 'Lexora', category: 'AI & ML', kind: 'Final year project',
    description: 'Multilingual AI text detection and model-family attribution using fine-tuned MuRIL and character n-grams.',
    stack: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "MuRIL", "Transformers", "PyTorch", "scikit-learn", "NumPy", "SciPy", "Character n-grams", "TF-IDF", "Logistic regression"], repo: 'AI-Detector',
    detail: 'Fine-tuned MuRIL embeddings combined with character n-grams and calibrated logistic regression. Five source-grouped folds guided model selection. Separate held-out short-text tasks achieved 93.87% detection, 86.43% family attribution, and 95.74% code-mixed detection accuracy. The app accepts six document formats and generates per-segment PDF reports.',
    note: 'Research scores are separate short-text task results, not proof of authorship or measured long-document accuracy.',
  },
  {
    id: 'pyglide', title: 'PyGlide', category: 'Web & applications', kind: 'Final year project',
    description: 'A browser-based Python IDE with interactive execution, semantic bug retrieval, and AI-assisted root cause analysis.',
    stack: ["React", "Vite", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Monaco", "Pyodide", "Python", "FastAPI", "NumPy", "pandas", "D3.js", "Groq", "Ollama", "Sarvam AI", "Supabase", "Render"], repo: 'PyGlide', live: 'https://pyglide-web.onrender.com/',
    detail: 'Interactive Python runs in the browser with multi-file workspaces, autocomplete, input support, and a stoppable runtime. AST and traceback parsing provide source context; cosine-similarity retrieval finds related historical bugs. Groq or Ollama provides explanations, with deterministic fallback and optional Sarvam translation. Hosted on Render with Supabase persistence for shared-example deletion records.',
  },
  {
    id: 'cloudpulse', title: 'CloudPulse', category: 'Cloud & systems', kind: 'Cloud computing project',
    description: 'An AWS resource scheduler where autonomous agents bid for CPU across four Dockerized microservices.',
    stack: ["Python", "Flask", "Docker", "AWS", "Amazon EC2", "Amazon SQS", "AWS Lambda", "Amazon DynamoDB", "AWS SSM", "Amazon EventBridge", "Groq", "Llama 3", "HTML", "CSS", "JavaScript", "NumPy"], repo: 'CloudPulse',
    detail: 'Four Flask microservices compete for capacity on two EC2 compute nodes. Agents send bids through SQS; a Lambda scheduler ranks demand, splits capacity or defers services, persists allocation state in DynamoDB, and reconciles containers through SSM. A live dashboard shows allocations and Groq-generated reasoning, alongside a rule-based fallback.',
  },
  {
    id: 'wizarding', title: 'The Wizarding Opus', category: 'Web & applications', kind: 'Personal project · a favourite',
    description: 'A Harry Potter web experience built with Laravel, featuring cinematic transitions, a sorcerer archive, and an interactive quiz.',
    stack: ["Laravel", "PHP", "Blade", "HTML", "CSS", "JavaScript", "PostgreSQL", "Supabase", "Gemini", "Cloudinary", "Bunny.net", "Render", "XAMPP"], repo: 'The-Wizarding-Opus', live: 'https://the-wizarding-opus.onrender.com/',
    detail: 'A full-stack Laravel experience with custom animation, audio and video transitions, a scored quiz, and CRUD for sorcerer records. Session-based ownership limits editing to a visitor’s own creations; an admin flow manages records. Render hosts the app, Supabase hosts PostgreSQL, and Bunny.net and Cloudinary deliver media.',
  },
  {
    id: 'skylark', title: 'Skylark Drones BI Agent', category: 'AI & ML', kind: 'Placement assignment',
    description: 'A conversational business intelligence assistant that connects sales and operations using live Monday.com board data.',
    stack: ["Python", "Streamlit", "Gemini", "Monday.com", "GraphQL", "Streamlit Community Cloud"], repo: 'Skylark-Drones-Assignment', live: 'https://monday-bia.streamlit.app/',
    detail: 'Gemini function calling selects read-only tools for Work Orders and Deals. A dedicated cleaning layer normalizes client codes, handles malformed numbers and missing values, detects leaked header rows, and computes financial totals in Python before the model explains them. Configured for Streamlit Community Cloud.',
  },
  {
    id: 'iot-ids', title: 'IoT Network IDS', category: 'Security & networks', kind: 'Network security project',
    description: 'A local IoT traffic lab with hybrid anomaly detection, live monitoring, and generated threat reports.',
    stack: ["Python", "Flask", "scikit-learn", "NumPy", "pandas", "Isolation Forest", "MLP classifier", "TLS", "DTLS simulation", "UDP", "Sockets", "OpenSSL", "SSL certificates"], repo: 'IoT-Network-IDS',
    detail: 'Combines an Isolation Forest with an MLP classifier to identify normal traffic, known synthetic patterns, and uncertain anomalies using payload size and timing. Includes TLS traffic, plain-UDP simulated DTLS traffic, attack generators, CSV logging, and a Flask dashboard.',
    note: 'Attack payloads are simulations, not real Heartbleed or POODLE exploits. DTLS is simulated, and training-set metrics do not establish real-world detection performance.',
  },
  {
    id: 'studybot', title: 'StudyBot++', category: 'AI & ML', kind: 'NLP project',
    description: 'Turning study material into questions, summaries, and a review schedule that adapts to recall.',
    stack: ["Python", "Streamlit", "Transformers", "PyTorch", "T5", "DistilBART", "SM-2", "pandas", "Matplotlib"], repo: 'StudyBot', live: 'https://studybot-nlp.streamlit.app/',
    detail: 'Combines T5-based question generation, DistilBART summarization, and SM-2 spaced repetition. Tracks due reviews and learning progress, with keyword and summary-overlap answer scoring and template fallbacks when model generation is unavailable.',
  },
  {
    id: 'ospf', title: 'OSPF / iSPF Simulation', category: 'Security & networks', kind: 'Computer networks project',
    description: 'Two parallel router topologies. Three failure scenarios. A practical comparison of full and incremental shortest-path recomputation.',
    stack: ["GNS3", "Cisco IOSv", "VMware Workstation Pro", "OSPF", "iSPF"], repo: 'OSPF-iSPF-Network-Simulation',
    detail: 'Configured two five-router, multi-area networks with Cisco IOSv in GNS3. Compared SPF calculation time and CPU behavior during link failures, router failures, and link-cost changes. The repository includes topology configuration, packet captures, and recorded results.',
  },
  {
    id: 'cyberhack', title: 'ARP Guardian', category: 'Security & networks', kind: 'Cyber hackathon',
    description: 'Watching for ARP poisoning, then connecting detection to an automated quarantine workflow.',
    stack: ["Python", "Scapy", "Flask", "Node.js", "HTML", "CSS", "JavaScript", "Canvas", "Docker", "Docker Compose", "SNMP", "pysnmp", "Wireshark", "tcpdump"], repo: 'CyberHack',
    detail: 'An ARP monitoring daemon checks MAC changes, flapping, gateway impersonation, gratuitous floods, storms, and duplicate IPs. Integrates a simulated switch API or SNMP control path for VLAN quarantine, a Docker LAN lab, and a live dashboard. Documents MITRE ATT&CK T1557.002 and detection limitations.',
  },
  {
    id: 'pointnet', title: '3D Object Classification', category: 'AI & ML', kind: 'Deep learning project',
    description: 'Comparing PointNet and PointNet++ for classification of raw 3D point clouds from ModelNet10.',
    stack: ["Python", "PyTorch", "NumPy", "Trimesh", "scikit-learn", "Matplotlib", "Gradio", "PointNet", "PointNet++", "ModelNet10"], repo: '3D-Object-Classification-On-ModelNet10',
    detail: 'Classifies ten ModelNet10 object categories from sampled point clouds without voxelization. Compares PointNet’s global representation against PointNet++’s hierarchical local features. Reported validation accuracy is 80.36% and 86.38% respectively, with a Gradio interface for .off files.',
  },
  {
    id: 'heist', title: 'Museum Heist', category: 'Algorithms', kind: 'AI case study',
    description: 'A grid-world AI case study comparing Minimax, Alpha-Beta pruning, greedy search, and guard coordination.',
    stack: ["Python", "NumPy", "Matplotlib", "Minimax", "Alpha-beta", "BFS"], repo: 'FAI-Case-Study',
    detail: 'A grid-world case study comparing depth-limited Minimax, Alpha-Beta pruning, a greedy baseline, and coordinated versus independent guards. BFS distances inform the evaluation function. Reproducible experiments include random maps, depth sweeps, a horizon-effect case, search-tree diagrams, and animated games.',
  },
  {
    id: 'ml-lab', title: 'Machine Learning Lab', category: 'AI & ML', kind: '10 lab assignments',
    description: 'The foundations, explored hands-on: data preparation, model experiments, evaluation, and visualization.',
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "CatBoost", "Random Forest", "Hyperparameter tuning"], repo: 'ml_lab',
    detail: 'Ten lab folders containing 61 Python scripts and supporting datasets. Exercises include data analysis, classification, feature correlation, ensemble methods, and cross-validated hyperparameter search.',
  },
];

export const categories = ['All work', 'AI & ML', 'Web & applications', 'Cloud & systems', 'Security & networks', 'Algorithms'] as const;
