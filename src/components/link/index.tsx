import { BsTable, BsBagPlusFill } from "react-icons/bs";

import { AiOutlineBars } from "react-icons/ai";
import { MdContacts, MdHome, MdMenu } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { BiChevronLeft } from "react-icons/bi";

import NextLink from "next/link";
import { forwardRef } from "react";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  icon?(): JSX.Element;
  wrapperClassName?: string;
}

const renderIcon = (to: string) => {
  switch (to) {
    case "/":
      return <MdHome />;
    case "/ui-elements":
      return <IoMdLocate />;
    case "/icons":
      return <MdContacts />;
    case "/forms":
      return <MdMenu />;
    case "/charts":
      return <AiOutlineBars />;
    case "/tables":
      return <BsTable />;
    case "/sample-pages":
      return (
        <div className={styles["sample-pages"]}>
          <BiChevronLeft />
          <BsBagPlusFill />
        </div>
      );
    default:
      return null;
  }
};

const Link = forwardRef(
  ({ to, icon, wrapperClassName, children, ...props }: Props, ref: any) => {
    const router = useRouter();

    const isActive = router.pathname === to;

    return (
      <div
        className={classNames(
          styles.link,
          {
            [styles.active]: isActive,
          },
          wrapperClassName
        )}
      >
        <NextLink href={to}>
          <a ref={ref} {...props}>
            {children}
          </a>
        </NextLink>
        <div className={styles.icon}>
          {renderIcon(to) ? renderIcon(to) : icon && icon()}
        </div>
      </div>
    );
  }
);

Link.displayName = "Link";

export default Link;
