export const personalInfo = {
  name: "Carter",
  displayName: "Carter",
  handle: "Carter",
  email: "carter21232@gmail.com",
  title: "Gameplay Programmer • Unity & Roblox Developer",
  roles: [
    "Gameplay Systems Developer",
    "Roblox Lua Programmer",
    "Vehicle Handling Engineer",
    "Movement & Physics Specialist",
  ],
  bio: `I build gameplay systems designed to feel smooth, responsive, and natural in motion. My focus is on vehicle handling, movement logic, terrain interaction, and player feedback — especially in driving and off-road experiences where feel matters as much as function.`,
  bioContinued: `I bring 2.5 years of Unity development, 1 year of Lua scripting, and hands-on experience building Roblox systems for driving, exploration, and interactive world feedback. I enjoy creating mechanics that feel polished, readable, and fun to use from the player’s perspective.`,
  tagline:
    "Building smooth gameplay systems for driving, movement, and immersive Roblox experiences.",
  location: "Canada",
  socials: {
    github: "",
  },
};

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  gradient: string;
  image?: string;
}

export interface RobloxProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  video: string;
  accent: string;
  label: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hurricane VR Physics Suite",
    description:
      "Custom full-body VR physics systems built in Unity with C#. Includes locomotion, grab interactions, and momentum handling for immersive motion gameplay.",
    tags: ["Unity", "C#", "VR", "Physics"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    image: "/projects/hurricane-vr.png",
  },
  {
    id: 2,
    title: "Gorilla Tag Fan Game Prototype",
    description:
      "A fast-paced VR fan game inspired by Gorilla Tag. Features tracked movement, climbing interactions, and polished player feel for immersive multiplayer sessions.",
    tags: ["Unity", "C#", "VR", "Multiplayer"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: "/projects/gorillatag-fangame.jpg",
  },
  {
    id: 3,
    title: "Full-Body Interaction System",
    description:
      "Reusable VR interaction systems for hand/object physics, collision response, and realistic movement across tracked rigs.",
    tags: ["Unity", "C#", "Physics", "VR"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Custom Gameplay Toolkit",
    description:
      "A library of C# tools for fast prototyping, state-driven movement, and polished input handling in Unity projects.",
    tags: ["Unity", "C#", "Tools"],
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 5,
    title: "Interactive VR Demo",
    description:
      "A polished demo experience showcasing precision VR interaction, environmental feedback, and immersive physics-driven gameplay.",
    tags: ["Unity", "VR", "Game Dev"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 6,
    title: "Portfolio Showcase",
    description:
      "A modern portfolio built with Next.js and Tailwind to highlight Unity systems, VR projects, and real-time gameplay work.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-slate-500/20 to-slate-700/20",
  },
];

export interface Skill {
  name: string;
  category: "language" | "frontend" | "backend" | "tool" | "gamedev";
  color: string;
  icon: string;
  desc: string;
}

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

export const skills: Skill[] = [
  { name: "C#", category: "language", color: "#239120", icon: devicon("csharp"), desc: "Core language for Unity gameplay and VR systems." },
  { name: "Unity", category: "gamedev", color: "#ffffff", icon: devicon("unity"), desc: "Primary engine for VR games, physics, and interactive systems." },
  { name: "Lua", category: "language", color: "#9977FF", icon: devicon("lua"), desc: "Roblox gameplay scripting, movement logic, and vehicle tuning." },
  { name: "Roblox", category: "gamedev", color: "#00B4FF", icon: "", desc: "Movement systems, vehicle tuning, and gameplay logic for social sandbox experiences." },
  { name: "VR", category: "gamedev", color: "#8b5cf6", icon: "", desc: "Locomotion, interaction design, and smooth immersive player feedback." },
  { name: "Physics", category: "gamedev", color: "#f97316", icon: "", desc: "Movement feel, collision response, and gameplay-driven motion systems." },
  { name: "Gorilla Tag", category: "gamedev", color: "#22c55e", icon: "", desc: "Movement-focused gameplay design and responsive traversal systems." },
  { name: "Unreal Engine", category: "gamedev", color: "#00c2ff", icon: "", desc: "Additional engine experience for interactive prototypes." },
  { name: "TypeScript", category: "language", color: "#3178C6", icon: devicon("typescript"), desc: "Web tooling, portfolio interfaces, and supporting systems." },
  { name: "React", category: "frontend", color: "#61DAFB", icon: devicon("react"), desc: "Modern UI development for portfolio and tools." },
  { name: "Node.js", category: "backend", color: "#339933", icon: devicon("nodejs"), desc: "Backend services and utility tooling for game projects." },
  { name: "Git", category: "tool", color: "#F05032", icon: devicon("git"), desc: "Version control workflows and collaborative development." },
];

export const robloxProjects: RobloxProject[] = [
  {
    id: 1,
    title: "Advanced Movement System",
    label: "Movement",
    description:
      "A traversal system built for fast, responsive movement in action-heavy gameplay. It includes wall-running, sliding, momentum-based transitions, and controlled sprinting to create a more fluid and engaging player feel.",
    tags: ["Lua", "Roblox", "Movement", "Physics"],
    video: "/roblox/Movement.mov",
    accent: "from-cyan-500/30 to-sky-500/15",
  },
  {
    id: 2,
    title: "Vehicle Handling System",
    label: "Vehicle",
    description:
      "A driving system designed around smooth acceleration, braking feel, steering response, and manual-style control. The tuning focuses on vehicle feel and responsiveness, which is especially important in off-road and mudding gameplay.",
    tags: ["Lua", "Roblox", "Vehicles", "Driving"],
    video: "/roblox/Vehicle.mp4",
    accent: "from-violet-500/30 to-fuchsia-500/15",
  },
  {
    id: 3,
    title: "Mud Footprint System",
    label: "Mud",
    description:
      "A terrain interaction system that adds surface feedback to movement by creating mud footprints and reinforcing the feel of driving through wet or muddy ground. It helps make the world feel more reactive and grounded.",
    tags: ["Lua", "Roblox", "Terrain", "VFX"],
    video: "/roblox/Mud.mp4",
    accent: "from-amber-500/30 to-orange-500/15",
  },
  {
    id: 4,
    title: "Plot Saving UI",
    label: "SavedSlots",
    description:
      "A save-slot interface designed to be clear, organized, and easy to use during active play. It keeps progression information readable and helps players move quickly between sessions without friction.",
    tags: ["Lua", "UI", "Systems", "Interface"],
    video: "/roblox/SavedSlots.png",
    accent: "from-emerald-500/30 to-teal-500/15",
  },
  {
    id: 5,
    title: "Pixel Settings Menu",
    label: "Settings",
    description:
      "A stylized settings menu with readable controls, clear hierarchy, and a polished visual identity. It balances playful presentation with practical usability for player customization and accessibility.",
    tags: ["Lua", "UI", "Settings", "Design"],
    video: "/roblox/Settings.png",
    accent: "from-rose-500/30 to-pink-500/15",
  },
  {
    id: 6,
    title: "Character Selection UI",
    label: "Selection",
    description:
      "A character selection interface built to make player choices feel clear, quick, and intentional. It emphasizes readable presentation and a strong visual identity that works well in multiplayer or social gameplay loops.",
    tags: ["Lua", "UI", "Selection", "Matchmaking"],
    video: "/roblox/Selection.png",
    accent: "from-indigo-500/30 to-blue-500/15",
  },
];

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "military" | "education";
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Unity & VR Systems Developer",
    company: "Independent",
    period: "Jan 2024 — Present",
    description: [
      "Designing full-body physics systems and VR motion mechanics in Unity.",
      "Building Gorilla Tag-inspired fan games with tracked locomotion and climbing.",
      "Creating reusable C# gameplay tools for interaction, input, and collision response.",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Hurricane VR Physics Engineer",
    company: "Project Studio",
    period: "2024 — Present",
    description: [
      "Implemented custom VR locomotion and hand interaction systems for immersive gameplay.",
      "Optimized physics performance for smooth motion on headsets and tracked rigs.",
      "Delivered high-fidelity interaction feel across custom Unity demos and prototypes.",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "Sep 2025 — Present",
    description: [
      "Built portfolio and tooling interfaces using Next.js, TypeScript, and Tailwind CSS.",
      "Created backend utilities and deployment workflows to support game project assets.",
      "Maintained clean code structure for both web and gameplay systems.",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "Unreal Engine Prototyper",
    company: "Independent",
    period: "2025 — 2026",
    description: [
      "Developed gameplay prototypes and interactive systems in Unreal Engine.",
      "Explored advanced animation, physics, and input-driven interactions.",
      "Delivered proof-of-concept demos for fast iteration and design validation.",
    ],
    type: "work",
  },
  {
    id: 5,
    title: "C# Developer",
    company: "Self-Directed",
    period: "2023 — Present",
    description: [
      "Designed reusable systems and utilities for game engines and custom tools.",
      "Focused on performance, modular architecture, and maintainable code.",
      "Integrated physics, input, and gameplay state logic across Unity projects.",
    ],
    type: "work",
  },
  {
    id: 6,
    title: "Game Dev Student",
    company: "Self-Learning",
    period: "2021 — 2023",
    description: [
      "Studied game development, 3D math, VR interaction, and physics systems.",
      "Built portfolio projects in Unity, Unreal, and supporting web tools.",
      "Learned to translate player motion into responsive gameplay feel.",
    ],
    type: "education",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Studio Lead",
    role: "Unity Team Lead",
    text: "Carter shipped a responsive VR physics prototype with clean systems and strong attention to player feel.",
  },
  {
    id: 2,
    name: "Community Tester",
    role: "VR Player",
    text: "The Gorilla Tag-inspired movement felt natural and energetic from the first playtest.",
  },
  {
    id: 3,
    name: "Project Partner",
    role: "Creative Technologist",
    text: "He turned complex physics and input problems into polished gameplay tools that were easy to iterate on.",
  },
];

export const certificates = [
  "Unity Game Development — Coursera",
  "VR Interaction Design — Udemy",
  "C# Programming — Pluralsight",
  "Full-Stack Web Development — FreeCodeCamp",
  "Game Physics Fundamentals — Udemy",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Roblox", href: "#roblox" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
