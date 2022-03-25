import { Label, Button, Accordion } from 'govuk-react-jsx';
import { Link, useLocation } from 'react-router-dom';
import QueryListItems from './QueryListItems';

export default function QueriesView(props: {
  title: string;
  newQueryUrl: string;
  queries: any;
}) {
  const { title, newQueryUrl, queries } = props;
  const { pathname } = useLocation();

  return (
    <>
      <Label className="govuk-label--l">{title}</Label>
      <Button href={`${newQueryUrl}`}>Add new query</Button>
      <Accordion
        id="query-list"
        items={queries.map((item: any, index: number) => {
          return {
            content: {
              children: [
                <ul key={index} className="govuk-list govuk-list--bullet">
                  <QueryListItems items={item.link} />
                </ul>,
                <Link
                  key={index + 'link'}
                  className="govuk-link"
                  to={`/query/delete/${pathname.split('/')[2]}/${item.id}/${
                    item.name
                  }`}
                >
                  Delete this query
                </Link>,
              ],
            },
            heading: {
              children: item.name,
            },
          };
        })}
      />
    </>
  );
}
