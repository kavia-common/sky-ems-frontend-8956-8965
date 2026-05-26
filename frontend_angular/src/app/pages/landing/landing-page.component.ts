import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  /**
   * Display name shown in the header and welcome message.
   * In a real app, this would come from an auth/user profile service.
   */
  userName = 'Jane Doe';

  constructor(private readonly router: Router) {}

  // PUBLIC_INTERFACE
  onCardClick(event: globalThis.MouseEvent, cardName: string): void {
    /** Handles clicks on the dashboard cards. */
    event.preventDefault();

    if (cardName === 'Home centric console') {
      void this.router.navigate(['/home-centric-console']);
      return;
    }

    if (cardName === 'Insight Console') {
      void this.router.navigate(['/insight-console']);
      return;
    }

    console.log(`Clicked card: ${cardName}`);
  }
}
