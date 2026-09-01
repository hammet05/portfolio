import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  implemented: boolean;
}

@Component({
  selector: 'app-mobile-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss'
})
export class MobileNavigationComponent {
  readonly open = input(false);
  readonly links = input<NavLink[]>([]);
  readonly closeMenu = output<void>();

  protected close(): void {
    this.closeMenu.emit();
  }
}
