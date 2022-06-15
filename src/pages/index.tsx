import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { months } from "../core/constraints";
import {
  ProfileInfo,
  Project,
  RecentUpdate,
  StatisticCardData,
  Ticket,
  TrafficSourcesSingleData,
  VisitSalesSingleData,
} from "../core/types";
import { generateRandomNumberInRange } from "../utils";

import HomeView from "../views/home";

const profile: ProfileInfo = {
  avatar: "",
  fullName: "David Grey H.",
  position: "Project Manager",
};

const weeklySales: StatisticCardData = {
  value: 15_0000,
  changePercent: 60,
};

const weeklyOrders: StatisticCardData = {
  value: 495_057,
  changePercent: -10,
};

const visitorsOnline: StatisticCardData = {
  value: 955_741,
  changePercent: 5,
};

const hasNotifications: boolean = true;
const hasUnreadMessages: boolean = true;

const visitSalesStatistic: VisitSalesSingleData[] = months.map((month) => ({
  month,
  chn: generateRandomNumberInRange(15, 100),
  usa: generateRandomNumberInRange(15, 100),
  uk: generateRandomNumberInRange(15, 100),
}));

const trafficSourcesStatistic: TrafficSourcesSingleData[] = [
  {
    name: "Search Engines",
    value: 33.3,
    color: "blue",
  },
  {
    name: "Directs Click",
    value: 33.3,
    color: "green",
  },
  {
    name: "Bookmarks Click",
    value: 33.3,
    color: "pink",
  },
];

const tickets: Ticket[] = [
  {
    assigneeFullname: "David Grey",
    assigneeAvatar: "/avatar1.png",
    subject: "Funds is not received",
    status: "done",
    lastUpdate: "2017-06-26",
    trackingId: "WD-12345",
  },
  {
    assigneeFullname: "Stell Johnson",
    assigneeAvatar: "/avatar2.png",
    subject: "Assign a new task Design Purpleadmin",
    status: "progress",
    lastUpdate: "2017-06-26",
    trackingId: "WD-12346",
  },
  {
    assigneeFullname: "Marina Michel",
    assigneeAvatar: "/avatar3.png",
    subject: "Website down for a week",
    status: "on hold",
    lastUpdate: "2017-06-26",
    trackingId: "WD-12347",
  },
  {
    assigneeFullname: "John Doe",
    assigneeAvatar: "/avatar4.png",
    subject: "Understanding dashboard problems",
    status: "rejected",
    lastUpdate: "2017-06-26",
    trackingId: "WD-12348",
  },
];

const recentUpdate: RecentUpdate = {
  fullname: "Jack Menqu",
  avatar: "",
  subject: "School Website - Authentication Module",
  details:
    "Its is a long established fact that a reader will be distracted by the readable content of a page.",
  lastUpdate: "2018-10-03",
};

const projects: Project[] = [
  {
    assignee: "Herman Beck",
    dueDate: "2015-15-05",
    progress: 30,
  },
  {
    assignee: "Messy Adam",
    dueDate: "2015-01-07",
    progress: 80,
  },
  {
    assignee: "John Richards",
    dueDate: "2015-12-04",
    progress: 60,
  },
  {
    assignee: "Ashton Coui",
    dueDate: "2015-15-05",
    progress: 25,
  },
  {
    assignee: "Daniel Russe",
    dueDate: "2015-03-05",
    progress: 45,
  },
];

const data = {
  profile,
  weeklySales,
  weeklyOrders,
  visitorsOnline,
  hasNotifications,
  hasUnreadMessages,
  visitSalesStatistic,
  trafficSourcesStatistic,
  tickets,
  recentUpdate,
  projects,
};

console.log(JSON.stringify(data));

const Home: NextPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    data && (
      <HomeView
        profileInfo={data.profile}
        hasNotifications={data.hasNotifications}
        hasUnreadMessages={data.hasUnreadMessages}
        weeklySales={data.weeklySales}
        weeklyOrders={data.weeklyOrders}
        visitorsOnline={data.visitorsOnline}
        visitSalesStatistic={data.visitSalesStatistic}
        trafficSourcesStatistic={data.trafficSourcesStatistic}
        tickets={data.tickets}
        recentUpdate={data.recentUpdate}
        projects={data.projects}
      />
    )
  );
};

export default Home;
