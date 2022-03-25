import React, { useContext, useEffect, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotificationBanner } from 'govuk-react-jsx';
import UserStatsView, { UserInfo } from './UserStatsView';
import ItemStatusView, { ItemProps } from './ItemStatusView';
import { Role, User } from '../User';
import { Case } from '../Case';
import { Task } from '../Task';
import { CamEvent, caseFilter, taskFilter } from '../../helpers/filters';
import { getCases, getEvents, getTasks } from '../../services/API';
import { Context, CTX } from '../../context/setGlobalDataContext';
import { routes } from '../../helpers/routes';

const links = {
  position: `${routes.account}/position`,
};

const updateEvents = (users: Array<User>, setEvents: (events: any) => void) => {
  if (users.length) {
    const promises = users.map(user => {
      return getEvents({ usersId: user.id }).then(data => {
        const events = data.map((e: CamEvent) => ({
          type: e.type,
          usersId: e.usersId,
          date: new Date(e.date),
        }));
        return {
          id: user.id,
          events,
        };
      });
    });
    Promise.all(promises).then(data => {
      const result: any = data.reduce((acc: any, item) => {
        acc[item.id] = item.events;
        return acc;
      }, {});
      setEvents(result);
    });
  }
};

const updateCases = (params: any, ctx: any) => {
  if (params) {
    getCases(params).then(items => {
      ctx.setValue('cases', items);
    });
  } else {
    ctx.setValue('cases', []);
  }
};

const updateTasks = (params: any, ctx: any) => {
  if (params) {
    getTasks(params).then(items => {
      ctx.setValue('tasks', items);
    });
  } else {
    ctx.setValue('tasks', []);
  }
};

function itemStats(cases: Array<Case>, tasks: Array<Task>) {
  return {
    urgent: {
      cases: cases ? cases.filter(caseFilter.urgent).length : 0,
      tasks: tasks ? tasks.filter(taskFilter.urgent).length : 0,
    },
    outstanding: {
      cases: cases ? cases.filter(caseFilter.outstanding).length : 0,
      tasks: tasks ? tasks.filter(taskFilter.outstanding).length : 0,
    },
    new: {
      cases: cases ? cases.filter(caseFilter.new).length : 0,
      tasks: tasks ? tasks.filter(taskFilter.new).length : 0,
    },
    returned: {
      cases: cases.filter(caseFilter.returned).length,
      tasks: tasks.filter(taskFilter.returned).length,
    },
    ccto: {
      cases: cases.filter(caseFilter.closed).length,
      tasks: 0,
    },
    closedToday: {
      cases: cases.filter(caseFilter.closed).length,
      tasks: tasks.filter(taskFilter.closed).length,
    },
    total: {
      cases: cases.length,
      tasks: tasks.length,
    },
  };
}

/**
 * ChangePosition
 * @param props
 * @constructor
 */
function ChangePosition(props: { me: User; className: any }) {
  const { me, className } = props;
  return (
    <div className={`${className}`}>
      <h3 className={'govuk-heading-m'}>My position</h3>
      Current position: {me.role}
      <br />
      <Link to={links.position} aria-describedby="my-position">
        View or change your active position
      </Link>
    </div>
  );
}

export function DashNotify(props: {
  cases: number;
  tasks: number;
  queue: string;
}) {
  const { cases, tasks, queue } = props;
  const showNotify = cases || tasks;
  return showNotify ? (
    <NotificationBanner titleId="govuk-notification-banner-title">
      {cases && (
        <p className={'govuk-notification-banner__heading'}>
          You have {cases} new cases in {queue}.{' '}
          <Link to={'/cases/new/'}>View new cases.</Link>
        </p>
      )}
      {tasks && (
        <p className={'govuk-notification-banner__heading'}>
          You have {tasks} new tasks in {queue}.{' '}
          <Link to={'/tasks/new/'}>View new tasks.</Link>
        </p>
      )}
    </NotificationBanner>
  ) : (
    <div />
  );
}

/**
 * @param props
 * @constructor
 */

export function DashAgent(props: { me: User }) {
  const { me } = props;
  const users = [me]; // can only view my own

  const ctx = useContext(Context) as CTX;
  let cases = ctx.getValue('cases');
  let tasks = ctx.getValue('tasks');
  const pageValid = !!me;

  const [userEvents, setEvents] = useState();

  useEffect(() => updateEvents(users, setEvents), [users && users.length]);

  useEffect(() => me && updateCases({ usersId: me.id }, ctx), [pageValid]);

  useEffect(() => me && updateTasks({ usersId: me.id }, ctx), [pageValid]);

  const items: ItemProps = itemStats(cases, tasks);

  const stats: Array<UserInfo> = users.map(user => ({
    name: `${user.firstName} ${user.lastName}`,
    id: user.id,
    events: userEvents ? userEvents[user.id] : [],
  }));

  return (
    <>
      <h1 className="govuk-heading-xl">Dashboard</h1>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-full'}>
          <DashNotify
            cases={items.new.cases}
            tasks={items.new.tasks}
            queue={'your queue'}
          />
        </div>
        <div className={'govuk-grid-column-two-thirds'}>
          <h2 className={'govuk-heading-l'}>Items to review</h2>
          <p className={'govuk-body'}>
            You have {items.outstanding.cases + items.outstanding.tasks} items
            to review.
          </p>
          <ItemStatusView items={items} />
        </div>
        <div className={'govuk-grid-column-full govuk-!-margin-top-9'}>
          <h2 className="govuk-heading-l">My cases and tasks</h2>
          <UserStatsView userStats={stats} />
        </div>
      </div>
    </>
  );
}

export function DashLeader(props: { me: User; users: Array<User> }) {
  const { me, users } = props;
  const ctx = useContext(Context) as CTX;
  let cases = ctx.getValue('cases');
  let tasks = ctx.getValue('tasks');
  const pageValid = !!me;

  const [userEvents, setEvents] = useState();

  useEffect(() => {
    updateEvents(users, setEvents);
  }, [users && users.length]);
  useEffect(() => updateCases({ teamId: me.teamId }, ctx), [pageValid]);
  useEffect(() => updateTasks({ teamId: me.teamId }, ctx), [pageValid]);

  const items: ItemProps = itemStats(cases, tasks);

  const stats: Array<UserInfo> = users.map(user => ({
    name: `${user.firstName} ${user.lastName}`,
    id: user.id,
    events: userEvents ? userEvents[user.id] : [],
  }));

  return (
    <>
      <h1 className="govuk-heading-xl">Dashboard</h1>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-full'}>
          <DashNotify
            queue={'the Team queue'}
            cases={items.new.cases}
            tasks={items.new.tasks}
          />
        </div>
        <div className={'govuk-grid-column-two-thirds'}>
          <h2 className={'govuk-heading-l'}>Items to review</h2>
          <p className={'govuk-body'}>
            You have {items.outstanding.cases + items.outstanding.tasks} items
            to review.
          </p>
          <ItemStatusView items={items} isTeam={true} />
        </div>
        <ChangePosition className={'govuk-grid-column-one-third'} me={me} />
        <div className={'govuk-grid-column-full govuk-!-margin-top-9'}>
          <h2 className="govuk-heading-l">Agents' cases and tasks</h2>
          <UserStatsView userStats={stats} />
        </div>
      </div>
    </>
  );
}

export default memo(function Dashboard(props: { me: User; team: Array<User> }) {
  const { me, team } = props;

  if (me) {
    switch (me.role) {
      case Role.teamLeader:
        return <DashLeader me={me} users={team} />;
      default:
        return <DashAgent me={me} />;
    }
  }
  return <div />;
});
