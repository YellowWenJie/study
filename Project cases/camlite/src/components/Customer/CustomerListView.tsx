import React, { useEffect, useState } from 'react';
import { SavedQueriesButton } from '../Query';
import { BackLink, Button } from 'govuk-react-jsx';
import { getCustomers } from '../../services/API';
import { User } from '../User';
import MOJSortableTable from '../MOJ/SortableTable';
import { useSearchParams } from '../../helpers/search';
import { routes } from '../../helpers/routes';

const link = {
  case: `${routes.case}/`,
  task: `${routes.task}/`,
  customers: `${routes.customers}`,
  all: `${routes.tasks}/all`,
  outstanding: `${routes.tasks}/outstanding`,
  open: `${routes.tasks}/open`,
  closed: `${routes.tasks}/closed`,
};

const customerCols = {
  firstName: { text: 'First Name' },
  otherNames: { text: 'Other forename(s)' },
  lastName: { text: 'Last Name' },
  preferredName: { text: 'Preferred Name' },
  nino: { text: 'NINO' },
  crn: { text: 'CRN', href: '/customer/', format: 'numeric' },
  gender: { text: 'Gender' },
  postcode: { text: 'Postcode' },
  dateOfBirth: { text: 'Date of Birth', format: 'date' },
  dateOfDeath: { text: 'Date of Death', format: 'date' },
};

export default function CustomerListView(props: {
  user: User;
  team: Array<User>;
}) {
  const { user, team } = props;
  const [customers, setCustomers] = useState([]);

  const page = {
    title: 'Customers',
    link: '/customers',
  };

  const rowOrder = [
    'firstName',
    'otherNames',
    'lastName',
    'preferredName',
    'nino',
    'crn',
    'gender',
    'postcode',
    'dateOfBirth',
    'dateOfDeath',
  ];

  const searchParams = useSearchParams();
  // @ts-ignore
  let queryFilter = Object.fromEntries([...searchParams]);

  useEffect(() => {
    getCustomers(queryFilter).then(items => {
      setCustomers(items);
    });
  }, []);

  const theCustomers: any = customers;

  return (
    <>
      <BackLink>Back</BackLink>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-full'}>
          <div style={{ float: 'right' }}>
            <SavedQueriesButton user={user} title={'Customer'} />
            <Button href={`${link.customers}/search`}>Search customers</Button>
          </div>
          <h1 className="govuk-heading-l">{page.title}</h1>
          <p className="govuk-body govuk-!-margin-bottom-7">
            Click the heading to sort customers. Click the customer name to view
            the details.
          </p>
        </div>
      </div>

      <MOJSortableTable
        order={rowOrder}
        items={theCustomers}
        headCols={customerCols}
        limit={5}
      />
    </>
  );
}
