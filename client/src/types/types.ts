export interface TechItem {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }