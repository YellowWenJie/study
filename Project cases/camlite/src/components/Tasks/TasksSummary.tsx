import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BackLink } from 'govuk-react-jsx';
import { Task } from '../Task';
import { User } from '../User';
import { taskFilter as filter } from '../../helpers/filters';
import { SavedQueriesButton } from '../Query';
import { getTasks } from '../../services/API';

const link = {
  back: '/',
  outstanding: '/tasks/outstanding',
  assigned: '/tasks/assigned',
  unassigned: '/tasks/unassigned',
  new: '/tasks/new',
  open: '/tasks/open',
  closed: '/tasks/closed',
  broughtForward: '/tasks/brought-forward',
  all: '/tasks/all',
};

export default function TasksSummary(props: { user: User; team: Array<User> }) {
  const { user, team } = props;

  const teamIds = team.filter(u => u.teamId === user.teamId).map(u => u.id);
  const isMine = (item: Task) => item.usersId === props.user.id;
  const isTeam = (item: Task) => teamIds.includes(item.usersId);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks({ teamId: user.teamId }).then(items => {
      setTasks(items);
    });
  }, []);

  // TODO: work out selection criteria for categories
  const summary = {
    all: tasks,
    my: tasks.filter(isMine),
    outstanding: tasks.filter(filter.outstanding),
    new: tasks.filter(filter.new),
    closed: tasks.filter(filter.closed),
    agents: tasks.filter(isTeam),
    teams: tasks.filter(isTeam),
    broughtForward: tasks.filter(filter.broughtForward),
  };

  return (
    <div className="govuk-width-container ">
      <BackLink href={link.back}>Back</BackLink>
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-column-full govuk-!-padding-left-0">
          <div
            className={
              'govuk-grid-column-three-quarters govuk-!-padding-left-0'
            }
          >
            <h1 className="govuk-heading-l">Task queues</h1>
            <p className="govuk-body govuk-!-margin-bottom-7">
              Select a queue to view tasks.
            </p>
          </div>
          <div className={'govuk-grid-column-one-quarters'}>
            <SavedQueriesButton user={user} title={'Task'} />
          </div>
        </div>
        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
        <h2 className="govuk-heading-m">My tasks: {summary.my.length} tasks</h2>
        <ul className="govuk-list">
          <li>
            <Link className="govuk-link" to={`${link.outstanding}/${user.id}`}>
              Outstanding tasks ({summary.my.filter(filter.outstanding).length})
            </Link>
          </li>
          <li>
            <Link className="govuk-link" to={`${link.closed}/${user.id}`}>
              Closed tasks ({summary.my.filter(filter.closed).length})
            </Link>
          </li>
        </ul>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
        <h2 className="govuk-heading-m">
          My team's queues: {summary.teams.length} tasks
        </h2>
        <ul className="govuk-list">
          <li>
            <Link className="govuk-link" to={link.all}>
              All tasks ({summary.teams.length})
            </Link>
          </li>
          <li>
            <Link className="govuk-link" to={link.outstanding}>
              Tasks returned by agents ({summary.teams.length})
            </Link>
          </li>
          <br />

          <li>
            <Link className="govuk-link" to={link.outstanding}>
              Outstanding tasks (
              {summary.teams.filter(filter.outstanding).length})
            </Link>
          </li>
          <ul className="govuk-list govuk-list--bullet">
            <li>
              <Link className="govuk-link" to={link.new}>
                New tasks({summary.teams.filter(filter.new).length})
              </Link>
            </li>
            <li>
              <Link className="govuk-link" to={link.outstanding}>
                Unassigned tasks (
                {summary.teams.filter(filter.unassigned).length})
              </Link>
            </li>
            <li>
              <Link className="govuk-link" to={link.assigned}>
                Assigned tasks (
                {
                  summary.teams
                    .filter(filter.outstanding)
                    .filter(filter.assigned).length
                }
                )
              </Link>
            </li>
          </ul>

          <li>
            <Link className="govuk-link" to={link.broughtForward}>
              Total brought forward ({summary.broughtForward.length})
            </Link>
          </li>
          <ul className="govuk-list govuk-list--bullet">
            <li>
              <Link className="govuk-link" to={link.broughtForward}>
                Claimed brought forward ({summary.broughtForward.length})
              </Link>
            </li>
            <li>
              <Link className="govuk-link" to={link.broughtForward}>
                Returned brought forward ({summary.broughtForward.length})
              </Link>
            </li>
            <li>
              <Link className="govuk-link" to={link.broughtForward}>
                Chased brought forward ({summary.broughtForward.length})
              </Link>
            </li>
          </ul>

          <li>
            <Link className="govuk-link" to={link.closed}>
              Closed tasks ({summary.teams.filter(filter.closed).length})
            </Link>
          </li>
        </ul>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
        <h2 className="govuk-heading-m">
          Agents' queues: {summary.agents.length} tasks
        </h2>
        <ul className="govuk-list">
          {team.map(agent => {
            const open = summary.teams.filter(
              (item: Task) => item.usersId === agent.id
            ).length;
            const bf = '--';
            return (
              <li key={agent.id}>
                <Link className="govuk-link" to={`${link.all}/${agent.id}`}>
                  {agent.firstName} {agent.lastName} ({open} open, {bf} BF)
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
