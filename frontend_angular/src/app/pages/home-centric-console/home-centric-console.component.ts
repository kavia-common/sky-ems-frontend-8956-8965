import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type NavKey = 'Dashboard' | 'Reports' | 'Search';

type ActivityItem = {
  time: string;
  message: string;
};

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

type EthernetStatus = {
  ip: string;
  subnetMask: string;
  connected: boolean;
};

type NotificationCounts = {
  alerts: number;
  warnings: number;
  messages: number;
};

type SpeedTest = {
  downloadMbps: number;
  uploadMbps: number;
};

type NetworkStats = {
  signalDbm: number;
  latencyMs: number;
};

/**
 * Home centric console page — modern network monitoring dashboard UI.
 *
 * Layout per user_input_ref:
 * - Left vertical sidebar with icons (Dashboard, Reports, Search)
 * - Top header bar: "Welcome John Doe"
 * - 3-column main dashboard with specified panels/cards
 */
@Component({
  selector: 'app-home-centric-console',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-centric-console.component.html',
  styleUrl: './home-centric-console.component.css',
})
export class HomeCentricConsoleComponent {
  /** Username shown in the header welcome and user menu. */
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

  ethernetStatus: EthernetStatus = {
    ip: '192.168.1.101',
    subnetMask: '255.255.255.0',
    connected: true,
  };

  notifications: NotificationCounts = {
    alerts: 3,
    warnings: 7,
    messages: 12,
  };

  speedTest: SpeedTest = {
    downloadMbps: 320,
    uploadMbps: 42,
  };

  networkStats: NetworkStats = {
    signalDbm: -75,
    latencyMs: 75,
  };

  recentActivity: ActivityItem[] = [
    { time: '09:12', message: 'Device connected: Laptop' },
    { time: '09:18', message: 'WiFi channel optimized' },
    { time: '09:25', message: 'Firmware check completed' },
    { time: '09:31', message: 'Speed test scheduled' },
    { time: '09:44', message: 'New warning: signal fluctuation' },
  ];

  // PUBLIC_INTERFACE
  setActiveNav(key: NavKey): void {
    /** Sets the active sidebar navigation item (visual only; no routing in this view). */
    this.activeNav = key;
  }

  // PUBLIC_INTERFACE
  runSpeedTest(): void {
    /**
     * Triggers a speed test action (placeholder).
     * In a real implementation, this would call an API and update download/upload values.
     */
    // Keep as a no-op placeholder while preserving UX affordance.
    // eslint-disable-next-line no-console
    console.log('Run Test clicked');
  }
}
