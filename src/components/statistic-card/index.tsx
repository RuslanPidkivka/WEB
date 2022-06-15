import styles from "./styles.module.scss";

import formatThousands from "format-thousands";
import classNames from "classnames";

interface Props {
  title: string;
  changePercent: number;
  background: "pink" | "blue" | "green";
  unit?: string;
  value: number;
  wrapperClassName?: string;
  renderIcon(): JSX.Element;
}

const StatisticCard: React.FC<Props> = ({
  title,
  changePercent,
  background,
  unit,
  value,
  wrapperClassName,
  renderIcon,
}) => (
  <div className={wrapperClassName}>
    <div className={classNames(styles.card, styles[background])}>
      <div className={styles["head"]}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>{renderIcon()}</div>
      </div>
      <div className={styles.body}>
        {unit && <div className={styles.unit}>{unit}</div>}
        <div className={styles.value}>{formatThousands(value, ",")}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.change}>
          {`${changePercent < 0 ? "Decreased by" : "Increased by"} ${Math.abs(
            changePercent
          )}%`}
        </div>
      </div>
    </div>
  </div>
);

export default StatisticCard;
