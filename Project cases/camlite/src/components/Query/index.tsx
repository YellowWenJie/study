import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NewQuery from './NewQuery';
import DeleteQuery from './DeleteQuery';
import QueryConfirmation from './QueryConfirmation';
import SavedQueries from './SavedQueries';
import SavedQueriesButton from './SavedQueriesButton';
import { User } from '../User';

export {
  SavedQueries,
  NewQuery,
  QueryConfirmation,
  SavedQueriesButton,
  DeleteQuery,
};

export default function Query(props: { user: User }) {
  const { user } = props;
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/new`}>
        <NewQuery />
      </Route>
      <Route path={`${path}/confirm/:backUrl/:message`}>
        <QueryConfirmation />
      </Route>
      <Route path={`${path}/delete/:backUrl/:id/:name`}>
        <DeleteQuery />
      </Route>
      <Route path={`${path}`}>
        <SavedQueries user={user} />
      </Route>
    </Switch>
  );
}
