import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useHistory, useLocation } from 'react-router-dom';
import {
  Breadcrumbs,
  Button,
  Input,
  NotificationBanner,
} from 'govuk-react-jsx';
import { getTasks, getUser, updateTasks } from '../../services/API';
import { User } from '../User';
import MOJSortableTable from '../MOJ/SortableTable';
import { Task } from '../Task';
import { Context, CTX } from '../../context/setGlobalDataContext';
import { useSearchParams } from '../../helpers/search';
import {
  taskFilter as filter,
  taskCols,
  taskColumnOrder,
  caseColumnOrder,
} from '../../helpers/filters';
import { routes } from '../../helpers/routes';
import { SavedQueriesButton } from '../Query';
import ButtonMenu from '../MOJ/ButtonMenu';
import _ from 'lodash';
import exportToExcel from '../../helpers/exportToExcel';
import Modal from '../Modal/Modal';
import { Users } from '../User/Users';

const link = {
  task: `${routes.task}/`,
  case: `${routes.case}/`,
  tasks: `${routes.tasks}`,
  all: `${routes.tasks}/all`,
  urgent: `${routes.tasks}/urgent`,
  outstanding: `${routes.tasks}/outstanding`,
  new: `${routes.tasks}/new`,
  assigned: `${routes.tasks}/assigned`,
  unassigned: `${routes.tasks}/unassigned`,
  open: `${routes.tasks}/open`,
  closed: `${routes.tasks}/closed`,
  broughtForward: `${routes.tasks}/brought-forward`,
};

