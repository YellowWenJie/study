import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DWPKeyDetails from '../DWP/KeyDetails';
import { Breadcrumbs } from 'govuk-react-jsx';
import { getTasks, getUser } from '../../services/API';
import MOJSortableTable from '../MOJ/SortableTable';
import MOJButtonMenu from '../MOJ/ButtonMenu';
import { taskCols, taskColumnOrder } from '../../helpers/filters';
import SavedQueries from '../Query/SavedQueriesButton';
import exportToExcel from '../../helpers/exportToExcel';
import { User } from './User';

const link = {
  searchCases: '/cases/search',
  myTeam: '/team',
  employeeProfile: '/user/',
};

const initialUser = {
  id: 0,
  firstName: '',
  lastName: '',
  job: '',
  email: '',
  teamId: '',
  role: '',
  status: '',
  sensitive: '',
  staffNo: '',
  callbackSkill: '',
  organisation: '',
  phone: {
    home: '',
    mobile: '',
    work: '',
  },
};

export default function UserTaskList(props: {
  me: User;
  title: string;
  filter: any;
}) {
  const { me, title, filter } = props;
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(initialUser);

  let queryFilter = { usersId: id, state: filter.status };

  useEffect(() => {
    getTasks(queryFilter).then(allItems => {
      setItems(allItems);
    });
    getUser(id).then(item => {
      setUser(item);
    });
  }, []);

  const menuButtons = [
    {
      text: 'Search tasks',
      classes: 'govuk-button--secondary',
      to: link.searchCases,
    },
    {
      text: 'Export to excel',
      classes: 'govuk-button--secondary',
      to: '',
      action: (e: Event) =>
        exportToExcel(
          items,
          taskColumnOrder,
          `${user.firstName} ${user.lastName}'s ${filter.status} tasks`,
          e
        ),
    },
    {
      text: 'Select columns',
      classes: 'govuk-button--secondary',
      to: '',
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'My team',
            href: link.myTeam,
          },
          {
            children: 'Employee profile',
            href: `${link.employeeProfile}${id}`,
          },
          {
            children: `${title}`,
            href: `${filter.status}`,
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
      <div className={'govuk-grid-row govuk-!-margin-top-7'}>
        <div className={'govuk-grid-column-full'}>
          <div style={{ float: 'right' }}>
            <MOJButtonMenu
              items={menuButtons}
              className="query-button-menu"
              buttonClasses={'govuk-button--secondary'}
              menuClasses={'moj-button-menu__wrapper--right'}
              buttonText={'Menu'}
            />
            <SavedQueries user={me} title={'Task'} />
          </div>
          <h1 className="govuk-heading-l">{`Employee ${filter.status} tasks`}</h1>
          <p className="govuk-body govuk-!-margin-bottom-7">
            Total:{' '}
            {items.length > 1
              ? `${items.length} tasks`
              : `${items.length} task`}
            .
          </p>
        </div>
      </div>

      <div className={'govuk-grid-row'}>
        <div
          className={'govuk-grid-column-full'}
          style={{ overflowX: 'scroll' }}
        >
          <MOJSortableTable
            order={taskColumnOrder}
            items={items}
            headCols={taskCols}
            check
          />
        </div>
      </div>
    </>
  );
}
