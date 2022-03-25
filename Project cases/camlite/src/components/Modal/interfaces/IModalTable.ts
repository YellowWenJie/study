import { Users } from '../../User/Users';

export interface IProps {
  tableHead: string[];
  tableBody: Array<Users>[];
  selectAgentId: (id: boolean, teamRole: Users) => void;
}
