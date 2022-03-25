import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag } from 'govuk-react-jsx';

export interface ItemProps {
  [key: string]: { cases: number; tasks: number };
}

const defaultItems: ItemProps = {
  urgent: { cases: -1, tasks: -1 },
  outstanding: { cases: -1, tasks: -1 },
  returned: { cases: -1, tasks: -1 },
  forward: { cases: -1, tasks: -1 },
  ccto: { cases: -1, tasks: -1 },
  closedToday: { cases: -1, tasks: -1 },
  total: { cases: -1, tasks: -1 },
};

/**
 * ItemStatusView - summarise case/task status
 * @param props
 * @constructor
 */
export default function ItemStatusView(props: {
  items: ItemProps;
  isTeam?: boolean;
}) {
  const { items, isTeam } = props;

  const stats = {
    ...defaultItems,
    ...items,
  };

  const showCases = (value: number, string: string) =>
    value < 0 ? (
      '---'
    ) : value ? (
      <Link to={`cases/${string}`} aria-describedby={`${string}-cases`}>
        {value} case{value !== 1 ? 's' : ''}
      </Link>
    ) : (
      '-'
    );
  const showTasks = (value: number, string: string) =>
    value < 0 ? (
      '---'
    ) : value ? (
      <Link to={`tasks/${string}`} aria-describedby={`${string}-tasks`}>
        {value} task{value !== 1 ? 's' : ''}
      </Link>
    ) : (
      '-'
    );

  /**
   * Define Status row data
   * @param title
   * @param id
   * @param data
   * @constructor
   */
  function StatsRow(
    title: any,
    id: string,
    data: { cases: number; tasks: number }
  ) {
    return {
      cells: [
        {
          children: title,
        },
        {
          children: showCases(data.cases, id),
          format: 'numeric',
        },
        {
          children: showTasks(data.tasks, id),
          format: 'numeric',
        },
      ],
    };
  }

  const rowDefs: { [key: string]: any } = {
    urgent: StatsRow(
      <Tag className="govuk-tag--red">Urgent</Tag>,
      'urgent',
      stats.urgent
    ),
    outstanding: StatsRow(
      <Tag className="govuk-tag--blue">Outstanding</Tag>,
      'outstanding',
      stats.outstanding
    ),
    returned: StatsRow(
      <Tag className="govuk-tag--red">Returned by agent</Tag>,
      'returned',
      stats.returned
    ),
    ccto: StatsRow(
      <Tag className="govuk-tag--yellow">Closed tasks, case open</Tag>,
      'closed-open',
      stats.ccto
    ),
    closed: StatsRow(
      <Tag className="govuk-tag--green">Closed Today</Tag>,
      'closed',
      stats.closedToday
    ),
    total: StatsRow(<b>Total</b>, 'all', stats.total),
  };

  const rowOrder = isTeam
    ? ['urgent', 'outstanding', 'returned', 'ccto', 'closed', 'total']
    : ['urgent', 'outstanding', 'ccto', 'closed', 'total'];

  // only show rows where data exists
  const rows = rowOrder
    .filter((r: string) => stats[r])
    .map((r: string) => rowDefs[r]);

  const itemProps = {
    head: [
      {
        children: 'Status',
      },
      {
        children: 'Cases',
        format: 'numeric',
      },
      {
        children: 'Tasks',
        format: 'numeric',
      },
    ],
    rows,
  };

  return <Table head={itemProps.head} rows={itemProps.rows} />;
}
