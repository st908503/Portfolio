import type { SkillCategory } from "@/types/skill";
import {
  // Languages
  Code2, Braces, Code, Palette,
  // Frontend
  Square, Layers, Smartphone, PackageX, Wind, Layout,
  // Mobile
  Phone, Link2, Bell,
  // Backend
  Server, Network, ArrowRightLeft, FileText,
  // Cloud/DevOps
  GitBranch, Github, GitFork, Flame, CheckCircle2,
  // Testing
  Bug, Send, PackageCheck, HardDrive,
  // Security
  Shield, KeySquare, ShieldCheck, Lock,
  // CS Fundamentals
  Database, List, ChevronRight, Grid3X3, Hash
} from "lucide-react";

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { label: "JavaScript (ES6+)", icon: Code2 },
      { label: "TypeScript", icon: Braces },
      { label: "HTML5", icon: Code },
      { label: "CSS3", icon: Palette },
    ],
  },
  {
    name: "Frontend Frameworks",
    items: [
      { label: "React.js", icon: Square },
      { label: "Next.js", icon: Layers },
      { label: "React Native", icon: Smartphone },
      { label: "Redux Toolkit", icon: PackageX },
      { label: "Vite", icon: Wind },
      { label: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    name: "Mobile & Platform",
    items: [
      { label: "Android/iOS Build", icon: Phone },
      { label: "Deep Linking", icon: Link2 },
      { label: "Push Notifications", icon: Bell },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      { label: "Node.js", icon: Server },
      { label: "REST APIs", icon: Network },
      { label: "Axios", icon: ArrowRightLeft },
      { label: "Logging & Monitoring", icon: FileText },
    ],
  },
  {
    name: "Cloud / DevOps",
    items: [
      { label: "Git", icon: GitBranch },
      { label: "GitHub", icon: Github },
      { label: "CI/CD", icon: GitFork },
      { label: "Firebase", icon: Flame },
      { label: "Jira", icon: CheckCircle2 },
    ],
  },
  {
    name: "Testing & Debugging",
    items: [
      { label: "Chrome DevTools", icon: Bug },
      { label: "Postman", icon: Send },
      { label: "Jest", icon: PackageCheck },
      { label: "Production Debugging", icon: HardDrive },
    ],
  },
  {
    name: "Security",
    items: [
      { label: "Token-based Auth", icon: Shield },
      { label: "JWT", icon: KeySquare },
      { label: "OKTA", icon: ShieldCheck },
      { label: "PCI-DSS", icon: Lock },
      { label: "RBI Compliance", icon: ShieldCheck },
    ],
  },
  {
    name: "Computer Science Fundamentals",
    items: [
      { label: "Data Structures & Algorithms (Basics)", icon: Database },
      { label: "Stack/Queue", icon: List },
      { label: "Recursion", icon: ChevronRight },
      { label: "Arrays", icon: Grid3X3 },
      { label: "Strings", icon: Hash },
      { label: "Hashing", icon: Hash },
      { label: "Time & Space Complexity Analysis", icon: Database },
    ],
  },
];
