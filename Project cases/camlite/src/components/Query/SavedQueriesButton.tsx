import { useEffect, useState } from 'react';
import { User } from '../User';
import MOJButtonMenu from '../MOJ/ButtonMenu';
import {
  getTaskQuery,
  getCaseQuery,
  getEmployeeQuery,
  getCustomerQuery,
} from '../../services/API';

interface NavQueries {
  text: string;
  classes: string;
  to: string;
}

export default function SavedQueriesButton(props: {
  user: User;
  title: string;
}) {
  const { user, title } = props;
  const [queries, setQueries] = useState<Array<NavQueries>>([]);

  function navItemGenerator(items: any): Array<NavQueries> {
    return items.map((item: any) => ({
      text: `${item.name}`,
      classes: '',
      to: item.link,
    }));
  }

  useEffect(() => {
    let mounted = true;
    switch (title) {
      case 'Case':
        getCaseQuery({ usersId: user.id }).then(items => {
          if (mounted) setQueries(navItemGenerator(items));
        });
        break;
      case 'Task':
        getTaskQuery({ usersId: user.id }).then(items => {
          if (mounted) setQueries(navItemGenerator(items));
        });
        break;
      case 'Employee':
        getEmployeeQuery({ usersId: user.id }).then(items => {
          if (mounted) setQueries(navItemGenerator(items));
        });
        break;
      case 'Customer':
        getCustomerQuery({ usersId: user.id }).then(items => {
          if (mounted) setQueries(navItemGenerator(items));
        });
        break;
    }
  }, []);

  return (
    <MOJButtonMenu
      items={queries}
      className={`${title}-query-button-menu`}
      buttonClasses={'govuk-button--secondary'}
      menuClasses={'moj-button-menu__wrapper--right'}
      buttonText={'Saved queries'}
    />
  );
}
