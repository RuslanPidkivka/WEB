import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  progress: number;
  color: string;
}

const Progress: React.FC<Props> = ({ progress, color }) => (
  <div className={styles.progress}>
    <div
      className={classNames(styles.bar, styles[color])}
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default Progress;
