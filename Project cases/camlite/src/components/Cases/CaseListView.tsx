import React, { useContext, useEffect, useState, memo } from 'react';
import { useParams, Link, useHistory, useLocation } from 'react-router-dom';
import {
  Breadcrumbs,
  Button,
  Input,
  NotificationBanner,
} from 'govuk-react-jsx';
import { getCases, getUser, updateCases } from '../../services/API';
import { User } from '../User';
import MOJSortableTable from '../MOJ/SortableTable';
import { Case } from '../Case';
import { Context, CTX } from '../../context/setGlobalDataContext';
import { useSearchParams } from '../../helpers/search';
import {
  caseFilter as filter,
  caseCols,
  caseColumnOrder,
} from '../../helpers/filters';
import { routes } from '../../helpers/routes';
import { SavedQueriesButton } from '../Query';
import ButtonMenu from '../MOJ/ButtonMenu';
import exportToExcel from '../../helpers/exportToExcel';
import _ from 'lodash';

import Modal from '../Modal/Modal';
import { Users } from '../User/Users';

const link = {
  case: `${routes.case}/`,
  task: `${routes.task}/`,
  cases: `${routes.cases}`,
  all: `${routes.cases}/all`,
  urgent: `${routes.cases}/urgent`,
  outstanding: `${routes.cases}/outstanding`,
  new: `${routes.cases}/new`,
  assigned: `${routes.cases}/assigned`,
  unassigned: `${routes.cases}/unassigned`,
  open: `${routes.cases}/open`,
  closed: `${routes.cases}/closed`,
  broughtForward: `${routes.cases}/brought-forward`,
};

function CaseList(props: {
  user: User;
  title: string;
  cases: Array<Case>;
  team?: Array<User>;
  setShow?: (isShow: boolean) => void;
  isShow?: boolean;
  setRefresh?: any;
}) {
  const { user, title, cases, team, setShow, isShow, setRefresh } = props;
  const [value, setValue] = useState('');
  const [agentID, setAgentID] = useState('');
  const theItems = cases;
  let titleName: any[] = [];
  const history = useHistory();
  const [casesList, setCaseList] = useState<Case[]>([]);
  const ctx = useContext(Context) as CTX;
  const users = ctx.getValue('users');
  const goCaseAssigning = () => {
    if (casesList.length) history.push('/cases/assigning-cases', casesList);
    setCaseList([]);
  };

  const addCases = (checked: boolean, aCase: Case) => {
    if (checked) {
      setCaseList([...casesList, aCase]);
    } else {
      setCaseList(casesList.filter(item => item.id !== aCase.id));
    }
  };

  const menuItems: any = [
    {
      text: 'Search cases',
      classes: 'govuk-button--secondary',
      to: `${routes.cases}/search`,
    },
    {
      text: 'Change Owner',
      classes: 'govuk-button--secondary',
      to: '',
      action: () => {
        ChangeOwner();
      },
    },
    {
      text: 'Change Assign to',
      classes: 'govuk-button--secondary',
      to: ``,
      action: () => {
        goCaseAssigning();
      },
    },
    {
      text: 'Export to excel',
      classes: 'govuk-button--secondary',
      to: '',
      action: (e: Event) =>
        exportToExcel(
          casesList,
          caseColumnOrder,
          `${user.firstName} ${user.lastName} - cases`,
          e
        ),
    },
    {
      text: 'Select columns',
      classes: 'govuk-button--secondary',
      to: `${routes.team}/search`,
    },
  ];

  function ChangeOwner() {
    if (casesList.length > 1) {
      alert('You can select only one task in the list');
    } else {
      history.push({
        pathname: `${routes.cases}/change-case-owner`,
        state: {
          case: casesList,
        },
      });
    }
  }

  const selectOption = {
    items: [
      // {
      //   children: 'My cases',
      //   value: '0',
      // },
      // {
      //   children: "Agent's queue",
      //   value: '1',
      // },
      {
        children: "Other team's queues",
        value: '2',
      },
      // {
      //   children: 'Add queue',
      //   value: '3',
      // },
    ],
  };

  const tableHead = ['Queue ID', 'Queue name'];
  const tableBody: Array<Users>[] = [];
  const usersTeam = _.groupBy(users, 'teamId');
  for (const items in usersTeam) {
    usersTeam[items].forEach(item => {
      if (item.role === 'Team Leader' && item.teamId !== user.teamId) {
        tableBody.push([item]);
      }
    });
  }

  const showHandle = (closed: boolean): void => {
    if (setShow) {
      setShow(!isShow);
    }
    if (closed) setCaseList([]);
  };

  const titleID = () => {
    titleName = Array.from(new Set(titleName));
    let str = '';
    for (let i = 0; i < titleName.length; i++) {
      str += `${titleName[i]}, `;
    }
    str = str.substring(0, str.length - 2);
    return str;
  };
  const tipConfirm = () => {
    return window.confirm(
      `Do you want to assign these cases to ${user?.firstName} ${
        user?.lastName
      }?\ntasksID:\n${titleID()}`
    );
  };
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleAgent = (event: any) => {
    setAgentID(event.target.value);
  };

  const optionConfirm = async (agentId: string) => {
    const user = team?.find(item => String(item.id) === agentId);

    theItems.forEach((item, i) => {
      if (i <= Number(value) - 1) {
        titleName.push(item.id);
      }
    });

    if (value && user && tipConfirm()) {
      await Promise.all(
        theItems.map((items: any, index) => {
          if (index <= Number(value) - 1) {
            items.usersId = user?.id;
            updateCases(items.id, items);
          }
        })
      );
      setValue('');
      setAgentID('');
      setRefresh('');
    }
  };

  return (
    <>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-full'}>
          <div style={{ float: 'right' }}>
            <ButtonMenu
              buttonText={'Menu'}
              items={menuItems}
              className={'case-menu'}
            />
            <SavedQueriesButton user={user} title={'Case'} />
          </div>
          <h1 className="govuk-heading-l">{title}</h1>
          <p className="govuk-body govuk-!-margin-bottom-7">
            Total: {theItems.length} Cases.
          </p>
        </div>
      </div>
      <div className={'govuk-grid-row'}>
        <div
          className={'govuk-grid-column-full'}
          style={{ overflowX: 'scroll' }}
        >
          <MOJSortableTable
            order={caseColumnOrder}
            items={theItems}
            headCols={caseCols}
            check
            onCheck={addCases}
          />
        </div>
      </div>
      <div className="govuk-!-margin-top-7">
        <Input
          className="govuk-input--width-10 case-input"
          id="input-width-10"
          label={{
            children: 'Number Of  Task',
          }}
          name="test-width-10"
          type="number"
          value={value}
          onChange={handleChange}
        />
        <Input
          className="govuk-input--width-10 case-inputs"
          id="input-width-10"
          label={{
            children: 'Agent Staff ID',
          }}
          name="test-width-10"
          type="number"
          value={agentID}
          onChange={handleAgent}
        />
        <Button
          className="btn"
          onClick={() => {
            optionConfirm(agentID);
          }}
        >
          Confirmation
        </Button>
      </div>
      <div className="govuk-button-group govuk-!-margin-top-7">
        <Button className="cases-btn" onClick={goCaseAssigning}>
          Re-assign cases
        </Button>
      </div>
      <div>
        <Button
          className="queue-btn"
          disabled={!casesList.length}
          onClick={() => {
            if (setShow) {
              setShow(!isShow);
            }
          }}
        >
          Re-assign case to a queue
        </Button>
      </div>
      <div>
        <Link className="govuk-link" to={routes.caseSummary}>
          Cancel
        </Link>
      </div>
      <Modal
        selectOption={selectOption}
        tableHead={tableHead}
        tableBody={tableBody}
        show={isShow}
        showHandle={showHandle}
        selectedTasks={casesList}
        updateType="/cases"
      />
    </>
  );
}

