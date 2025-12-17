import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon?: LucideIcon;
  featured?: boolean;
  variant?: 'default' | 'book' | 'store';
}

export interface LinkGroup {
  title: string;
  items: LinkItem[];
}

export interface SocialItem {
  platform: string;
  url: string;
  icon: LucideIcon;
}
