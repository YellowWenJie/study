import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Overview from './Account';
import Position from './Position';
import { Profile } from './Profile';

export { Position, Overview };

export default function Account(props: any) {
  const { user, team } = props;
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/profile`}>
        <Profile item={user} />
      </Route>
      <Route path={`${path}/position`}>
        <Position />
      </Route>
      <Route path={`${path}`}>
        <Overview />
      </Route>
    </Switch>
  );
}
