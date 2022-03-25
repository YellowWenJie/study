import { ReactElement, memo } from 'react';

export interface HeadCol {
  text: string;
  format?: string;
  href?: string;
  translate?: (value: string) => JSX.Element | string;
}

interface IProps {
  head: Array<HeadCol>;
  check?: boolean;
}

export default memo(function MOJTableHeader(props: IProps): ReactElement {
  const { check, head } = props;
  return (
    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        {check && (
          <th className="govuk-table__header" scope="col" id="select-all" />
        )}
        {head.map((h, index) => {
          const classes = ['govuk-table__header'];
          if (h.hasOwnProperty('format')) {
            // @ts-ignore
            classes.push(`govuk-table__header--${h.format}`);
          }
          // console.log(ord);
          // console.log(classes.join(' '));

          return (
            <th
              key={index}
              scope="col"
              className={classes.join(' ')}
              aria-sort="none"
            >
              {h.text}
            </th>
          );
        })}
      </tr>
    </thead>
  );
});
