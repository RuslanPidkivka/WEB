import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  status: "done" | "progress" | "on hold" | "rejected";
  wrapperClassName?: string;
}

const Status: React.FC<Props> = ({ status, wrapperClassName }) => (
  <div className={wrapperClassName}>
    <div
      className={classNames(styles.status, styles[status.split(" ").join("-")])}
    >
      {status}
    </div>
  </div>
);

export default Status;
