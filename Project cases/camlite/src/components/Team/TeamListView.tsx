import React, { memo, useEffect, useState } from 'react';
import { SavedQueriesButton } from '../Query';
import { BackLink, Button, Tag } from 'govuk-react-jsx';
import { User } from '../User';
import MOJSortableTable from '../MOJ/SortableTable';
import { getUsers } from '../../services/API';
import { useSearchParams } from '../../helpers/search';
import { teamColor } from '../../helpers/filters';
import { routes } from '../../helpers/routes';

const link = {
  case: `${routes.case}/`,
  task: `${routes.task}/`,
  teams: `${routes.team}`,
  all: `${routes.tasks}/all`,
  outstanding: `${routes.tasks}/outstanding`,
  open: `${routes.tasks}/open`,
  closed: `${routes.tasks}/closed`,
};

const teamCols = {
  lastName: { text: 'Last Name' },
  firstName: { text: 'First Name' },
  staffNo: { text: 'Staff Number' },
  sensitive: { text: 'Nationally Sensitive' },
  id: { text: 'User ID', href: '/user/' },
  status: {
    text: 'Status',
    translate: (s: string) => (
      <Tag className={`govuk-tag--${teamColor(s)}`}>{s}</Tag>
    ),
  },
  organisation: { text: 'Organisation' },
  callbackSkill: { text: 'Callback skill (enquire only)' },
};

export default memo(function TeamListView(props: {
  user: User;
  teamId: string;
}) {
  // const { id } = useParams();
  const { user, teamId } = props;

  const [team, setTeam] = useState([]);

  const searchParams = useSearchParams();
  // @ts-ignore
  const entries = [...searchParams];
  const queryFilter = Object.assign(Object.fromEntries(entries), { teamId });

  useEffect(() => {
    getUsers(queryFilter).then(items => {
      setTeam(items);
    });
  }, [teamId]);

  const page = {
    title: 'My Team',
    link: `${link.teams}`,
  };

  const rowOrder = [
    'lastName',
    'firstName',
    'staffNo',
    'sensitive',
    'status',
    'id',
    'callbackSkill',
    'organisation',
  ];

  const theTeam: any = team;

  return (
    <>
      <BackLink>Back</BackLink>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-full'}>
          <div style={{ float: 'right' }}>
            <SavedQueriesButton user={user} title={'Employee'} />
            <Button href={`${link.teams}/search`}>Search team</Button>
          </div>
          <h1 className="govuk-heading-l">{page.title}</h1>
          <p className="govuk-body govuk-!-margin-bottom-7">
            Click the heading to sort employees. Click the employee name to view
            their personal information and schedule.
          </p>
        </div>
      </div>

      <MOJSortableTable
        title={page.title}
        order={rowOrder}
        items={theTeam}
        headCols={teamCols}
      />
    </>
  );
});
