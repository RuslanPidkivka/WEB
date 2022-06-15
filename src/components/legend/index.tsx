import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  orientation: "horizontal" | "vertical";
}

const Legend: React.FC<PropsWithChildren<Props>> = ({
  children,
  orientation,
}) => (
  <div className={classNames(styles.legend, styles[orientation])}>
    {children}
  </div>
);

export default Legend;
