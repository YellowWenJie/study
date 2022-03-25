import { Case } from '../../Case';
import { Task } from '../../Task';

export interface IProps {
  tableHead: string[];
  tableBody: any;
  selectOption: object;
  showHandle: (closed: boolean) => void;
  show?: boolean;
  selectedTasks: Task[] | Case[];
  updateType: string;
}
