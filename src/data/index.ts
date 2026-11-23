export const personalInfo = {
  name: "Carter",
  displayName: "Carter",
  handle: "Carter",
  email: "carter21232@gmail.com",
  title: "Game developer • Unity, Roblox, and FiveM",
  roles: ["Unity game developer", "Roblox scripter", "FiveM developer", "Gameplay programmer"],
  bio: "Hey, I'm Carter. I like making games and figuring out how to make movement and controls feel good. I mostly work with Unity, Roblox, and FiveM, and I enjoy trying out ideas and learning as I go.",
  bioContinued: "I've been learning Unity and C#, and I also make Roblox projects with Lua. Some things I've worked on include movement, vehicle handling, VR interactions, and UI. I'm still learning, so I'm always trying to get better and make cooler projects.",
  tagline: "I make game systems and projects, and I'm always learning something new.",
  location: "Canada",
  socials: { github: "" },
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
    title: "Hurricane VR Asset Practice",
    description: "I used the Hurricane VR asset in Unity to try out its VR physics and interactions. The asset was made by its original creator. I don't own it or claim that I created it.",
    tags: ["Unity", "C#", "VR", "Physics"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    image: "/projects/hurricane-vr.png",
  },
  {
    id: 2,
    title: "Gorilla Tag Fan Game Prototype",
    description: "A small VR fan-game prototype inspired by Gorilla Tag. I experimented with tracked movement and climbing, and worked on making the movement feel fun.",
    tags: ["Unity", "C#", "VR", "Multiplayer"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: "/projects/gorillatag-fangame.jpg",
  },
  {
    id: 3,
    title: "VR Interaction Practice",
    description: "Some experiments with grabbing objects, collisions, and movement in VR. I made these to learn how the different parts work together.",
    tags: ["Unity", "C#", "Physics", "VR"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Unity Gameplay Tools",
    description: "A collection of small C# tools and prototypes I've made while learning Unity and testing gameplay ideas.",
    tags: ["Unity", "C#", "Tools"],
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 5,
    title: "VR Demo",
    description: "A demo where I tried out VR interactions, physics, and feedback from the environment.",
    tags: ["Unity", "VR", "Game Dev"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 6,
    title: "This Portfolio",
    description: "I built this portfolio with Next.js, TypeScript, and Tailwind CSS to share some of the things I've been working on.",
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
  { name: "C#", category: "language", color: "#239120", icon: devicon("csharp"), desc: "I use C# for Unity projects and gameplay experiments." },
  { name: "Unity", category: "gamedev", color: "#ffffff", icon: devicon("unity"), desc: "The game engine I use for prototypes and VR projects." },
  { name: "Lua", category: "language", color: "#9977FF", icon: devicon("lua"), desc: "I use Lua for Roblox scripting and gameplay systems." },
  { name: "Roblox", category: "gamedev", color: "#00B4FF", icon: "", desc: "I've made Roblox movement, vehicle, and gameplay projects." },
  { name: "VR", category: "gamedev", color: "#8b5cf6", icon: "", desc: "I've been learning about VR movement and interactions." },
  { name: "Physics", category: "gamedev", color: "#f97316", icon: "", desc: "I like experimenting with movement and collisions." },
  { name: "Gorilla Tag", category: "gamedev", color: "#22c55e", icon: "", desc: "I've made fan-game prototypes inspired by its movement." },
  { name: "Unreal Engine", category: "gamedev", color: "#00c2ff", icon: "", desc: "I've tried Unreal for gameplay prototypes." },
  { name: "TypeScript", category: "language", color: "#3178C6", icon: devicon("typescript"), desc: "I use TypeScript for web projects like this portfolio." },
  { name: "React", category: "frontend", color: "#61DAFB", icon: devicon("react"), desc: "I've used React to build web interfaces." },
  { name: "Node.js", category: "backend", color: "#339933", icon: devicon("nodejs"), desc: "I've used Node.js for small tools and web projects." },
  { name: "Git", category: "tool", color: "#F05032", icon: devicon("git"), desc: "I use Git to keep track of changes to my projects." },
];

export const robloxProjects: RobloxProject[] = [
  {
    id: 1,
    title: "Movement System",
    label: "Movement",
    description: "A movement prototype with wall-running, sliding, sprinting, and momentum. I made it to experiment with different ways to move around a game.",
    tags: ["Lua", "Roblox", "Movement", "Physics"],
    video: "/roblox/Movement.mov",
    accent: "from-cyan-500/30 to-sky-500/15",
  },
  {
    id: 2,
    title: "Vehicle Handling",
    label: "Vehicle",
    description: "A Roblox driving system where I worked on steering, acceleration, and braking to make the vehicles feel responsive.",
    tags: ["Lua", "Roblox", "Vehicles", "Driving"],
    video: "/roblox/Vehicle.mp4",
    accent: "from-violet-500/30 to-fuchsia-500/15",
  },
  {
    id: 3,
    title: "Mud Footprints",
    label: "Mud",
    description: "An experiment that adds footprints and other feedback when moving through muddy ground.",
    tags: ["Lua", "Roblox", "Terrain", "VFX"],
    video: "/roblox/Mud.mp4",
    accent: "from-amber-500/30 to-orange-500/15",
  },
  {
    id: 4,
    title: "Plot Saving UI",
    label: "SavedSlots",
    description: "A simple save-slot screen for showing and choosing saved plots.",
    tags: ["Lua", "UI", "Systems", "Interface"],
    video: "/roblox/SavedSlots.png",
    accent: "from-emerald-500/30 to-teal-500/15",
  },
  {
    id: 5,
    title: "Settings Menu",
    label: "Settings",
    description: "A pixel-style settings menu with controls for changing game options.",
    tags: ["Lua", "UI", "Settings", "Design"],
    video: "/roblox/Settings.png",
    accent: "from-rose-500/30 to-pink-500/15",
  },
  {
    id: 6,
    title: "Character Selection UI",
    label: "Selection",
    description: "A screen for looking through and choosing a character in a game.",
    tags: ["Lua", "UI", "Selection", "Matchmaking"],
    video: "/roblox/Selection.png",
    accent: "from-indigo-500/30 to-blue-500/15",
  },
];

export interface FiveMFramework {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface FiveMServer {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export const fivemFrameworks: FiveMFramework[] = [];
export const fivemScreenshots: string[] = Array.from(
  { length: 18 },
  (_, index) => `/fivem/fivem-${String(index + 1).padStart(2, "0")}.webp`
);
export const fivemServers: FiveMServer[] = [];

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
    title: "Unity and VR Projects",
    company: "Personal projects",
    period: "Jan 2024 — Present",
    description: [
      "I experiment with VR movement and physics in Unity.",
      "I've made fan-game prototypes inspired by Gorilla Tag.",
      "I make small C# tools while learning how to build game systems.",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Hurricane VR Asset Practice",
    company: "Personal project",
    period: "Personal project",
    description: [
      "I tried out the Hurricane VR asset and learned how its interactions work.",
      "The asset belongs to its original creator; I did not make it and do not claim to own it.",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Web Projects",
    company: "Personal projects",
    period: "Sep 2025 — Present",
    description: [
      "I built this portfolio with Next.js, TypeScript, and Tailwind CSS.",
      "I keep learning by making small web tools and trying new ideas.",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "Game Development",
    company: "Self-learning",
    period: "2021 — Present",
    description: [
      "I learn by making projects and trying things out in Unity, Roblox, and Unreal.",
      "I'm interested in movement, physics, and how games respond to players.",
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
  { id: 1, name: "Studio Lead", role: "Unity Team Lead", text: "Carter made a VR physics prototype and paid attention to how the movement felt." },
  { id: 2, name: "Community Tester", role: "VR Player", text: "The movement in the fan-game prototype felt fun to try." },
  { id: 3, name: "Project Partner", role: "Creative Technologist", text: "Carter worked through tricky physics and input problems to make useful gameplay tools." },
];

export const certificates: string[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Roblox", href: "#roblox" },
  { label: "FiveM", href: "#fivem" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
