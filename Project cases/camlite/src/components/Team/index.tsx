import { Switch, useRouteMatch, Route } from 'react-router-dom';
import TeamListView from './TeamListView';
import TeamSearch from './TeamSearch';
import { routes } from '../../helpers/routes';

export { TeamListView, TeamSearch };

export default function Teams(props: any) {
  const { user } = props;
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/search`}>
        <TeamSearch target={routes.team} user={user} />
      </Route>
      <Route path={`${path}`}>
        <TeamListView user={user} teamId={user.teamId} />
      </Route>
    </Switch>
  );
}
