import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {LucideHouse,LucideUser,LucideBriefcase,LucideCode2,LucideFlaskConical,LucideMail,LucideShieldCheck, LucideQuote,} from '@lucide/angular';
import { FooterNavLink, SocialLink } from './footer.model';
@Component({
  selector: 'app-site-footer',  
  imports: [
    RouterLink,
    LucideHouse,
    LucideUser,
    LucideBriefcase,
    LucideCode2,
    LucideFlaskConical,
    LucideMail,
    LucideShieldCheck,
    LucideQuote,
  ],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {

  readonly currentYear = new Date().getFullYear();
 
  readonly navLinks: FooterNavLink[] = [
    { label: 'Home', routerLink: '/', icon: 'house' },
    { label: 'About', routerLink: '/about', icon: 'user' },
    { label: 'Experience', routerLink: '/experience', icon: 'briefcase' },
    { label: 'Projects', routerLink: '/projects', icon: 'code' },
    { label: 'AI Lab', routerLink: '/ai-lab', icon: 'flask' },
    { label: 'Contact', routerLink: '/contact', icon: 'mail' },
  ];
 
  readonly focusAreas: string[] = [
    'Software Engineering',
    'Integration & Automation',
    'Intelligent Systems',
    'APIs & Architecture',
    'AI & Machine Learning',
    'RAG & LLM Applications',
  ];
 
  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/your-user', icon: 'github', accent: 'blue' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-user', icon: 'linkedin', accent: 'blue' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail', accent: 'purple' },
  ];
 
  // Íconos registrados como directivas standalone (mismo patrón que el resto del sitio)
  readonly LucideHouse = LucideHouse;
  readonly LucideUser = LucideUser;
  readonly LucideBriefcase = LucideBriefcase;
  readonly LucideCode2 = LucideCode2;
  readonly LucideFlaskConical = LucideFlaskConical;
  readonly LucideMail = LucideMail;
  readonly LucideShieldCheck = LucideShieldCheck;
  readonly LucideQuote = LucideQuote;
}