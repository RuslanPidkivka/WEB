import Link from "next/link";
import styles from "./styles.module.scss";

const NotImplemented = () => (
  <div className={styles.notImplemented}>
    <h1>Not Implemented</h1>
    <p>This page is not yet implemented.</p>
    <Link href="/">Go back to the home page</Link>
  </div>
);

export default NotImplemented;