function TaskList(props: {
  user: User;
  title: string;
  tasks: Array<Task>;
  team?: Array<User>;
  id?: number;
  setShow?: (isShow: boolean) => void;
  isShow?: boolean;
  setRefresh?: any;
}) {
  const { user, title, tasks, team, isShow, setShow, setRefresh } = props;
  const theItems = tasks;

  const history = useHistory();
  const ctx = useContext(Context) as CTX;
  const users = ctx.getValue('users');
  const [tasksList, setTaskList] = useState<Task[]>([]);
  let titleName: any[] = [];
  const goTaskAssigning = () => {
    if (tasksList.length) history.push('/tasks/assigning-tasks', tasksList);
    setTaskList([]);
  };

  const menuItems: any = [
    {
      text: 'Search tasks',
      classes: 'govuk-button--secondary',
      to: `${routes.tasks}/search`,
    },
    {
      text: 'Change Owner',
      classes: 'govuk-button--secondary',
      to: ``,
      action: () => {
        ChangeOwner();
      },
    },
    {
      text: 'Change Assign to',
      classes: 'govuk-button--secondary',
      to: ``,
      action: () => {
        goTaskAssigning();
      },
    },
    {
      text: 'Export to excel',
      classes: 'govuk-button--secondary',
      to: '',
      action: (e: Event) =>
        exportToExcel(
          tasksList,
          taskColumnOrder,
          `${user.firstName} ${user.lastName} - tasks`,
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
    if (tasksList.length > 1) {
      alert('You can select only one task in the list');
    } else {
      history.push({
        pathname: `${routes.task}/change-task-owner`,
        state: {
          task: tasksList,
        },
      });
    }
  }

  const [taskValue, setTaskValue] = useState('');
  const [agentID, setAgentID] = useState('');

  const handleChange = (event: any) => {
    setTaskValue(event.target.value);
  };

  const handleAgent = (event: any) => {
    setAgentID(event.target.value);
  };

  const tableHead = ['Queue ID', 'Queue name'];
  const tableBody: Array<Users>[] = [];
  const usersTeam = _.groupBy(users, 'teamId');
  for (const items in usersTeam) {
    usersTeam[items].forEach(item => {
      if (item.role === 'Team Leader' && item.teamId !== user?.teamId) {
        tableBody.push([item]);
      }
    });
  }

  const selectOption = {
    items: [
      // {
      //   children: 'My tasks',
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
  let agents;
  if (team) {
    agents = team.map(agent => [
      agent.id,
      `${agent.firstName} ${agent.lastName}`,
    ]);
  }
  const showHandle = (closed: boolean): void => {
    if (setShow) {
      setShow(!isShow);
    }
    if (closed) setTaskList([]);
  };

  const addTasks = (checked: boolean, task: Task) => {
    if (checked) {
      setTaskList([...tasksList, task]);
    } else {
      setTaskList(tasksList.filter(item => item.id !== task.id));
    }
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
  const optionConfirm = async (agentId: string) => {
    const user = team?.find(item => String(item.id) === agentId);

    theItems.forEach((item, i) => {
      if (i <= Number(taskValue) - 1) {
        titleName.push(item.id);
      }
    });

    if (user && taskValue && tipConfirm()) {
      await Promise.all(
        theItems.map((items: any, index) => {
          if (index <= Number(taskValue) - 1) {
            items.usersId = user?.id;
            updateTasks(items.id, items);
          }
        })
      );
      setTaskValue('');
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
              className={'task-menu'}
            />
            <SavedQueriesButton user={user} title={'Task'} />
          </div>
          <h1 className="govuk-heading-l">{title}</h1>
          <p className="govuk-body govuk-!-margin-bottom-7">
            Total: {tasks.length} Tasks.
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
            items={tasks}
            headCols={taskCols}
            check
            onCheck={addTasks}
          />
        </div>
      </div>
      <div className="govuk-!-margin-top-7">
        <Input
          className="govuk-input--width-10 task-input"
          id="input-width-10"
          label={{
            children: 'Number Of  Task',
          }}
          name="test-width-10"
          type="text"
          value={taskValue}
          onChange={handleChange}
        />
        <Input
          className="govuk-input--width-10 task-inputs"
          id="input-width-10"
          label={{
            children: 'Agent Staff ID',
          }}
          name="test-width-10"
          type="text"
          value={agentID}
          onChange={handleAgent}
        />
        <Button
          className="task-btn"
          onClick={() => {
            optionConfirm(agentID);
          }}
        >
          Confirmation
        </Button>
      </div>
      <div className="govuk-button-group govuk-!-margin-top-7">
        <Button onClick={goTaskAssigning}>Re-assign tasks</Button>
      </div>
      <div>
        <Button
          disabled={!tasksList.length}
          onClick={(e: any) => {
            if (setShow) {
              setShow(!isShow);
            }
          }}
        >
          Re-assign task to a queue
        </Button>
      </div>
      <div>
        <Link className="govuk-link" to={routes.taskSummary}>
          Cancel
        </Link>
      </div>
      <Modal
        selectOption={selectOption}
        tableHead={tableHead}
        tableBody={tableBody}
        show={isShow}
        showHandle={showHandle}
        selectedTasks={tasksList}
        updateType="/tasks"
      />
    </>
  );
}

function TaskListView(props: { user: User; team?: Array<User> }) {
  const { type, id } = useParams();
  const { state } = useLocation();
  const { user, team } = props;
  let page, theItems: any[];
  const [refresh, setRefresh] = useState(id);
  let teamIds: number[];
  if (team) {
    teamIds = team.map(u => u.id);
  }
  const ctx = useContext(Context) as CTX;

  const tasks = ctx.getValue('tasks');
  const theUser = ctx.getValue('user');

  const inTeam = (item: any) => teamIds.includes(item.usersId);
  const searchParams = useSearchParams();
  const [isShow, setShow] = useState<boolean>(false);
  // @ts-ignore
  let queryFilter = Object.fromEntries([...searchParams]);
  if (!isNaN(id)) {
    queryFilter['usersId'] = id;
  } else {
    queryFilter['teamId'] = user.teamId;
  }

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
    getTasks(queryFilter).then(items => {
      ctx.setValue('tasks', items);
    });
  }, [refresh]);

  const prefix = theUser
    ? // @ts-ignore
      `${theUser.firstName} ${theUser.lastName}'s`
    : "Team's all ";

  switch (type) {
    case 'urgent':
      page = {
        title: `${prefix} urgent tasks`,
        link: link.urgent,
      };
      theItems = tasks.filter(filter.urgent).filter(inTeam);
      break;
    case 'outstanding':
      page = {
        title: `${prefix} outstanding tasks`,
        link: link.outstanding,
      };
      theItems = tasks.filter(filter.outstanding).filter(inTeam);
      break;
    case 'new':
      page = {
        title: `${prefix} new tasks`,
        link: link.new,
      };
      theItems = tasks.filter(filter.new).filter(inTeam);
      break;
    case 'open':
      page = {
        title: `${prefix} open tasks`,
        link: link.open,
      };
      theItems = tasks.filter(filter.open).filter(inTeam);
      break;
    case 'closed':
      page = {
        title: `${prefix} closed tasks`,
        link: link.closed,
      };
      theItems = tasks.filter(filter.closed).filter(inTeam);
      break;
    case 'assigned':
      page = {
        title: `${prefix} assigned tasks`,
        link: link.assigned,
      };
      theItems = tasks.filter(filter.assigned).filter(inTeam);
      break;
    case 'unassigned':
      page = {
        title: `${prefix} unassigned tasks`,
        link: link.unassigned,
      };
      theItems = tasks.filter(filter.unassigned).filter(inTeam);
      break;
    case 'brought-forward':
      page = {
        title: `${prefix} brought forward tasks`,
        link: link.broughtForward,
      };
      theItems = tasks.filter(filter.broughtForward).filter(inTeam);
      break;
    default:
      page = {
        title: `${prefix} tasks`,
        link: link.all,
      };
      theItems = tasks.filter(inTeam);
      break;
  }

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'Tasks',
            href: routes.taskSummary,
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
      <TaskList
        user={user}
        title={page.title}
        tasks={theItems}
        team={team}
        id={id}
        isShow={isShow}
        setShow={setShow}
        setRefresh={setRefresh}
      />
    </>
  );
}

export { TaskListView as default, TaskList };
