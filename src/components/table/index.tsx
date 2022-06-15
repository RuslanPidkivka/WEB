import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  headers: string[];
  wrapperClassName?: string;
}

const Table: React.FC<PropsWithChildren<Props>> = ({
  children,
  headers,
  wrapperClassName,
}) => (
  <div className={wrapperClassName}>
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default Table;
