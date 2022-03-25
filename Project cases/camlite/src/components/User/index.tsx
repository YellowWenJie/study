import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import Status from './UserView';
import { User, Role } from './User';
import { getUser } from '../../services/API';
import UserCaseList from './UserCaseList';
import UserTaskList from './UserTaskList';

function UserCases(props: { user: User; title?: string }) {
  const { user, title } = props;
  const { mode } = useParams();
  let params;
  switch (mode) {
    case 'open':
      params = { title: title ?? 'Open cases', filter: { state_ne: 'closed' } };
      break;
    case 'closed':
      params = { title: title ?? 'Closed cases', filter: { state: 'closed' } };
      break;
    default:
      params = { title: title ?? 'Cases', filter: {} };
      break;
  }
  return <UserCaseList me={user} {...params} />;
}

function UserTasks(props: { user: User; title?: string }) {
  const { user, title } = props;
  const { mode } = useParams();
  let params;
  switch (mode) {
    case 'open':
      params = {
        title: title ?? 'Open tasks',
        filter: { status_ne: 'closed' },
      };
      break;
    case 'closed':
      params = { title: title ?? 'Closed tasks', filter: { status: 'closed' } };
      break;
    default:
      params = { title: title ?? 'Tasks', filter: {} };
      break;
  }
  return <UserTaskList me={user} {...params} />;
}

export default function Users(props: { user: User; title?: string }) {
  const { user, title } = props;
  const { path } = useRouteMatch();

  let { id } = useParams();

  const [agent, setAgent] = useState();

  useEffect(() => {
    getUser(id).then((item: any) => {
      setAgent(item);
    });
  }, [id]);

  return (
    <Switch>
      <Route path={`${path}/cases/:mode`}>
        <UserCases user={user} title={title} />
      </Route>
      <Route path={`${path}/tasks/:mode`}>
        <UserTasks user={user} title={title} />
      </Route>
      <Route path={`${path}`}>{agent && <Status user={agent} />}</Route>
    </Switch>
  );
}

export type { User };

export { Status, Users, Role };
