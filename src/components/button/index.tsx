import classNames from "classnames";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  wrapperClassName?: string;
}

const Button: React.FC<Props> = ({
  variant,
  children,
  wrapperClassName,
  ...props
}) => (
  <div className={wrapperClassName}>
    <button className={classNames(styles.button, styles[variant])} {...props}>
      {children}
    </button>
  </div>
);

export default Button;
