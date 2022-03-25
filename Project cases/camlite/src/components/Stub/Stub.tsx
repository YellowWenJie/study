import { memo } from 'react';
import { BackLink } from 'govuk-react-jsx';

export default memo(function Stub(props: { title: string }) {
  return (
    <>
      <BackLink>Back</BackLink>
      <h1 className="govuk-heading-xl">{props.title}</h1>
    </>
  );
});
