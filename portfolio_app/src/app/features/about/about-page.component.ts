import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideBrain, LucideBoxes, LucideCode, LucideGlobe, LucideLayers, LucideLink, LucideMonitor, LucideNetwork, LucideSettings } from '@lucide/angular';

type AboutIcon = 'monitor' | 'globe' | 'network' | 'layers' | 'brain' | 'boxes' | 'link' | 'settings' | 'code';

interface JourneyStage {
  id: string;
  orderNumber: string;
  title: string;
  summary: string;
  technologies: string[];
  icon: AboutIcon;
}

interface FocusArea {
  id: string;
  title: string;
  detail: string;
  topics: string[];
  icon: AboutIcon;
}

interface Descriptor {
  label: string;
  icon: AboutIcon;
}

interface ProjectNode {
  label: string;
  icon: AboutIcon;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    RouterLink,
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

  protected readonly descriptors: Descriptor[] = [
    { label: 'Software Engineer', icon: 'monitor' },
    { label: 'Systems Builder', icon: 'layers' },
    { label: 'AI Explorer', icon: 'brain' }
  ];

  protected readonly stages: JourneyStage[] = [
    { id: 'stage-1', orderNumber: '01', title: 'Building Applications', summary: 'Desktop and business systems.', technologies: ['.NET', 'C#', 'Desktop'], icon: 'monitor' },
    { id: 'stage-2', orderNumber: '02', title: 'Connecting Systems', summary: 'Web, APIs, and integrations.', technologies: ['Angular', 'APIs', 'Integrations'], icon: 'globe' },
    { id: 'stage-3', orderNumber: '03', title: 'Distributed Systems', summary: 'Events, scale, and coordination.', technologies: ['Events', 'Services', 'Real-time'], icon: 'network' },
    { id: 'stage-4', orderNumber: '04', title: 'Modernizing Systems', summary: 'Legacy transformation and architecture.', technologies: ['Architecture', '.NET', 'Modernization'], icon: 'layers' },
    { id: 'stage-5', orderNumber: '05', title: 'Exploring Intelligence', summary: 'LLMs, RAG, and applied AI.', technologies: ['LLMs', 'RAG', 'Applied AI'], icon: 'brain' }
  ];

  protected readonly focusAreas: FocusArea[] = [
    { id: 'focus-1', title: 'Enterprise Systems', detail: 'Robust, scalable, and maintainable systems for critical operations.', topics: ['Architecture', 'Reliability'], icon: 'boxes' },
    { id: 'focus-2', title: 'Integration & APIs', detail: 'Connecting platforms and data to create seamless experiences.', topics: ['Connectivity', 'Data flow'], icon: 'link' },
    { id: 'focus-3', title: 'Automation', detail: 'Automating processes to improve efficiency and reduce operational complexity.', topics: ['Workflows', 'Efficiency'], icon: 'settings' },
    { id: 'focus-4', title: 'Modernization', detail: 'Evolving legacy applications into modern, clean, and sustainable architectures.', topics: ['Refactoring', 'Sustainability'], icon: 'code' }
  ];

  protected readonly projectStory = {
    startedAs: 'A single-user tool for medical contracting, designed to make a specific process easier to manage.',
    grewToInclude: [
      'Medical authorizations and compliance workflows',
      'Contact center operations and communication flows',
      'Administrative teams across multiple areas of the organization'
    ],
    becameImportantAt: 'It evolved into a critical communication platform used at scale across the institution.',
    nodes: [
      { label: 'Medical Contracting', icon: 'boxes' },
      { label: 'Integration Layer', icon: 'network' },
      { label: 'Medical Authorizations', icon: 'layers' },
      { label: 'Contact Center', icon: 'link' },
      { label: 'Administrative Area', icon: 'settings' }
    ] satisfies ProjectNode[]
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
