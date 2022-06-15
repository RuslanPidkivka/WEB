import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { IoMdTimer } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

import { GiCutDiamond } from "react-icons/gi";

import Layout from "../../components/layout";
import StatisticCard from "../../components/statistic-card";
import {
  ProfileInfo,
  Project as ProjectType,
  RecentUpdate,
  StatisticCardData,
  Ticket as TicketType,
  TrafficSourcesSingleData,
  VisitSalesSingleData,
} from "../../core/types";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  PinkVerticalGradient,
  PurpleVerticalGradient,
  BlueVerticalGradient,
} from "../../components/svgs-gradients";
import Legend from "../../components/legend";
import LegendItem from "../../components/legend-item";
import Table from "../../components/table";
import Ticket from "../../components/ticket";
import dayjs from "dayjs";
import Image from "next/image";
import Project from "../../components/project";
import { colors } from "../../core/constraints";

interface Props {
  profileInfo: ProfileInfo;
  hasUnreadMessages: boolean;
  hasNotifications: boolean;
  weeklySales: StatisticCardData;
  weeklyOrders: StatisticCardData;
  visitorsOnline: StatisticCardData;
  visitSalesStatistic: VisitSalesSingleData[];
  trafficSourcesStatistic: TrafficSourcesSingleData[];
  tickets: TicketType[];
  recentUpdate: RecentUpdate;
  projects: ProjectType[];
}

