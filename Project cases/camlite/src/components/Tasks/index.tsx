import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TaskSearch from './TaskSearch';
import TaskSummary from './TasksSummary';
import TaskListView, { TaskList } from './TaskListView';
import AssigningCases from '../AssigningCases/AssigningCases';
import ChangeTaskOwner from './ChangeTaskOwner';
import { routes } from '../../helpers/routes';

export { TaskListView, TaskList, ChangeTaskOwner };

export default function Tasks(props: any) {
  const { user, team } = props;
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/change-task-owner`}>
        <ChangeTaskOwner user={user} />
      </Route>
      <Route exact path={`${path}/summary`}>
        <TaskSummary user={user} team={team} />
      </Route>
      <Route path={`${path}/assigning-tasks`}>
        <AssigningCases
          title="New tasks to assign"
          subTitle="Which queue do you want to assign these tasks to?"
          choices={[
            {
              name: 'My tasks',
              link: `${path}`,
            },
            {
              name: "Agent's queue",
              link: `${path}/assigning-tasks-to-agent`,
            },
            {
              name: "Other team's queues",
              link: `${path}/assigning-tasks-to-other-team`,
            },
            { name: 'or', link: 'or' },
            {
              name: 'Add queue',
              link: `${path}/assigning-tasks-to-add-queue`,
            },
          ]}
        />
      </Route>
      <Route path={`${path}/assigning-tasks-to-agent`}>
        <AssigningCases
          title="New cases to assign"
          subTitle="Which agent do you want to assign these tasks to?"
          choices={team.map((item: any) => ({
            name: item.firstName + ' ' + item.lastName,
            link: routes.tasks,
            usersId: item.id,
          }))}
        />
      </Route>
      <Route path={`${path}/assigning-tasks-to-other-team`}>
        <AssigningCases
          title="New tasks to assign"
          subTitle="Which other team do you want to assign these tasks to?"
          choices={[
            { name: 'Team 1', link: routes.tasks },
            { name: 'Team 2', link: routes.tasks },
            { name: 'Team 3', link: routes.tasks },
          ]}
        />
      </Route>
      <Route path={`${path}/assigning-tasks-to-add-queue`}>
        <AssigningCases
          title="New tasks to assign"
          subTitle="Add a new queue"
          choices={[
            { name: '1', link: routes.tasks },
            { name: '1', link: routes.tasks },
            { name: '1', link: routes.tasks },
          ]}
        />
      </Route>
      <Route path={`${path}/search`}>
        <TaskSearch user={user} />
      </Route>
      <Route path={`${path}/:type?/:id?`}>
        <TaskListView user={user} team={team} />
      </Route>
    </Switch>
  );
}
