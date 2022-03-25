/* eslint-disable react/jsx-no-duplicate-props */
import { ReactElement, useEffect, useRef } from 'react';
import { initAll } from '@ministryofjustice/frontend/moj/all';
import MOJTableHeader from './MOJTableHeader';
import MOJTableBody from './MOJTableBody';
import MOJTableTitle from './MOJTableTitle';
import MOJPagination from '../Pagination';

import type { HeadCol } from './MOJTableHeader';

interface IPage {
  text?: string;
  type?: string;
  href?: string;
  selected?: boolean;
}

interface IProps {
  check?: boolean;
  title?: boolean | string;
  order: string[];
  items: any[];
  headCols?: { [key: string]: HeadCol };
  limit?: number;
  onCheck?: (checked: boolean, task: any) => void;
}

const defaultProps = {
  check: false,
  title: false,
};

const itemLimit = 20;

const MOJSortableTable = (props: IProps): ReactElement => {
  const { check, title, order, items, headCols, limit, onCheck } = props;
  const page = 1;
  const theLimit = limit ? limit : itemLimit;

  // TODO: Improve Page size calculations...
  const totalPages = Math.floor(items.length / theLimit);
  const start = theLimit * (page - 1) + 1;
  const end = theLimit * page > items.length ? items.length : theLimit * page;
  const lastPage = totalPages + 1;

  const pages: Array<IPage> = [
    { text: '1', href: '?page=1', selected: page === 1 },
  ];
  if (page > 1) {
    pages.push({ text: `${page}`, selected: true });
  }
  if (lastPage > 1) {
    pages.push(
      { type: 'dots' },
      { text: `${lastPage}`, href: `?page=${lastPage}` }
    );
  }

  const table = useRef(null);

  useEffect(() => {
    initAll();
    if (check) {
      const el = table.current as unknown as HTMLTableElement;
      el.setAttribute('data-module', 'moj-multi-select');
    }
  });

  // create header columns based on order
  const head = order.map(o => {
    return headCols && headCols[o]
      ? headCols[o]
      : {
          text: o,
          attributes: {
            'aria-sort': 'none',
          },
        };
  });

  const theItems = items.slice(0, theLimit);

  return (
    <>
      <table
        className="govuk-table"
        data-module="moj-sortable-table"
        data-multi-select-checkbox="#select-all"
        ref={table}
      >
        <MOJTableTitle title={title} />
        <MOJTableHeader check={check} head={head} />
        <MOJTableBody
          check={check}
          order={order}
          items={theItems}
          headCols={head}
          onCheck={onCheck}
        />
      </table>
      {items.length > theLimit && (
        <MOJPagination
          previous={{ text: 'Previous', href: '/page/1' }}
          items={pages}
          next={{ text: 'Next', href: '/page/99' }}
          results={{ from: start, to: end, count: items.length, text: 'items' }}
        />
      )}
    </>
  );
};

MOJSortableTable.defaultProps = defaultProps;

export default MOJSortableTable;