const Home: React.FC<Props> = ({
  profileInfo,
  hasUnreadMessages,
  hasNotifications,
  weeklyOrders,
  weeklySales,
  visitorsOnline,
  visitSalesStatistic,
  trafficSourcesStatistic,
  tickets,
  recentUpdate,
  projects,
}) => (
  <Layout
    profileInfo={profileInfo}
    hasUnreadMessages={hasUnreadMessages}
    hasNotifications={hasNotifications}
  >
    <div className={styles.home}>
      <div className={styles.head}>
        <div className={styles["current-page"]}>
          <div className={styles["icon-wrapper"]}>
            <MdHome />
          </div>
          Dashboard
        </div>
        <div className={styles.right}>
          <div>Overview</div>
          <AiOutlineInfoCircle />
        </div>
      </div>
      <div className={styles.content}>
        <StatisticCard
          title="Weekly Sales"
          unit="$"
          background="pink"
          renderIcon={() => <VscGraphLine />}
          {...weeklySales}
        />
        <StatisticCard
          title="Weekly Orders"
          background="blue"
          renderIcon={() => <BsBookmark />}
          {...weeklyOrders}
        />
        <StatisticCard
          title="Visitors Online"
          background="green"
          renderIcon={() => <GiCutDiamond />}
          {...visitorsOnline}
        />
        <Card
          title="Visit & Sales Statistics"
          wrapperClassName={styles["card-visit-sales"]}
          renderHeadLeft={() => (
            <Legend orientation="horizontal">
              <LegendItem
                title="chn"
                color="purple"
                textTransform="uppercase"
              />
              <LegendItem title="usa" color="pink" textTransform="uppercase" />
              <LegendItem title="uk" color="blue" textTransform="uppercase" />
            </Legend>
          )}
        >
          <ResponsiveContainer>
            <BarChart
              // height={251}
              // width={625}
              data={visitSalesStatistic}
              barGap={11}
              barSize={6}
            >
              <PinkVerticalGradient />
              <PurpleVerticalGradient />
              <defs>
                <linearGradient
                  id="blue-vertical-gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  x2="0%"
                  y1="0%"
                  y2="100%"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#44cfea" />

                  <stop offset="0.2" stopColor="#3cc8f5" />

                  <stop offset="0.4" stopColor="#49c0fd" />

                  <stop offset="0.6000000000000001" stopColor="#64b6ff" />

                  <stop offset="0.8" stopColor="#83aaff" />

                  <stop offset="1" stopColor="#a19df7" />
                </linearGradient>
                <linearGradient
                  id="pink-vertical-gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  x2="0%"
                  y1="0%"
                  y2="100%"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#ffb596" />

                  <stop offset="0.2" stopColor="#ffaa92" />

                  <stop offset="0.4" stopColor="#ff9e8f" />

                  <stop offset="0.6000000000000001" stopColor="#ff9290" />

                  <stop offset="0.8" stopColor="#ff8692" />

                  <stop offset="1" stopColor="#fe7a96" />
                </linearGradient>
                <linearGradient
                  id="purple-vertical-gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  x2="0%"
                  y1="0%"
                  y2="100%"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#d285ff" />

                  <stop offset="0.2" stopColor="#ca7cff" />

                  <stop offset="0.4" stopColor="#c174ff" />

                  <stop offset="0.6000000000000001" stopColor="#b76cff" />

                  <stop offset="0.8" stopColor="#ad64ff" />

                  <stop offset="1" stopColor="#a25cff" />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={15}
                axisLine={false}
              />
              <CartesianGrid vertical={false} stroke="var(--separator)" />
              <Bar
                dataKey="chn"
                barSize={6}
                fill="url(#purple-vertical-gradient)"
              />
              <Bar
                dataKey="usa"
                barSize={6}
                fill="url(#pink-vertical-gradient)"
              />
              <Bar
                dataKey="uk"
                barSize={6}
                fill="url(#blue-vertical-gradient)"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card
          title="Traffic Sources"
          wrapperClassName={styles["card-traffic-sources"]}
        >
          <PieChart width={183} height={183} className={styles["pie-chart"]}>
            <defs>
              <linearGradient
                id="pink-round-gradient"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#f3879a" />

                <stop offset="0.2" stopColor="#f78d98" />

                <stop offset="0.4" stopColor="#f99497" />

                <stop offset="0.6000000000000001" stopColor="#fc9b96" />

                <stop offset="0.8" stopColor="#fea296" />

                <stop offset="1" stopColor="#ffa996" />
              </linearGradient>
              <linearGradient
                id="green-round-gradient"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#70d3c9" />

                <stop offset="0.2" stopColor="#65d0c4" />

                <stop offset="0.4" stopColor="#59cdbf" />

                <stop offset="0.6000000000000001" stopColor="#4dc9b9" />

                <stop offset="0.8" stopColor="#3fc6b4" />

                <stop offset="1" stopColor="#2ec3ae" />
              </linearGradient>
              <linearGradient
                id="blue-round-gradient"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#49cdeb" />

                <stop offset="0.2" stopColor="#4ac7f2" />

                <stop offset="0.4" stopColor="#54c1f6" />

                <stop offset="0.6000000000000001" stopColor="#65b9f9" />

                <stop offset="0.8" stopColor="#79b1f8" />

                <stop offset="1" stopColor="#8da8f4" />
              </linearGradient>
            </defs>
            <Pie
              dataKey="value"
              data={trafficSourcesStatistic}
              outerRadius={92}
              innerRadius={42}
            >
              {trafficSourcesStatistic.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={`url(#${entry.color}-round-gradient)`}
                />
              ))}
            </Pie>
          </PieChart>

          <Legend orientation="vertical">
            {["search engines", "directs clicks", "bookmarks clicks"].map(
              (title, index) => (
                <LegendItem
                  key={title}
                  title={title}
                  color={trafficSourcesStatistic[index].color}
                  value={trafficSourcesStatistic[index].value}
                  unit="%"
                  textTransform="capitalize"
                />
              )
            )}
          </Legend>
        </Card>
        <Card title="Recent Tickets" wrapperClassName={styles.tickets}>
          <Table
            headers={[
              "Assignee",
              "Subject",
              "Status",
              "Last Update",
              "Tracking ID",
            ]}
          >
            {tickets.map((ticket) => (
              <Ticket key={ticket.trackingId} data={ticket} />
            ))}
          </Table>
        </Card>
        <Card title="Recent Updates" wrapperClassName={styles.updates}>
          <div className={styles["update-info"]}>
            <div className={styles.author}>
              <FaRegUser />
              <span className={styles.fullname}>{recentUpdate.fullname}</span>
            </div>
            <div className={styles.date}>
              <IoMdTimer />
              <span className={styles.date}>
                {dayjs(recentUpdate.lastUpdate)
                  .format("MMMM D[th], YYYY")
                  .toLowerCase()}
              </span>
            </div>
          </div>
          <div className={styles.images}>
            <div>
              <Image
                src="/image1.png"
                layout="responsive"
                alt=""
                width={496}
                height={225}
              />
            </div>
            <div>
              <Image
                src="/image2.png"
                layout="responsive"
                alt=""
                width={496}
                height={225}
              />
            </div>

            <div>
              <Image
                src="/image3.png"
                layout="responsive"
                alt=""
                width={496}
                height={225}
              />
            </div>
            <div>
              <Image
                src="/image4.png"
                layout="responsive"
                alt=""
                width={496}
                height={225}
              />
            </div>
          </div>
          <div className={styles["recent-updates-footer"]}>
            <div className={styles.avatar} />
            <div className={styles["recent-updates-footer-content"]}>
              <div className={styles.subject}>{recentUpdate.subject}</div>
              <div className={styles.details}>{recentUpdate.details}</div>
            </div>
          </div>
          {/* </div> */}
        </Card>
        <Card title="Projects Status" wrapperClassName={styles.projects}>
          <Table headers={["#", "Name", "Due Date", "Progress"]}>
            {projects.map((project, index) => (
              <Project
                index={index + 1}
                key={index}
                data={project}
                color={colors[index]}
              />
            ))}
          </Table>
        </Card>
      </div>
    </div>
  </Layout>
);

export default Home;
