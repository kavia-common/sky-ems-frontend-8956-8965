import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /**
   * Display name shown in the header and welcome message.
   * In a real app, this would come from an auth/user profile service.
   */
  userName = 'Jane Doe';

  // PUBLIC_INTERFACE
  onCardClick(event: globalThis.MouseEvent, cardName: string): void {
    /** Handles clicks on the dashboard cards (currently prevents navigation). */
    event.preventDefault();
    // Placeholder for future routing; kept to avoid dead links while matching the static design.
    console.log(`Clicked card: ${cardName}`);
  }
}
