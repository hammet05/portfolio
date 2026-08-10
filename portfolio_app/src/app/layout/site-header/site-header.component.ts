import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideMenu, LucideRocket, LucideX } from '@lucide/angular';
import { IconButtonComponent } from '../../shared/ui/icon-button/icon-button.component';
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';

interface NavLink {
  label: string;
  path: string;
  implemented: boolean;
}

@Component({
  selector: 'app-site-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    IconButtonComponent,
    MobileNavigationComponent,
    LucideRocket,
    LucideMenu,
    LucideX
  ],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  protected readonly links: NavLink[] = [
    { label: 'Home', path: '/', implemented: true },
    { label: 'About', path: '/about', implemented: false },
    { label: 'Experience', path: '/experience', implemented: false },
    { label: 'Projects', path: '/projects', implemented: false },
    { label: 'AI Lab', path: '/ai-lab', implemented: false },
    { label: 'Contact', path: '/contact', implemented: false }
  ];

  protected readonly mobileMenuOpen = signal(false);
  protected readonly menuLabel = computed(() =>
    this.mobileMenuOpen() ? 'Close navigation menu' : 'Open navigation menu'
  );

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
