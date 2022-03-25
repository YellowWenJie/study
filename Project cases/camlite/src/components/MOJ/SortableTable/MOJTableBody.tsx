import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { HeadCol } from './MOJTableHeader';
import { shortMonth } from '../../../helpers/dwp';

interface IProps {
  check?: boolean;
  order: string[];
  headCols?: Array<HeadCol>;
  items: any[];
  onCheck?: (checked: boolean, task: any) => void;
}

export default function MOJTableBody(props: IProps): ReactElement {
  const { check, order, items, headCols, onCheck } = props;

  return (
    <tbody className="govuk-table__body">
      {items.map((row, number) => {
        // get values in order specified
        const key = row.hasOwnProperty('id') ? row.id : number;
        const values = order.map(ord => row[ord]);
        return (
          <tr className="govuk-table__row" key={key}>
            {check && (
              <td className="govuk-table__cell">
                <div className="govuk-checkboxes__item govuk-checkboxes--small moj-multi-select__checkbox">
                  <input
                    type="checkbox"
                    className="govuk-checkboxes__input"
                    id={`select-${key}`}
                    value={`${key}`}
                    onChange={({ target }) => onCheck?.(target.checked, row)}
                  />
                  <label
                    className="govuk-label govuk-checkboxes__label"
                    htmlFor={`cb-${key}`}
                  >
                    <span className="govuk-visually-hidden">Select</span>
                  </label>
                </div>
              </td>
            )}
            {values?.map((value: any, index) => {
              if (headCols) {
                const headCol = headCols[index];
                if (headCol.format === 'date') {
                  return headCol.href ? (
                    <td
                      className="govuk-table__cell"
                      key={index}
                      data-sort-value={value}
                    >
                      <Link
                        to={`${headCol.href}${row.id}`}
                        className="govuk-link"
                      >
                        {shortMonth(value)}
                      </Link>
                    </td>
                  ) : (
                    <td
                      className="govuk-table__cell"
                      data-sort-value={value}
                      key={index}
                    >
                      {shortMonth(value)}
                    </td>
                  );
                }
                if (headCol.href) {
                  // link reference
                  return (
                    <td
                      className="govuk-table__cell"
                      key={index}
                      data-sort-value={value}
                    >
                      <Link to={`${headCol.href}${value}`}>{value}</Link>
                    </td>
                  );
                }
                if (headCol.translate) {
                  // link reference
                  return (
                    <td
                      className="govuk-table__cell"
                      key={index}
                      data-sort-value={value}
                    >
                      {headCol.translate!(value)}
                    </td>
                  );
                }
              }
              // default
              return (
                <td
                  className="govuk-table__cell"
                  key={index}
                  data-sort-value={value}
                >
                  {value}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
