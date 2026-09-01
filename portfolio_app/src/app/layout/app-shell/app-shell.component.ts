import { afterNextRender, Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideArrowUp } from '@lucide/angular';
import { IconButtonComponent } from '../../shared/ui/icon-button/icon-button.component';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, IconButtonComponent, LucideArrowUp, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {
  protected readonly showScrollToTop = signal(false);

  constructor() {
    afterNextRender(() => this.updateScrollToTopVisibility());
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  protected updateScrollToTopVisibility(): void {
    const pageOverflows = document.documentElement.scrollHeight > window.innerHeight;
    this.showScrollToTop.set(pageOverflows && window.scrollY > 0);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
