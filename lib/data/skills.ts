import type { SkillCategory } from "@/types/skill";
import {
  // Languages
  Code2,
  Braces,
  Code,
  Palette,

  // Frontend
  Square,
  Layers,
  Smartphone,
  PackageX,
  Wind,
  Layout,

  // Mobile
  Phone,
  Link2,
  Bell,

  // Backend
  Server,
  Network,
  ArrowRightLeft,
  FileText,

  // DevOps
  GitBranch,
  Github,
  GitFork,
  CheckCircle2,

  // Testing
  Bug,
  Send,
  PackageCheck,
  HardDrive,

  // Security
  Shield,
  KeySquare,
  ShieldCheck,
  Lock,

  // CS
  Database,
  List,
  ChevronRight,
  Grid3X3,
  Hash,
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
    name: "Frontend Technologies",
    items: [
      { label: "React.js", icon: Square },
      { label: "Next.js", icon: Layers },
      { label: "React Native", icon: Smartphone },
      { label: "Vite", icon: Wind },
      { label: "Redux Toolkit", icon: PackageX },
      { label: "Material UI (MUI)", icon: Layout },
      { label: "Tailwind CSS", icon: Layout },
    ],
  },

  {
    name: "Enterprise Frontend Development",
    items: [
      { label: "Feature-Based Architecture", icon: Layers },
      { label: "Reusable Component Design", icon: PackageX },
      { label: "DTO & Mapper Pattern", icon: ArrowRightLeft },
      { label: "Redux Slices & State Management", icon: PackageX },
      { label: "Custom Hooks", icon: Link2 },
      { label: "Controllers & API Services", icon: Server },
      { label: "Dynamic Forms", icon: FileText },
      { label: "Multi-Step Workflows", icon: ChevronRight },
      { label: "Data Tables", icon: Grid3X3 },
      { label: "File Uploads", icon: HardDrive },
      { label: "Reusable Widgets", icon: Layout },
    ],
  },

  {
    name: "Backend Integration",
    items: [
      { label: "REST APIs", icon: Network },
      { label: "Axios", icon: ArrowRightLeft },
      { label: "API Interceptors", icon: Shield },
      { label: "Centralized API Layer", icon: Server },
      { label: "Async State Management", icon: PackageX },
      { label: "Error Handling", icon: FileText },
      { label: "Logging & Monitoring", icon: FileText },
      { label: "Node.js", icon: Server },
    ],
  },

  {
    name: "Performance & Optimization",
    items: [
      { label: "Lazy Loading", icon: HardDrive },
      { label: "Memoization", icon: PackageCheck },
      { label: "Reusable Hooks", icon: Link2 },
      { label: "Bundle Optimization", icon: HardDrive },
      { label: "Code Splitting", icon: Layers },
      { label: "Production Optimization", icon: CheckCircle2 },
    ],
  },

  {
    name: "Tools & Collaboration",
    items: [
      { label: "Git", icon: GitBranch },
      { label: "GitLab", icon: GitFork },
      { label: "GitHub", icon: Github },
      { label: "Merge Requests", icon: GitFork },
      { label: "Code Reviews", icon: CheckCircle2 },
      { label: "Jira", icon: CheckCircle2 },
      { label: "CI/CD", icon: GitFork },
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
      { label: "JWT Authentication", icon: KeySquare },
      { label: "OKTA Authentication", icon: ShieldCheck },
      { label: "Protected Routes", icon: Shield },
      { label: "Role-Based Access Control (RBAC)", icon: Lock },
    ],
  },

  {
    name: "Computer Science Fundamentals",
    items: [
      { label: "Data Structures & Algorithms", icon: Database },
      { label: "Arrays", icon: Grid3X3 },
      { label: "Strings", icon: Hash },
      { label: "Stack & Queue", icon: List },
      { label: "Recursion", icon: ChevronRight },
      { label: "Hashing", icon: Hash },
      { label: "Time & Space Complexity", icon: Database },
    ],
  },
];