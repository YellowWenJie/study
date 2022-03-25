import { useState, useEffect } from 'react';
import { Breadcrumbs } from 'govuk-react-jsx';
import MOJSideNavigation, { MOJSideNavList } from '../MOJ/SideNavigation';
import {
  getCaseQuery,
  getTaskQuery,
  getEmployeeQuery,
  getCustomerQuery,
} from '../../services/API';
import QueriesView from './QueriesView';
import { User } from '../User';

import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

const link = {
  caseQueries: 'case',
  taskQueries: 'task',
  employeeQueries: 'employee',
  customerQueries: 'customer',
  caseSearch: '/cases/search',
  taskSearch: '/tasks/search',
  customerSearch: '/customers/search',
  employeeSearch: '/team/search',
  query: '/query',
};

export default function SavedQueries(props: { user: User }) {
  const { user } = props;
  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  const [queries, setQueries] = useState();

  const navItems = [
    {
      label: 'Case queries',
      text: 'Case queries',
      to: `${url}/${link.caseQueries}`,
      active: pathname === `${url}${link.caseQueries}`,
      newQueryUrl: link.caseSearch,
    },
    {
      label: 'Task queries',
      text: 'Task queries',
      to: `${url}/${link.taskQueries}`,
      active: pathname === `${url}/${link.taskQueries}`,
      newQueryUrl: link.taskSearch,
    },
    {
      label: 'Customer queries',
      text: 'Customer queries',
      to: `${url}/${link.customerQueries}`,
      active: pathname === `${url}/${link.customerQueries}`,
      newQueryUrl: link.customerSearch,
    },
    {
      label: 'Employee queries',
      text: 'Employee queries',
      to: `${url}/${link.employeeQueries}`,
      active: pathname === `${url}/${link.employeeQueries}`,
      newQueryUrl: link.employeeSearch,
    },
  ];

  const queriesViewData = {
    title: navItems.find(item => item.active)?.text || 'Saved queries',
    url: navItems.find(item => item.active)?.to || link.query,
    newQueryUrl: navItems.find(item => item.active)?.newQueryUrl || link.query,
  };

  useEffect(() => {
    switch (pathname.split('/')[2]) {
      case `${link.taskQueries}`:
        getTaskQuery({ usersId: user.id }).then((items: any) => {
          setQueries(items);
        });
        break;
      case `${link.employeeQueries}`:
        getEmployeeQuery({ usersId: user.id }).then((items: any) => {
          setQueries(items);
        });
        break;
      case `${link.customerQueries}`:
        getCustomerQuery({ usersId: user.id }).then((items: any) => {
          setQueries(items);
        });
        break;
      case `${link.caseQueries}`: // fall through
      default:
        getCaseQuery({ usersId: user.id }).then((items: any) => {
          setQueries(items);
        });
        break;
    }
  }, [pathname]);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'Query',
            href: link.query,
          },
          {
            children: queriesViewData.title,
            href: '',
          },
        ]}
      />
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <aside className="app-related-items" role="complementary">
              <MOJSideNavigation>
                <MOJSideNavList label={'Saved Queries'} items={navItems} />
              </MOJSideNavigation>
            </aside>
          </div>
          {queries && (
            <div className="govuk-grid-column-two-thirds">
              <Switch>
                <Route path={`${queriesViewData.url}`}>
                  <QueriesView
                    title={queriesViewData.title}
                    newQueryUrl={queriesViewData.newQueryUrl}
                    queries={queries}
                  />
                </Route>
              </Switch>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
