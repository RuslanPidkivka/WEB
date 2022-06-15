import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

import { BsSearch } from "react-icons/bs";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  type: "search";
}

const renderIcon = (type: string) => {
  switch (type) {
    case "search":
      return <BsSearch />;
    default:
      return null;
  }
};

const Input: React.FC<Props> = ({ type, wrapperClassName, ...props }) => (
  <div className={classNames(styles.wrapper, wrapperClassName)}>
    {renderIcon(type)}
    <input className={styles.input} {...props} />
  </div>
);

export default Input;
