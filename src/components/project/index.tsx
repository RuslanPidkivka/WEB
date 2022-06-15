import dayjs from "dayjs";
import { Project } from "../../core/types";
import Progress from "../progress";
import styles from "./styles.module.scss";

interface Props {
  data: Project;
  index: number;
  color: string;
}

const Project: React.FC<Props> = ({ data, index, color }) => (
  <tr className={styles.project}>
    <td>{index}</td>
    <td>{data.assignee}</td>
    <td>{dayjs(data.dueDate).format("MMM DD, YYYY")}</td>
    <td>
      <Progress progress={data.progress} color={color} />
    </td>
  </tr>
);

export default Project;
