import classNames from "classnames";
import Image from "next/image";
import { BsBookmarkCheckFill } from "react-icons/bs";

import { ProfileInfo } from "../../core/types";

import styles from "./styles.module.scss";

interface Props {
  data: ProfileInfo;
  wrapperClassName?: string;
  inline?: boolean;
}

const Profile: React.FC<Props> = ({ data, inline, wrapperClassName }) => (
  <div className={wrapperClassName}>
    <div
      className={classNames(styles.profile, {
        [styles.inline]: inline,
      })}
    >
      <div className={styles.avatar}>
        {/* TODO: Pass url later */}
        <Image
          src={"/profile-image.png"}
          width={inline ? 33 : 44}
          height={inline ? 33 : 44}
          layout="fixed"
          alt=""
        />
        {/* <div className={styles.photo} /> */}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{data.fullName}</div>
        <div className={styles.position}>{data.position}</div>
      </div>
      <BsBookmarkCheckFill className={styles.icon} />
    </div>
  </div>
);

export default Profile;
