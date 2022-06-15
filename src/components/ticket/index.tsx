import dayjs from "dayjs";
import { Ticket } from "../../core/types";
import Status from "../status";
import styles from "./styles.module.scss";

import Image from "next/image";

interface Props {
  data: Ticket;
}

const Ticket: React.FC<Props> = ({ data }) => (
  <tr className={styles.ticket}>
    <td>
      <div className={styles.assignee}>
        {/* TODO: Change to <Image /> */}
        <Image
          src={data.assigneeAvatar}
          width={33}
          height={33}
          layout="fixed"
          alt=""
        />
        {/* <div className={styles.avatar} /> */}
        <div className={styles.fullname}>{data.assigneeFullname} </div>
      </div>
    </td>
    <td>{data.subject}</td>
    <td>
      <Status status={data.status} />
    </td>
    <td className={styles["last-update"]}>
      {dayjs(data.lastUpdate).format("D MMM YYYY")}
    </td>
    <td>{data.trackingId}</td>
  </tr>
);

export default Ticket;
