import React from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { Breadcrumbs } from 'govuk-react-jsx';
import { User } from '../User';
import MOJSideNavigation, { MOJSideNavList } from '../MOJ/SideNavigation';
import {
  CustomerDetails,
  Benefits,
  ContactDetails,
  MainDetails,
  Representatives,
} from './CustomerDetails';
import { Customer } from './Customer';
import { routes } from '../../helpers/routes';
import { Task } from '../Task';
import { Case } from '../Case';

const link = {
  caseCreate: `${routes.case}/new`,
  taskCreate: `${routes.task}/new`,
  main: ``,
  contact: `contact`,
  represent: `representatives`,
  benefit: `benefits`,
};

export default function CustomerView(props: {
  user: User;
  team: Array<User>;
  customer?: Customer;
  cases?: Array<Case>;
  tasks?: Array<Task>;
}) {
  const { pathname } = useLocation();
  const { path, url } = useRouteMatch();
  const { user, customer, cases, tasks } = props;

  const changeActive = () => {};

  if (!customer) {
    return <></>;
  }

  const page = {
    title: 'Customers',
    link: routes.customers,
  };

  const navItems = [
    {
      label: 'Customer',
      text: 'Customer details',
      to: `${url}`,
      active: pathname === `${url}`,
    },
    {
      label: 'Customer',
      text: 'Contact details',
      to: `${url}/${link.contact}`,
      active: pathname === `${url}/${link.contact}`,
    },
    {
      label: 'Customer',
      text: 'Representatives',
      to: `${url}/${link.represent}`,
      active: pathname === `${url}/${link.represent}`,
    },
    {
      label: 'Customer',
      text: 'Benefits',
      to: `${url}/${link.benefit}`,
      active: pathname === `${url}/${link.benefit}`,
    },
    {
      label: 'Case',
      text: cases ? `Customer cases (${cases.length})` : 'Customer cases',
      to: `${routes.customer}/${customer.id}/cases`,
    },
    {
      label: 'Case',
      text: 'Create new case',
      to: `${url}${link.caseCreate}`,
    },
    {
      label: 'Task',
      text: tasks ? `Customer tasks (${tasks.length})` : 'Customer tasks',
      to: `${routes.customer}/${customer.id}/tasks`,
    },
    {
      label: 'Task',
      text: 'Create new task',
      to: `${url}${link.taskCreate}`,
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'Cases',
            href: routes.cases,
          },
          {
            children: page.title,
            href: page.link,
          },
        ]}
      />
      {customer && CustomerDetails(customer)}
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <aside className="app-related-items" role="complementary">
              <MOJSideNavigation>
                <MOJSideNavList
                  label={'Customer'}
                  changeActive={changeActive}
                  items={navItems.filter(item => item.label === 'Customer')}
                />
                <MOJSideNavList
                  label={'Cases'}
                  changeActive={changeActive}
                  items={navItems.filter(item => item.label === 'Case')}
                />
                <MOJSideNavList
                  label={'Tasks'}
                  changeActive={changeActive}
                  items={navItems.filter(item => item.label === 'Task')}
                />
              </MOJSideNavigation>
            </aside>
          </div>
          <div className="govuk-grid-column-two-thirds">
            {customer && (
              <Switch>
                <Route path={`${path}/${link.contact}`}>
                  <ContactDetails customer={customer} />
                </Route>
                <Route path={`${path}/${link.represent}`}>
                  <Representatives customer={customer} />
                </Route>
                <Route path={`${path}/${link.benefit}`}>
                  <Benefits customer={customer} />
                </Route>
                <Route path={`${path}`}>
                  <MainDetails customer={customer} />
                </Route>
              </Switch>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
