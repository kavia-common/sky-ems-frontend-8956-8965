import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type SidebarItem = {
  label: string;
  icon: string;
  active?: boolean;
};

type TableRow = {
  name: string;
  status: 'ok' | 'warn' | 'down';
  value: string;
};

/**
 * Home centric console page — dashboard-like console UI.
 *
 * This is the destination route when the user clicks the “Home centric console”
 * card on the landing page.
 */
@Component({
  selector: 'app-home-centric-console',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-centric-console.component.html',
  styleUrl: './home-centric-console.component.css',
})
export class HomeCentricConsoleComponent {
  /**
   * Username shown in the header avatar/menu.
   * In a real application, this would come from an auth/user profile service.
   */
  userName = 'Jane Doe';

  sidebarItems: SidebarItem[] = [
    { label: 'Home', icon: '🏠', active: true },
    { label: 'Dashboard', icon: '📊' },
    { label: 'Reports', icon: '🧾' },
    { label: 'Alerts', icon: '🔔' },
    { label: 'Settings', icon: '⚙️' },
  ];

  kpis = [
    { label: 'Active', value: '20', delta: '+4.2%', tone: 'success' as const },
    { label: 'Warning', value: '06', delta: '-1.1%', tone: 'warning' as const },
    { label: 'Down', value: '02', delta: '+0.7%', tone: 'danger' as const },
  ];

  statusTable: TableRow[] = [
    { name: 'Gateway A', status: 'ok', value: 'Healthy' },
    { name: 'Gateway B', status: 'warn', value: 'Degraded' },
    { name: 'Gateway C', status: 'down', value: 'Offline' },
    { name: 'Gateway D', status: 'ok', value: 'Healthy' },
  ];

  recentTable = [
    { time: '08:10', device: 'Living Room', event: 'Cookie updated', result: 'Success' },
    { time: '08:22', device: 'Bedroom', event: 'Sync', result: 'Success' },
    { time: '08:35', device: 'Kitchen', event: 'Policy applied', result: 'Queued' },
    { time: '08:42', device: 'Hallway', event: 'Report generated', result: 'Success' },
    { time: '08:55', device: 'Garage', event: 'Heartbeat', result: 'Warning' },
  ];

  // PUBLIC_INTERFACE
  onNavClick(item: SidebarItem): void {
    /** Handles sidebar item clicks (placeholder for future navigation). */
    this.sidebarItems = this.sidebarItems.map((i) => ({ ...i, active: i.label === item.label }));
  }

  // PUBLIC_INTERFACE
  onTopLinkClick(event: globalThis.MouseEvent, label: string): void {
    /** Handles top header navigation clicks (placeholder for future navigation). */
    event.preventDefault();
    console.log(`Top nav: ${label}`);
  }

  // PUBLIC_INTERFACE
  onActionClick(event: globalThis.MouseEvent, label: string): void {
    /** Handles action button clicks in the action list widget (placeholder). */
    event.preventDefault();
    console.log(`Action: ${label}`);
  }
}
