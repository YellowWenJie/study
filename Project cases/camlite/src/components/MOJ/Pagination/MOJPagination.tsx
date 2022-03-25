/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Iprops {
  previous?: any;
  next?: any;
  items?: any;
  results?: { from: number; to: number; count: number; text: string };
}

export default function MOJPagination(props: Iprops): ReactElement {
  const { previous, items, next, results } = props;
  return (
    <nav className="moj-pagination" id="pagination-label">
      <p className="govuk-visually-hidden" aria-labelledby="pagination-label">
        Pagination navigation
      </p>

      <ul className="moj-pagination__list">
        {previous && (
          <li className="moj-pagination__item  moj-pagination__item--prev">
            <Link className="moj-pagination__link" to={previous.href}>
              {previous.text}
              <span className="govuk-visually-hidden"> set of pages</span>
            </Link>
          </li>
        )}
        {items &&
          items.map((item: any, index: number) => {
            if (item.type === 'dots') {
              return (
                <li
                  className="moj-pagination__item moj-pagination__item--dots"
                  key={index}
                >
                  ...
                </li>
              );
            } else if (item.selected) {
              return (
                <li
                  className="moj-pagination__item moj-pagination__item--active"
                  key={index}
                >
                  {item.text}
                </li>
              );
            }
            return (
              <li className="moj-pagination__item" key={index}>
                <Link className="moj-pagination__link" to={item.href}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        {next && (
          <li className="moj-pagination__item  moj-pagination__item--next">
            <Link className="moj-pagination__link" to={next.href}>
              {next.text}
              <span className="govuk-visually-hidden"> set of pages</span>
            </Link>
          </li>
        )}
      </ul>
      {results && (
        <p className="moj-pagination__results">
          Showing <b>{results.from}</b> to <b>{results.to}</b> of{' '}
          <b>{results.count}</b> {results.text}
        </p>
      )}
    </nav>
  );
}
