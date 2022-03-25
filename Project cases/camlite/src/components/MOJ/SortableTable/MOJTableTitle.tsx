import { ReactElement } from 'react';

interface Iprops {
  title?: boolean | string;
}

export default function MOJTableTitle(props: Iprops): ReactElement {
  return props.title ? (
    <caption className="govuk-table__caption govuk-table__caption--m">
      {props.title}
    </caption>
  ) : (
    <></>
  );
}
