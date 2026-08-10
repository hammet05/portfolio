import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  readonly ariaLabel = input<string>('');
  readonly ariaControls = input<string>('');
  readonly ariaExpanded = input(false);
  readonly buttonClick = output<void>();

  protected handleClick(): void {
    this.buttonClick.emit();
  }
}
