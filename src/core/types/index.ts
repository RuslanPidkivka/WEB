export interface ProfileInfo {
  fullName: string;
  position: string;
  avatar: string;
}

export interface StatisticCardData {
  value: number;
  changePercent: number;
}

export interface VisitSalesSingleData {
  month: string;
  chn: number;
  usa: number;
  uk: number;
}

export interface TrafficSourcesSingleData {
  name: string;
  value: number;
  color: "blue" | "green" | "pink";
}

export interface Ticket {
  assigneeFullname: string;
  assigneeAvatar: string;
  subject: string;
  status: "done" | "progress" | "on hold" | "rejected";
  lastUpdate: string;
  trackingId: string;
}

export interface RecentUpdate {
  fullname: string;
  lastUpdate: string;
  subject: string;
  avatar: string;
  details: string;
}

export interface Project {
  assignee: string;
  dueDate: string;
  progress: number;
}
