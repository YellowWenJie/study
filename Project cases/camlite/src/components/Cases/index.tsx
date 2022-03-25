import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaseSummary from './CaseSummary';
import CaseListView, { CaseList } from './CaseListView';
import AssigningCases from '../AssigningCases/AssigningCases';
import CaseSearch from './CaseSearch';
import ChangeCaseOwner from './ChangeCaseOwner';
import { routes } from '../../helpers/routes';

export { CaseListView, CaseList, CaseSummary, ChangeCaseOwner };

export default function Cases(props: any) {
  const { user, team } = props;
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/change-case-owner`}>
        <ChangeCaseOwner user={user} />
      </Route>
      <Route exact path={`${path}/summary`}>
        <CaseSummary user={user} team={team} />
      </Route>
      <Route path={`${path}/assigning-cases`}>
        <AssigningCases
          title="New cases to assign"
          subTitle="Which queue do you want to assign these cases to?"
          choices={[
            {
              name: 'My cases',
              link: routes.cases,
            },
            {
              name: "Agent's queue",
              link: `${routes.cases}/assigning-cases-to-agent`,
            },
            {
              name: "Other team's queues",
              link: `${routes.cases}/assigning-cases-to-other-team`,
            },
            { name: 'or', link: 'or' },
            {
              name: 'Add queue',
              link: `${routes.cases}/assigning-cases-to-add-queue`,
            },
          ]}
        />
      </Route>
      <Route path={`${path}/assigning-cases-to-agent`}>
        <AssigningCases
          title="New cases to assign"
          subTitle="Which agent do you want to assign these cases to?"
          choices={team.map((item: any) => ({
            name: item.firstName + ' ' + item.lastName,
            link: routes.cases,
            usersId: item.id,
          }))}
        />
      </Route>
      <Route path={`${path}/assigning-cases-to-other-team`}>
        <AssigningCases
          title="New cases to assign"
          subTitle="Which other team do you want to assign these cases to?"
          choices={[
            { name: 'Team 1', link: routes.cases },
            { name: 'Team 2', link: routes.cases },
            { name: 'Team 3', link: routes.cases },
          ]}
        />
      </Route>
      <Route path={`${path}/assigning-cases-to-add-queue`}>
        <AssigningCases
          title="New cases to assign"
          subTitle="Add a new queue"
          choices={[
            { name: '1', link: routes.cases },
            { name: '1', link: routes.cases },
            { name: '1', link: routes.cases },
          ]}
        />
      </Route>
      <Route path={`${path}/search`}>
        <CaseSearch user={user} />
      </Route>
      <Route path={`${path}/:type?/:id?`}>
        <CaseListView user={user} team={team} />
      </Route>
    </Switch>
  );
}
