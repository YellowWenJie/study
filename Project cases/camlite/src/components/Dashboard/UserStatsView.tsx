import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Tabs } from 'govuk-react-jsx';
import { CamEvent, CamEventType } from '../../helpers/filters';

export interface UserInfo {
  name: string;
  id: number;
  events: Array<CamEvent>;
}

interface UserStatsTableProps {
  userInfo: Array<UserInfo>;
  filter: (e: any) => boolean;
}

function UserStatsTable(props: UserStatsTableProps) {
  const { userInfo, filter } = props;

  const showTotal = userInfo.length > 1;

  // map user events into statistics...

  const stats = userInfo.map(({ name, id, events }: UserInfo) => {
    const filtered = events.filter(filter);
    return {
      name,
      id,
      new: filtered.filter(e => e.type === CamEventType.caseNew).length,
      casesOpened: filtered.filter(e => e.type === CamEventType.caseOpened)
        .length,
      casesClosed: filtered.filter(e => e.type === CamEventType.caseClosed)
        .length,
      tasksOpened: filtered.filter(e => e.type === CamEventType.taskOpened)
        .length,
      tasksClosed: filtered.filter(e => e.type === CamEventType.taskClosed)
        .length,
    };
  });

  // convert stats into rows...
  const rows = stats.map((rowData, k) => {
    const userRoute = `/user/${rowData.id}`;

    let cells = [];
    if (showTotal) {
      cells.push({
        children: <Link to={userRoute}>{rowData.name}</Link>,
      });
    }
    return {
      key: `${k}`,
      cells: [
        ...cells,
        {
          children: rowData.new,
          format: 'numeric',
        },
        {
          children: rowData.casesOpened,
          format: 'numeric',
        },
        {
          children: rowData.casesClosed,
          format: 'numeric',
        },
        {
          children: rowData.tasksOpened,
          format: 'numeric',
        },
        {
          children: rowData.tasksClosed,
          format: 'numeric',
        },
      ],
    };
  });

  // add a total row if needed...
  if (showTotal) {
    const total = {
      new: stats.map(a => a.new).reduce((a, b) => a + b),
      casesOpened: stats.map(a => a.casesOpened).reduce((a, b) => a + b),
      casesClosed: stats.map(a => a.casesClosed).reduce((a, b) => a + b),
      tasksOpened: stats.map(a => a.tasksOpened).reduce((a, b) => a + b),
      tasksClosed: stats.map(a => a.tasksClosed).reduce((a, b) => a + b),
    };

    rows.push({
      key: 'total',
      cells: [
        {
          children: <b>Total</b>,
        },
        {
          children: total.new,
          format: 'numeric',
        },
        {
          children: total.casesOpened,
          format: 'numeric',
        },
        {
          children: total.casesClosed,
          format: 'numeric',
        },
        {
          children: total.tasksOpened,
          format: 'numeric',
        },
        {
          children: total.tasksClosed,
          format: 'numeric',
        },
      ],
    });
  }

  let head = [];

  if (showTotal) {
    head.push({
      children: 'Case agent',
    });
  }

  return (
    <Table
      head={[
        ...head,
        {
          children: 'New cases',
          format: 'numeric',
        },
        {
          children: 'Cases opened',
          format: 'numeric',
        },
        {
          children: 'Cases closed',
          format: 'numeric',
        },
        {
          children: 'Tasks opened',
          format: 'numeric',
        },
        {
          children: 'Tasks closed',
          format: 'numeric',
        },
      ]}
      rows={rows} // all rows
    />
  );
}

export default function UserStatsView(props: { userStats: Array<UserInfo> }) {
  const { userStats } = props;
  const idPrefix = 'stats-';

  if (!userStats || userStats.length === 0) {
    return <p>No User data</p>;
  }

  const now = new Date().getTime();
  const day = 24 * 60 * 60 * 1000;
  const period = {
    day,
    hours48: day * 2,
    week: day * 7,
    month: day * 30,
    year: day * 365,
  };

  const tabs: Array<any> = [
    {
      id: 'today',
      label: 'Today',
      title: 'Today',
      filter: (e: CamEvent) => now - e.date.getTime() < period.day,
    },
    {
      id: 'yesterday',
      label: 'Yesterday',
      title: 'Yesterday',
      filter: (e: CamEvent) => {
        const diff = now - e.date.getTime();
        return diff > day && diff < period.hours48;
      },
    },
    {
      id: 'week',
      label: 'Past week',
      title: 'Past week',
      filter: (e: CamEvent) => now - e.date.getTime() < period.week,
    },
    {
      id: 'month',
      label: 'Past month',
      title: 'Past month',
      filter: (e: CamEvent) => now - e.date.getTime() < period.month,
    },
    {
      id: 'year',
      label: 'Past year',
      title: 'Past year',
      filter: (e: CamEvent) => now - e.date.getTime() < period.year,
    },
  ];

  const statsTabs = tabs.map(tab => {
    return {
      id: `${idPrefix}-${tab.id}`,
      label: `${tab.label}`,
      panel: {
        children: [
          <h2 key="0" className="govuk-heading-l">
            {tab.title}
          </h2>,
          <UserStatsTable
            key="1"
            userInfo={props.userStats}
            filter={tab.filter}
          />,
        ],
      },
    };
  });

  return <Tabs items={statsTabs} />;
}
