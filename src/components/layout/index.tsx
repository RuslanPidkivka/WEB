import { PropsWithChildren } from "react";
import { ProfileInfo } from "../../core/types";
import Footer from "../footer";
import LeftNavbar from "../left-navbar";
import TopNavbar from "../top-navbar";
import styles from "./styles.module.scss";

interface Props {
  profileInfo: ProfileInfo;
  hasUnreadMessages: boolean;
  hasNotifications: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<PropsWithChildren<Props>> = ({
  profileInfo,
  hasUnreadMessages,
  hasNotifications,
  children,
}: Props) => (
  <div className={styles.layout}>
    <LeftNavbar
      wrapperClassName={styles["left-navbar"]}
      profileInfo={profileInfo}
    />
    <TopNavbar
      profileInfo={profileInfo}
      hasNotifications={hasNotifications}
      hasUnreadMessages={hasUnreadMessages}
    />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
