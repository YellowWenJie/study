import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { Breadcrumbs, SummaryList, Checkboxes } from 'govuk-react-jsx';
import DWPKeyDetails from '../DWP/KeyDetails';
import { getCases, getTasks } from '../../services/API';
import MOJSideNavigation, { MOJSideNavList } from '../MOJ/SideNavigation';
import { User } from './User';
import { routes } from '../../helpers/routes';

const link = {
  openCases: `${routes.cases}/open`,
  closedCases: `${routes.cases}/closed`,
  openTasks: `${routes.tasks}/open`,
  closedTasks: `${routes.tasks}closed`,
  personalDetails: ``,
  notes: `/notes`,
  schedule: `/schedule/`,
  myTeam: `${routes.team}`,
  employeeProfile: `${routes.user}`,
};

export function PersonalDetails(props: { user: User }) {
  const { user } = props;

  const summary1 = (
    <SummaryList
      rows={[
        {
          key: {
            children: 'Last Name',
          },
          value: {
            children: `${user.lastName}`,
          },
        },
        {
          key: {
            children: 'First Name',
          },
          value: {
            children: `${user.firstName}`,
          },
        },
        {
          key: {
            children: 'Title',
          },
          value: {
            children: `${user.title ?? '--'}`,
          },
        },
        {
          key: {
            children: 'Job Title',
          },
          value: {
            children: `${user.job ?? '--'}`,
          },
        },
        {
          key: {
            children: 'Work Phone',
          },
          value: {
            children: `${user.phone ? user.phone.work : '--'}`,
          },
        },
        {
          key: {
            children: 'Callback skill (Enquire only)',
          },
          value: {
            children: `${user.callback ?? '--'}`,
          },
        },
        {
          key: {
            children: 'User ID',
          },
          value: {
            children: `${user.id}`,
          },
        },
        {
          key: {
            children: 'Position',
          },
          value: {
            children: `${user.role}`,
          },
        },
        {
          key: {
            children: 'Email address',
          },
          value: {
            children: `${user.email ?? '--'}`,
          },
        },
      ]}
    />
  );

  return (
    <div className="govuk-!-margin-top-2">
      <h1 className="govuk-heading-l">Personal details</h1>
      {user && summary1}
    </div>
  );
}

export function Notes(props: { user: any }) {
  const { user } = props;
  return (
    <div className="govuk-!-margin-top-2">
      <h1 className="govuk-heading-l">Notes</h1>
      <p>Placeholder for {user.firstName}</p>
    </div>
  );
}

/**
 *
 * @param props
 * @constructor
 */
export function Schedule(props: { user?: any }) {
  const { user } = props;
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="govuk-!-margin-top-2">
      <h1 className="govuk-heading-l">Employee schedule</h1>
      <SummaryList
        rows={[
          {
            key: {
              children: 'Current status',
            },
            value: {
              children: user.status,
            },
          },
          {
            key: {
              children: 'Next status',
            },
            value: {
              children: '--',
            },
          },
          {
            key: {
              children: 'From date',
            },
            value: {
              children: '--',
            },
          },
          {
            key: {
              children: 'Until date',
            },
            value: {
              children: '--',
            },
          },
        ]}
      />
      <h1 className="govuk-heading-l">Work week schedule</h1>
      <SummaryList
        rows={daysOfWeek.map(d => ({
          key: {
            children: d,
          },
          value: {
            children: <Checkboxes items={[{ children: ' ', value: { d } }]} />,
          },
        }))}
      />
    </div>
  );
}

interface SideNav {
  text: string;
  to?: string;
  active?: boolean;
}

export default function Status(props: { user: User }) {
  const { user } = props;
  const { id } = useParams();
  const [cases, setCases] = useState([]);
  const [tasks, setTasks] = useState([]);

  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();

  const sideNav: Array<SideNav> = [
    {
      text: 'Personal details',
      to: `${url}${link.personalDetails}`,
      active: pathname === `${url}`,
    },
    {
      text: 'Notes',
      to: `${url}${link.notes}`,
      active: pathname === `${url}${link.notes}`,
    },
    {
      text: 'Schedule',
      to: `${url}${link.schedule}`,
      active: pathname === `${url}${link.schedule}`,
    },
  ];

  useEffect(() => {
    getCases({ usersId: id }).then(items => {
      setCases(items);
    });

    getTasks({ usersId: id }).then(items => {
      setTasks(items);
    });
  }, []);

  const caseNav: Array<SideNav> = [
    {
      text: `Open Cases (${
        cases.filter((item: any) => item.state === 'open').length
      })`,
      to: `${url}${link.openCases}`,
    },
    {
      text: `Closed Cases (${
        cases.filter((item: any) => item.state === 'closed').length
      })`,
      to: `${url}${link.closedCases}`,
    },
  ];

  const taskNav: Array<SideNav> = [
    {
      text: `Open Tasks (${
        tasks.filter((item: any) => item.state === 'open').length
      })`,
      to: `${url}${link.openTasks}`,
    },
    {
      text: `Closed Tasks (${
        tasks.filter((item: any) => item.state === 'closed').length
      })`,
      to: `${url}${link.closedTasks}`,
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'My Team',
            href: `${link.myTeam}`,
          },
          {
            children: 'Employee profile',
            href: `${link.employeeProfile}/${user.id}`,
          },
        ]}
      />
      <DWPKeyDetails
        top={[
          { name: 'Name', value: `${user.firstName} ${user.lastName}` },
          { name: 'Availability', type: 'status', value: `${user.status}` },
        ]}
        bottom={[
          { name: 'Staff Number:', value: `${user.id}` },
          { name: 'Position:', value: `${user.role}` },
        ]}
      />
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
          <aside className="app-related-items" role="complementary">
            <MOJSideNavigation>
              <MOJSideNavList label={'Employee'} items={sideNav} />
              <MOJSideNavList label={'Cases'} items={caseNav} />
              <MOJSideNavList label={'Tasks'} items={taskNav} />
            </MOJSideNavigation>
          </aside>
        </div>
        <div className="govuk-grid-column-two-thirds">
          <Switch>
            <Route path={`${path}/notes`}>
              <Notes user={user} />
            </Route>
            <Route path={`${path}/schedule`}>
              <Schedule user={user} />
            </Route>
            <Route path={`${path}`}>
              <PersonalDetails user={user} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}
