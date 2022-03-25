import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Case } from '../Case';
import { User } from '../User';
import { BackLink } from 'govuk-react-jsx';
import { caseFilter as filter } from '../../helpers/filters';
import { getCases } from '../../services/API';
import { SavedQueriesButton } from '../Query';
import { Context, CTX } from '../../context/setGlobalDataContext';

const link = {
  back: '/',
  outstanding: '/cases/outstanding',
  assigned: '/cases/assigned',
  unassigned: '/cases/unassigned',
  new: '/cases/new',
  open: '/cases/open',
  closed: '/cases/closed',
  broughtForward: '/cases/brought-forward',
  all: '/cases/all',
};

export default function CaseSummary(props: { user: User; team: Array<User> }) {
  const { user, team } = props;

  const teamIds = team.filter(u => u.teamId === user.teamId).map(u => u.id);
  const isMine = (item: Case) => item.usersId === props.user.id;
  const isTeam = (item: Case) => teamIds.includes(item.usersId);

  const ctx = useContext(Context) as CTX;
  const cases = ctx.getValue('cases');

  useEffect(() => {
    getCases({ teamId: user.teamId }).then(items => {
      ctx.setValue('cases', items);
    });
  }, []);

  // TODO: work out selection criteria for categories
  const summary = {
    all: cases,
    my: cases.filter(isMine),
    outstanding: cases.filter(filter.outstanding),
    closed: cases.filter(filter.closed),
    agents: cases.filter(isTeam),
    teams: cases.filter(isTeam),
    broughtForward: cases.filter(filter.broughtForward),
  };

  return (
    <div className="govuk-width-container ">
      <BackLink to={link.back}>Back</BackLink>
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-column-full govuk-!-padding-left-0">
          <div
            className={
              'govuk-grid-column-three-quarters govuk-!-padding-left-0'
            }
          >
            <h1 className="govuk-heading-l">Case queues</h1>
            <p className="govuk-body govuk-!-margin-bottom-7">
              Select a queue to view cases.
            </p>
          </div>
          <div className={'govuk-grid-column-one-quarters'}>
            <SavedQueriesButton user={user} title={'Case'} />
          </div>
        </div>
        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
        <h2 className="govuk-heading-m">My cases: {summary.my.length} cases</h2>
        <ul className="govuk-list">
          <li>
            <Link className="govuk-link" to={`${link.outstanding}/${user.id}`}>
              Outstanding cases ({summary.my.filter(filter.outstanding).length})
            </Link>
          </li>
          <li>
            <Link className="govuk-link" to={`${link.closed}/${user.id}`}>
              Closed cases ({summary.my.filter(filter.closed).length})
            </Link>
          </li>
        </ul>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
        <h2 className="govuk-heading-m">
          My team's queues: {summary.teams.length} cases
        </h2>
        <ul className="govuk-list">
          <li>
            <Link className="govuk-link" to={link.all}>
              All cases ({summary.teams.length})
            </Link>
          </li>
          <li>
            <Link className="govuk-link" to={link.outstanding}>
              Cases returned by agents ({summary.teams.length})
            </Link>
          </li>
          <br />

          <li>
            <Link className="govuk-link" to={link.outstanding}>
              Outstanding cases (
              {summary.teams.filter(filter.outstanding).length})
            </Link>
          </li>
          <ul className="govuk-list govuk-list--bullet">
            <li>
              <Link className="govuk-link" to={link.new}>
                New cases({summary.teams.filter(filter.new).length})
              </Link>
            </li>
            <li>
              <Link className="govuk-link" to={link.unassigned}>
                Unassigned cases (
                {summary.teams.filter(filter.unassigned).length})
              </Link>
            </li>
            <li>
              <Link className="govuk-link" to={link.assigned}>
                Assigned cases (
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
              Closed cases ({summary.teams.filter(filter.closed).length})
            </Link>
          </li>
        </ul>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
        <h2 className="govuk-heading-m">
          Agents' queues: {summary.agents.length} cases
        </h2>
        <ul className="govuk-list">
          {team.map(agent => {
            const open = summary.teams.filter(
              (item: Case) => item.usersId === agent.id
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
