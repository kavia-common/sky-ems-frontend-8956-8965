import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type NavKey = 'Dashboard' | 'Reports' | 'Alerts' | 'Search';

type ProgressItem = {
  label: string;
  percent: number;
  color: string;
};

/**
 * Insight Console page — AI-powered analytics dashboard.
 *
 * Source of truth: `/attachments/image.png`
 *
 * Layout (pixel-accurate to the provided Figma screenshot):
 * - Compact left sidebar with lavender background and icon+label nav items,
 *   topped by a circular gradient logo and a pink "375+ Sites" footer pill.
 * - Lavender top header band with page title (left) and "Welcome, {name}!" + avatar (right).
 * - Main content split into two columns:
 *   - Left (large card): "Ask me your queries!" with big KPI "-65 dbm",
 *     a green-filled area/line chart, descriptive text, and a pill-shaped
 *     query input with a purple "Submit" button.
 *   - Right (stacked):
 *       1) "Daily usage gauge across sites" KPI card (388K / 500k) with four
 *          colored horizontal progress bars.
 *       2) 3x2 grid of small metric tiles (bar/donut/sparkline/gauge variants).
 */
@Component({
  selector: 'app-insight-console',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insight-console.component.html',
  styleUrl: './insight-console.component.css',
})
export class InsightConsoleComponent {
  /** Display name used in the welcome message + avatar initial. */
  userName = 'John Doe';

  /** Active sidebar nav item. */
  activeNav: NavKey = 'Dashboard';

  /** Query text entered in the AI chat panel. */
  queryText = '';

  /** Horizontal progress bars shown inside the KPI card (right column top). */
  progressItems: ProgressItem[] = [
    { label: 'Region North', percent: 96, color: '#34c39a' },
    { label: 'Region South', percent: 92, color: '#8b5cf6' },
    { label: 'Region East', percent: 88, color: '#22c1c3' },
    { label: 'Region West', percent: 84, color: '#f59e0b' },
  ];

  /** Heights (0-60 viewBox units) for the small bar chart tile. */
  barsUsers: number[] = [22, 34, 18, 42, 30, 50, 36, 28, 44, 32];

  // PUBLIC_INTERFACE
  setActiveNav(key: NavKey): void {
    /** Sets the active sidebar navigation item. */
    this.activeNav = key;
  }

  // PUBLIC_INTERFACE
  submitQuery(): void {
    /** Handles query submission in the AI chat panel (placeholder action). */
    // eslint-disable-next-line no-console
    console.log('Insight Console query submitted:', this.queryText);
  }
}
