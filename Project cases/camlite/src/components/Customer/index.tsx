import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { Customer } from './Customer';
import CustomerListView from './CustomerListView';
import CustomerView from './CustomerView';
import CustomerSearch from './CustomerSearch';
import { CustomerDetails } from './CustomerDetails';
import { NewTask } from '../Task';
import { NewCase } from '../Case';
import { routes } from '../../helpers/routes';
import { CaseList } from '../Cases';
import { TaskList } from '../Tasks';
import { getCases, getCustomer, getTasks } from '../../services/API';

function ACustomer(props: any) {
  const { user, team } = props;
  const { cid } = useParams();
  const { path } = useRouteMatch();

  const [customer, setCustomer] = useState();
  const [cases, setCases] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const queryFilter = {
      customersId: cid,
    };
    getCases(queryFilter).then((items: any) => {
      setCases(items);
    });
    getTasks(queryFilter).then((items: any) => {
      setTasks(items);
    });
    getCustomer(cid).then((item: any) => {
      setCustomer(item);
    });
  }, [cid]);

  return (
    <Switch>
      <Route path={`${path}/case/new`}>
        <NewCase user={user} />
      </Route>
      <Route path={`${path}/task/new`}>
        <NewTask user={user} />
      </Route>
      <Route path={`${path}/cases`}>
        <div className={'govuk-grid-row'}>
          <div className={'govuk-grid-column-full'}>
            {customer && <CustomerDetails {...customer} />}
          </div>
        </div>
        <div className={'govuk-grid-row govuk-!-margin-top-6'}>
          <div className={'govuk-grid-column-full'}>
            <CaseList user={user} cases={cases} title={'Customer cases'} />
          </div>
        </div>
      </Route>
      <Route path={`${path}/tasks`}>
        <div className={'govuk-grid-row'}>
          <div className={'govuk-grid-column-full'}>
            {customer && <CustomerDetails {...customer} />}
          </div>
        </div>
        <div className={'govuk-grid-row govuk-!-margin-top-6'}>
          <div className={'govuk-grid-column-full'}>
            <TaskList user={user} tasks={tasks} title={'Customer tasks'} />
          </div>
        </div>
      </Route>
      <Route path={`${path}`}>
        <CustomerView
          user={user}
          team={team}
          customer={customer}
          cases={cases}
          tasks={tasks}
        />
      </Route>
    </Switch>
  );
}

function Customers(props: any) {
  const { user, team } = props;
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/search`}>
        <CustomerSearch target={routes.customers} user={user} />
      </Route>
      <Route path={`${path}/case/new`}>
        <NewCase user={user} />
      </Route>
      <Route path={`${path}/task/new`}>
        <NewTask user={user} />
      </Route>
      <Route path={`${path}`}>
        <CustomerListView user={user} team={team} />
      </Route>
    </Switch>
  );
}

export {
  Customers as default,
  ACustomer,
  CustomerListView,
  CustomerView,
  CustomerSearch,
  CustomerDetails,
};

export type { Customer };
