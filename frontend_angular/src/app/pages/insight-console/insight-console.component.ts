import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type NavKey = 'Dashboard' | 'Alerts' | 'Queue' | 'Reports' | 'Search';

type KeyMetric = {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'flat';
};

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
 * Layout:
 * - Left sidebar with text/icon navigation
 * - Top bar with title and user info
 * - 3-column dashboard grid:
 *   - Left: "Ask me your queries!" AI chat panel with area chart
 *   - Middle: Metrics stats with filters and progress bars
 *   - Right: Search Query Result, Key Metrics table, bar chart
 */
@Component({
  selector: 'app-insight-console',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insight-console.component.html',
  styleUrl: './insight-console.component.css',
})
export class InsightConsoleComponent {
  /** Username used for the user menu. */
  userName = 'Jane Doe';

  /** Active nav key. */
  activeNav: NavKey = 'Dashboard';

  /** Query text entered in the AI chat panel. */
  queryText = '';

  /** Primary KPI displayed in the stats panel. */
  primaryKpi = '68.4k';

  /** Secondary KPI (total) displayed in the stats panel. */
  secondaryKpi = '1030k';

  /** Active time filter. */
  activeFilter: 'week' | 'month' | 'total' = 'week';

  /** Progress items in the middle column. */
  progressItems: ProgressItem[] = [
    { label: 'Category A', percent: 82, color: '#1fb6c9' },
    { label: 'Category B', percent: 65, color: '#22c55e' },
    { label: 'Category C', percent: 48, color: '#8b5cf6' },
    { label: 'Category D', percent: 71, color: '#f59e0b' },
    { label: 'Category E', percent: 55, color: '#ec4899' },
    { label: 'Category F', percent: 39, color: '#ef4444' },
  ];

  /** Key metrics in the right column. */
  keyMetrics: KeyMetric[] = [
    { label: 'Avg Session', value: '4m 32s', trend: 'up' },
    { label: 'Bounce Rate', value: '38.2%', trend: 'down' },
    { label: 'Conv. Rate', value: '5.7%', trend: 'up' },
    { label: 'Impressions', value: '142k', trend: 'up' },
  ];

  /** Bar chart data (relative heights 0-100). */
  barChartData: number[] = [40, 65, 52, 78, 60, 45, 70, 58, 84, 66, 50, 75];

  /** Bar chart labels (months). */
  barChartLabels: string[] = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  // PUBLIC_INTERFACE
  setActiveNav(key: NavKey): void {
    /** Sets the active sidebar navigation item. */
    this.activeNav = key;
  }

  // PUBLIC_INTERFACE
  setFilter(filter: 'week' | 'month' | 'total'): void {
    /** Sets the active time filter for the stats panel. */
    this.activeFilter = filter;
  }

  // PUBLIC_INTERFACE
  submitQuery(): void {
    /** Handles query submission in the AI chat panel (placeholder). */
    console.log('Query submitted:', this.queryText);
  }
}
