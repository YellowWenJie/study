import { Panel } from 'govuk-react-jsx';
import { Link, useParams } from 'react-router-dom';

const link = {
  savedQueries: '/query/',
};

export default function QueryConfirmation() {
  const { backUrl, message } = useParams();

  return (
    <>
      <Panel headingLevel={1} titleChildren={message}></Panel>
      <h2 className="govuk-heading-m">What you can do next</h2>
      <Link
        to={`${link.savedQueries}${backUrl}`}
        aria-describedby="my-position"
      >
        View saved queries
      </Link>
    </>
  );
}
