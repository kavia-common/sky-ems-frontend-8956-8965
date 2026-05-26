import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type NavKey = 'Dashboard' | 'Reports' | 'Search';

type DeviceInfo = {
  deviceId: string;
  firmware: string;
  hardwareVersion: string;
  serialNumber: string;
  mac: string;
};

type WifiDetails = {
  networkName: string;
  channel: string;
  signal: string;
  security: string;
};

type NotificationCounts = {
  alerts: number;
  warnings: number;
  messages: number;
};

type NetworkStats = {
  signalDbm: number;
  latencyMs: number;
};

/**
 * Home centric console page — dashboard UI.
 *
 * Source of truth: `/attachments/image.png`
 *
 * Layout:
 * - Wide left sidebar with text navigation
 * - Top bar with title, search, and small icon/avatar buttons
 * - 3-column dashboard grid with chart cards, quick actions, and sparklines (visual placeholders)
 */
@Component({
  selector: 'app-home-centric-console',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-centric-console.component.html',
  styleUrl: './home-centric-console.component.css',
})
export class HomeCentricConsoleComponent {
  /** Username used for avatar initial. */
  userName = 'John Doe';

  activeNav: NavKey = 'Dashboard';

  deviceInfo: DeviceInfo = {
    deviceId: 'HCC-DEV-01',
    firmware: 'v1.2.8',
    hardwareVersion: 'HW-2.1',
    serialNumber: 'SN-9F3A-2C11',
    mac: 'AA:BB:CC:DD:EE:FF',
  };

  wifiDetails: WifiDetails = {
    networkName: 'HCC-Network',
    channel: '11',
    signal: 'Strong',
    security: 'WPA2',
  };

  notifications: NotificationCounts = {
    alerts: 3,
    warnings: 7,
    messages: 12,
  };

  networkStats: NetworkStats = {
    signalDbm: -75,
    latencyMs: 75,
  };

  // PUBLIC_INTERFACE
  setActiveNav(key: NavKey): void {
    /** Sets the active sidebar navigation item (visual only; no routing in this view). */
    this.activeNav = key;
  }
}
