import { paths } from "../../core/constraints";
import { ProfileInfo } from "../../core/types";
import Profile from "../profile";

import Link from "../link";

import styles from "./styles.module.scss";
import Button from "../button";
import Category from "../category";

interface Props {
  profileInfo: ProfileInfo;
  wrapperClassName?: string;
}

const LeftNavbar: React.FC<Props> = ({ profileInfo, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <div className={styles.navbar}>
        <Profile data={profileInfo} />
        <div className={styles.links}>
          {paths.map(({ name, path }) => (
            <Link key={path} to={path}>
              {name}
            </Link>
          ))}
        </div>
        <h3>Projects</h3>
        <Button wrapperClassName={styles.button} variant="primary">
          + Add a project
        </Button>
        <h3>Categories</h3>
        <div className={styles.categories}>
          <Category name="Friends" color="var(--friends-gradient)" />
          <Category name="Pro" color="var(--pro-gradient)" />
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
