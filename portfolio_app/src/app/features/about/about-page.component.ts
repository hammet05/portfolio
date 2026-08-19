import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LucideBrain, LucideBoxes, LucideCode, LucideGlobe, LucideLayers, LucideLink, LucideMonitor, LucideNetwork, LucideSettings } from '@lucide/angular';

type AboutIcon = 'monitor' | 'globe' | 'network' | 'layers' | 'brain' | 'boxes' | 'link' | 'settings' | 'code';

interface JourneyStage {
  id: string;
  orderNumber: string;
  title: string;
  summary: string;
  icon: AboutIcon;
}

interface FocusArea {
  id: string;
  title: string;
  detail: string;
  icon: AboutIcon;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    LucideBrain,
    LucideBoxes,
    LucideCode,
    LucideGlobe,
    LucideLayers,
    LucideLink,
    LucideMonitor,
    LucideNetwork,
    LucideSettings
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements AfterViewInit, OnDestroy {
  protected readonly heroDescription =
    'I build dependable software systems, connect complex workflows, and explore practical ways to extend them with AI.';

  protected readonly descriptors = ['Software Engineer', 'Systems Builder', 'AI Explorer'];

  protected readonly stages: JourneyStage[] = [
    { id: 'stage-1', orderNumber: '01', title: 'Building Applications', summary: 'Desktop and business systems.', icon: 'monitor' },
    { id: 'stage-2', orderNumber: '02', title: 'Connecting Systems', summary: 'Web, APIs, and integrations.', icon: 'globe' },
    { id: 'stage-3', orderNumber: '03', title: 'Distributed Systems', summary: 'Events, scale, and coordination.', icon: 'network' },
    { id: 'stage-4', orderNumber: '04', title: 'Modernizing Systems', summary: 'Legacy transformation and architecture.', icon: 'layers' },
    { id: 'stage-5', orderNumber: '05', title: 'Exploring Intelligence', summary: 'LLMs, RAG, and applied AI.', icon: 'brain' }
  ];

  protected readonly focusAreas: FocusArea[] = [
    { id: 'focus-1', title: 'Enterprise Systems', detail: 'Robust, scalable, and maintainable systems for critical operations.', icon: 'boxes' },
    { id: 'focus-2', title: 'Integration & APIs', detail: 'Connecting platforms and data to create seamless experiences.', icon: 'link' },
    { id: 'focus-3', title: 'Automation', detail: 'Automating processes to improve efficiency and reduce operational complexity.', icon: 'settings' },
    { id: 'focus-4', title: 'Modernization', detail: 'Evolving legacy applications into modern, clean, and sustainable architectures.', icon: 'code' }
  ];

  protected readonly projectStory = {
    startedAs: 'A single-user tool for medical contracting, designed to make a specific process easier to manage.',
    grewToInclude: [
      'Medical authorizations and compliance workflows',
      'Contact center operations and communication flows',
      'Administrative teams across multiple areas of the organization'
    ],
    becameImportantAt: 'It evolved into a critical communication platform used at scale across the institution.'
  };

  protected readonly aiFocus = [
    'Chatbots and conversational interfaces',
    'LLM-based applications',
    'RAG systems for knowledge access',
    'AI applications embedded in useful workflows'
  ];

  protected readonly philosophy = {
    primary: "I don't just want to build AI. I want to build useful systems with AI.",
    supporting: 'Always learning. Always building.'
  };

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (!animatedElements.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('in-view');
            this.observer?.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
