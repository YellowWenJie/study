import { ReactElement, memo } from 'react';
import { IProps } from './interfaces/IModalTable';

export default memo(function ModalTable(props: IProps): ReactElement {
  const { tableHead, tableBody, selectAgentId } = props;

  return (
    <div className="table-container">
      <table className="govuk-table">
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th
              className="govuk-table__header"
              scope="col"
              id="select-all"
            ></th>
            {tableHead.map(item => (
              <th className="govuk-table__header" scope="col" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="govuk-table__body">
          {tableBody.map((items, index) => {
            return (
              <tr className="govuk-table__row" key={index}>
                <td className="govuk-table__cell">
                  <div className="govuk-checkboxes__item govuk-checkboxes--small moj-multi-select__checkbox">
                    <input
                      type="radio"
                      className="govuk-checkboxes__input radio-change"
                      id="mountain-denali"
                      name="input"
                      onChange={e => selectAgentId(e.target.checked, items[0])}
                    />
                    <label
                      className="govuk-label govuk-checkboxes__label"
                      htmlFor="mountain-denali"
                    >
                      <span className="govuk-visually-hidden">
                        Select Denali
                      </span>
                    </label>
                  </div>
                </td>
                {items.map((item, i) => (
                  <td className="govuk-table__cell" key={i}>
                    {item.id}
                  </td>
                ))}
                {items.map((item, i) => (
                  <td className="govuk-table__cell" key={i}>
                    {item.firstName}
                    {' ' + item.lastName}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
