import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  value?: number;
  unit?: string;
  color: string;
  textTransform: "uppercase" | "lowercase" | "capitalize";
}

const LegendItem: React.FC<Props> = ({
  title,
  value,
  unit,
  color,
  textTransform,
}) => (
  <div className={styles.item}>
    <div className={classNames(styles.main, styles[textTransform])}>
      <div className={classNames(styles.icon, styles[color])} />
      <div className={styles.title}>{title}</div>
    </div>
    {value && <div className={styles.value}>{`${value}${unit}`}</div>}
  </div>
);

export default LegendItem;
