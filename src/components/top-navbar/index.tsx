import { ProfileInfo } from "../../core/types";
import styles from "./styles.module.scss";

import { BsPower } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";

import { CgBell, CgMenu } from "react-icons/cg";

import { ImStack } from "react-icons/im";
import Input from "../input";
import Profile from "../profile";
import Button from "../button";
import { MdFullscreen } from "react-icons/md";

interface Props {
  profileInfo: ProfileInfo;
  hasNotifications: boolean;
  hasUnreadMessages: boolean;
}

const TopNavbar: React.FC<Props> = ({
  profileInfo,
  hasNotifications,
  hasUnreadMessages,
}) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <ImStack />
      <h1 className={styles["website-name"]}>Purple</h1>
    </div>
    <Input
      wrapperClassName={styles.search}
      type="search"
      placeholder="Search projects..."
    />
    <div className={styles.left}>
      <Profile data={profileInfo} inline />
      <div className={styles.buttons}>
        <Button variant="secondary">
          <MdFullscreen />
        </Button>
        <Button variant="secondary">
          <BiEnvelope />
        </Button>
        <Button variant="secondary">
          <CgBell />
        </Button>
        <Button variant="secondary">
          <BsPower />
        </Button>
        <Button variant="secondary">
          <CgMenu />
        </Button>
      </div>
    </div>
  </div>
);

export default TopNavbar;