function CaseListView(props: { user: User; team?: Array<User> }) {
  const { type, id } = useParams();
  const { state } = useLocation();
  const { user, team } = props;
  const [refresh, setRefresh] = useState(id);

  const ctx = useContext(Context) as CTX;
  let teamIds: number[];
  if (team) {
    teamIds = team.map(u => u.id);
  }
  const cases = ctx.getValue('cases');
  const theUser = ctx.getValue('user');
  const [isShow, setShow] = useState<boolean>(false);
  const inTeam = (item: any) => teamIds.includes(item.usersId);
  const searchParams = useSearchParams();
  // @ts-ignore
  let queryFilter = Object.fromEntries([...searchParams]);
  if (!isNaN(id)) {
    queryFilter['usersId'] = id;
  } else {
    queryFilter['teamId'] = user.teamId;
  }

  let page, theItems: any[];

  useEffect(() => {
    if (!isNaN(id)) {
      getUser(id).then(item => {
        ctx.setValue('user', item);
      });
    } else {
      ctx.setValue('user', null);
    }
  }, [id]);

  useEffect(() => {
    getCases(queryFilter).then(items => {
      ctx.setValue('cases', items);
    });
  }, [refresh]);

  const prefix = theUser
    ? // @ts-ignore
      `${theUser.firstName} ${theUser.lastName}'s`
    : "Team's all";

  switch (type) {
    case 'urgent':
      page = {
        title: `${prefix} urgent cases`,
        link: link.urgent,
      };
      theItems = cases.filter(filter.urgent).filter(inTeam);
      break;
    case 'outstanding':
      page = {
        title: `${prefix} outstanding cases`,
        link: link.outstanding,
      };
      theItems = cases.filter(filter.outstanding).filter(inTeam);
      break;
    case 'new':
      page = {
        title: `${prefix} new cases`,
        link: link.new,
      };
      theItems = cases.filter(filter.new).filter(inTeam);
      break;
    case 'open':
      page = {
        title: `${prefix} open cases`,
        link: link.open,
      };
      theItems = cases.filter(filter.open).filter(inTeam);
      break;
    case 'closed':
      page = {
        title: `${prefix} closed cases`,
        link: link.closed,
      };
      theItems = cases.filter(filter.closed).filter(inTeam);
      break;
    case 'assigned':
      page = {
        title: `${prefix} assigned cases`,
        link: link.assigned,
      };
      theItems = cases.filter(filter.assigned).filter(inTeam);
      break;
    case 'unassigned':
      page = {
        title: `${prefix} unassigned cases`,
        link: link.unassigned,
      };
      theItems = cases.filter(filter.unassigned).filter(inTeam);
      break;
    case 'brought-forward':
      page = {
        title: `${prefix} brought forward cases`,
        link: link.broughtForward,
      };
      theItems = cases.filter(filter.broughtForward).filter(inTeam);
      break;
    default:
      page = {
        title: `${prefix} cases`,
        link: link.all,
      };
      theItems = cases.filter(inTeam);
      break;
  }

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'Cases',
            href: routes.caseSummary,
          },
          {
            children: page.title,
            href: page.link,
          },
        ]}
      />
      {state && (
        <NotificationBanner
          titleId="govuk-notification-banner-title"
          type="success"
        >
          {state.notificationMessage}
        </NotificationBanner>
      )}
      <CaseList
        user={user}
        title={page.title}
        cases={theItems}
        team={team}
        isShow={isShow}
        setShow={setShow}
        setRefresh={setRefresh}
      />
    </>
  );
}

export { CaseListView as default, CaseList };
