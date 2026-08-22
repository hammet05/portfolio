import { Component } from '@angular/core';
import { LucideCode2, LucideBox, LucideBrainCircuit } from '@lucide/angular';
interface HeroBadge {
  icon: 'code' | 'box' | 'brain';
  label: string[];
  accent: boolean;
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
 // Íconos registrados como directivas standalone, mismo patrón que engineering-journey
  readonly LucideCode2 = LucideCode2;
  readonly LucideBox = LucideBox;
  readonly LucideBrainCircuit = LucideBrainCircuit;

  readonly badges: HeroBadge[] = [
    { icon: 'code', label: ['Software', 'Engineer'], accent: false },
    { icon: 'box', label: ['Systems', 'Builder'], accent: false },
    { icon: 'brain', label: ['AI', 'Explorer'], accent: true },
  ];

}
