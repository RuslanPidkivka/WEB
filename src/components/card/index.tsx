import styles from "./styles.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  renderHeadLeft?(): JSX.Element;
}

const Card: React.FC<Props> = ({
  title,
  children,
  wrapperClassName,
  renderHeadLeft,
}) => (
  <div className={wrapperClassName}>
    <div className={styles.card}>
      <div className={styles.head}>
        <h4 className={styles.title}>{title}</h4>
        {renderHeadLeft && renderHeadLeft()}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);

export default Card;
