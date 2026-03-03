export type SkillCategory = {
  name: string;
  items: Array<{
    label: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
  }>;
};
