import { Component, OnInit } from '@angular/core';
import { LucideBrain, LucideCode2, LucideBox, LucideBot, 
          LucideChartNoAxesCombined, LucideDatabase, LucideContainer } from '@lucide/angular';
interface HeroBadge {
  icon: 'code' | 'box' | 'brain';
  label: string[];
  accent: boolean;
}

interface Starts {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LucideBrain,
    LucideBot,
    LucideChartNoAxesCombined,
    LucideCode2,
    LucideBox,
    LucideDatabase,
    LucideContainer
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})


export class HomePageComponent implements OnInit {
 // Íconos registrados como directivas standalone, mismo patrón que engineering-journey
  readonly LucideBox = LucideBox;
  readonly LucideBrain = LucideBrain;
  readonly LucideBot = LucideBot;
  readonly LucideChartNoAxesCombined = LucideChartNoAxesCombined;
  readonly LucideDatabase = LucideDatabase;
  readonly LucideContainer = LucideContainer;

  readonly badges: HeroBadge[] = [
    { icon: 'code', label: ['Software', 'Engineer'], accent: false },
    { icon: 'box', label: ['Systems', 'Builder'], accent: false },
    { icon: 'brain', label: ['AI', 'Explorer'], accent: true },
  ];

  stars: Starts[] = [];

  ngOnInit() {
    this.starGeneration(530); // Genera 30 estrellas aleatorias
  }

  starGeneration(cantidad: number) {
  const stars: Starts[] = [];
  for (let i = 0; i < cantidad; i++) {
    stars.push({
      cx: Math.random() * 840,                    // Ancho total del viewBox
      cy: Math.random() * 857 - 100,               // Alto total (desde -100 hasta 757)
      r: Math.random() * 1.0 + 1.2,                // Radio entre 0.8px y 2.3px
      opacity: Math.random() * 0.4 + 0.2           // Opacidad variable para dar profundidad (entre 0.2 y 0.6)
    });
  }
  this.stars = stars;
}

}

