import React, { useState, useEffect, useContext } from 'react';
import './App.scss';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Template } from 'govuk-react-jsx';
import Dashboard from './components/Dashboard';
import MOJPrimaryNavigation from './components/MOJ/PrimaryNavigation';
import Account from './components/Account';
import Cases from './components/Cases';
import { CaseView } from './components/Case';
import { Role, Users, User } from './components/User';
import Tasks from './components/Tasks';
import { TaskView } from './components/Task';
import { getUsers } from './services/API';
import { Context, CTX } from './context/setGlobalDataContext';
import Teams from './components/Team';
import Customers, { ACustomer } from './components/Customer';
import MOJButtonMenu from './components/MOJ/ButtonMenu';
import Query from './components/Query';
import Note from './components/Note/Note';
import AddNote from './components/Note/AddNote/AddNote';
import { getMe, getToken, setToken } from './services/token';
import { Login } from './components/Login';
import { routes } from './helpers/routes';

const navItemsAgent = [
  { text: 'Dashboard', href: '/', active: true },
  { text: 'Cases', href: routes.caseSummary, active: undefined },
  { text: 'Tasks', href: routes.taskSummary, active: undefined },
  { text: 'Customers', href: routes.customers, active: undefined },
];

const navItemsLeader = [
  { text: 'Dashboard', href: '/', active: true },
  { text: 'My team', href: routes.team, active: undefined },
  { text: 'Cases', href: routes.caseSummary, active: undefined },
  { text: 'Tasks', href: routes.taskSummary, active: undefined },
  { text: 'Customers', href: routes.customers, active: undefined },
];

function AuthRoutes(me: User, team: Array<User>) {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard me={me} team={team} />
      </Route>
      {me.role === Role.teamLeader && (
        <Route path="/team">
          <Teams user={me} team={team} />
        </Route>
      )}
      <Route path={routes.cases}>
        <Cases user={me} team={team} />
      </Route>
      <Route path={`${routes.case}/:id`}>
        <CaseView user={me} />
      </Route>
      <Route path={`${routes.tasks}`}>
        <Tasks user={me} team={team} />
      </Route>
      <Route path={`${routes.task}/:id`}>
        <TaskView user={me} />
      </Route>
      <Route path={`${routes.customer}/:cid?`}>
        <ACustomer user={me} team={team} />
      </Route>
      <Route path={routes.customers}>
        <Customers user={me} team={team} />
      </Route>
      <Route path={routes.account}>
        <Account user={me} />
      </Route>
      <Route path={`${routes.user}/:id`}>
        <Users user={me} />
      </Route>
      <Route path="/notes/:type/:id">
        <Note />
      </Route>
      <Route path="/add-note/:type/:id">
        <AddNote />
      </Route>
      <Route path="/query">
        <Query user={me} />
      </Route>
    </Switch>
  );
}

function App() {
  const token = getToken();

  const ctx = useContext(Context) as CTX;
  const users = ctx.getValue('users');
  const history = useHistory();

  useEffect(() => {
    getUsers(null)
      .then(response => {
        ctx.setValue('users', response);
      })
      .catch(error => console.log(error));
  }, []);

  function logout() {
    setToken('');
    history.push('/');
    window.location.reload();
  }

  const me: User = getMe();

  const team: Array<User> =
    me && users.length ? users.filter((u: User) => u.teamId === me.teamId) : [];

  const header = {
    productName: 'DWP CAMLite',
    navigation: me && [
      {
        children: 'My account',
        to: routes.account,
      },
      {
        children: `Current position: ${me.role}`,
        to: `${routes.account}/position`,
      },
      {
        children: (
          <span
            onClick={() => {
              logout();
            }}
          >
            Sign out
          </span>
        ),
      },
    ],
    navigationClassName: 'moj-header__navigation',
  };

  let navItemsMenu: Array<any> = [];
  if (me) {
    switch (me.role) {
      case Role.teamLeader:
        navItemsMenu = navItemsLeader;
        break;
      default:
        navItemsMenu = navItemsAgent;
    }
  }

  const [navItems, setNavItems] = useState(navItemsMenu);

  const changeActive = (index: number): void => {
    navItems.forEach(navItem => {
      navItem.active = undefined;
    });
    navItems[index].active = true;
    setNavItems([...navItems]);
  };

  const navbar = (
    <MOJPrimaryNavigation
      items={navItems}
      changeActive={changeActive}
    ></MOJPrimaryNavigation>
  );

  return (
    <Template header={header} beforeContent={navbar}>
      {token ? AuthRoutes(me, team) : <Login setToken={setToken} />}
    </Template>
  );
}

export default App;
