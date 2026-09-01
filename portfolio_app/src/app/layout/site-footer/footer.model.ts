export type FooterNavIcon = 'house' | 'user' | 'briefcase' | 'code' | 'flask' | 'mail';

export interface FooterNavLink {
  label: string;
  routerLink: string;
  icon: FooterNavIcon;
}

export type SocialIcon = 'github' | 'linkedin' | 'mail';
export type AccentColor = 'blue' | 'purple';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
  accent: AccentColor;
}