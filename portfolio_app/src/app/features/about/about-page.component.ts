import { AfterViewInit, Component, OnDestroy } from '@angular/core';

interface JourneyStage {
  id: string;
  title: string;
  summary: string;
}

interface FocusArea {
  id: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements AfterViewInit, OnDestroy {
  protected readonly descriptors = ['Software Engineer', 'Systems Builder', 'AI Explorer'];

  protected readonly stages: JourneyStage[] = [
    { id: 'stage-1', title: 'Building Applications', summary: 'Desktop and business systems.' },
    { id: 'stage-2', title: 'Connecting Systems', summary: 'Web, APIs, and integrations.' },
    { id: 'stage-3', title: 'Distributed Systems', summary: 'Events, scale, and coordination.' },
    { id: 'stage-4', title: 'Modernizing Systems', summary: 'Legacy transformation and architecture.' },
    { id: 'stage-5', title: 'Exploring Intelligence', summary: 'LLMs, RAG, and applied AI.' }
  ];

  protected readonly focusAreas: FocusArea[] = [
    { id: 'focus-1', title: 'Software engineering', detail: 'Enterprise systems, APIs, and dependable delivery.' },
    { id: 'focus-2', title: 'Integration and automation', detail: 'Connecting workflows and removing repetitive friction.' },
    { id: 'focus-3', title: 'Intelligent systems', detail: 'Practical AI embedded in useful software.' }
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
    'RAG systems for knowledge access'
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
