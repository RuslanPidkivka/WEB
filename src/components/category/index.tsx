import styles from "./styles.module.scss";

interface Props {
  name: string;
  color: string;
}

const Category: React.FC<Props> = ({ name, color }) => (
  <div className={styles.category}>
    <div
      className={styles["outer-circle"]}
      style={{
        background: color,
      }}
    >
      <div className={styles["inner-circle"]} />
    </div>
    <div className={styles.name}>{name}</div>
  </div>
);

export default Category;
