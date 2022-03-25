import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, NotificationBanner } from 'govuk-react-jsx';
import MOJTimeLine from '../MOJ/TimeLine/MOJTimeLine';
import _ from 'lodash';
import DetailsRelated from '../details/DetailsRelated';
import { CustomerDetails } from '../Customer';
import { getCases, getTasks } from '../../services/API';

import { Context, CTX } from '../../context/setGlobalDataContext';
import { routes } from '../../helpers/routes';

export default function Note() {
  const { id, type } = useParams();

  const ctx = useContext(Context) as CTX;
  const [flag, setFlag] = useState<null | string>(null);

  useEffect(() => {
    if (type === 'task') {
      getTasks({ id }).then(([items]) => {
        ctx.setValue('task', items);
      });
    } else {
      getCases({ id }).then(([items]) => {
        ctx.setValue('case', items);
      });
    }
    setFlag(localStorage.getItem('flag'));
    localStorage.removeItem('flag');
    const timer = setTimeout(() => {
      setFlag('');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const Task = ctx.getValue('task');
  const Case = ctx.getValue('case');

  const linkNotesItems = [
    { link: `/${type}/${id}`, title: `View ${type} details` },
    { link: `/${type}-history`, title: `View ${type} history` },
    { link: `/close-${type}-check`, title: `Close this ${type}` },
    { link: '/DRS-system', title: `View ${type} documents` },
    { link: '/DRS system', title: 'View customer documents' },
    { link: `/customer-all-${type}`, title: `View customer ${type} list` },
    {
      link: '/alpha/customers/customer-details/customer-details-main',
      title: 'View customer details',
    },
    { link: `/create-new-${type}`, title: `Create new ${type}` },
  ];

  const link = {
    editType: 'edit/type',
    editSubtype: 'edit/subtype',
    editCustomerName: 'edit/customerName',
    editNI: 'edit/ni',
    editCRN: 'edit/crn',
    editBenefit: 'edit/benefit',
    editResolution: 'edit/resolution',
    editResolutionDate: 'edit/resolutionDate',
    editDueDate: 'edit/dueDate',
    editNotes: 'edit/notes',
    assign: 'assigning-cases',
    dashboard: routes.dashboard,
  };

  const items = [
    {
      children: `${_.capitalize(type)}`,
      href: `/${type}`,
    },
    {
      children: `Teams all ${type}`,
      href: `/${type}/all`,
    },
    {
      children: 'Details',
      href: `/${type}/${id}`,
    },
    {
      children: `${_.capitalize(type)} notes`,
      href: `/notes/${type}/${id}`,
    },
  ];

  const topModule = {
    titleName: `${type} notes`,
    id: id,
  };

  return (
    <div>
      <Breadcrumbs items={items} />
      {flag && (
        <NotificationBanner
          titleId="govuk-notification-banner-title"
          type="success"
        >
          New note has been added.
        </NotificationBanner>
      )}
      {(Task || Case) &&
        CustomerDetails(type === 'task' ? Task.customers : Case.customers)}
      <div className={'govuk-grid-row details-container'}>
        <div className={'govuk-grid-column-two-thirds'}>
          <h1 className="govuk-heading-l">
            {_.capitalize(topModule.titleName)}
          </h1>
          {(Task || Case) && (
            <MOJTimeLine
              items={
                type === 'task' ? Task.customers.notes : Case.customers.notes
              }
              type={type}
              userId={id}
              customersId={
                type === 'task' ? Task.customersId : Case.customersId
              }
            />
          )}
        </div>

        <DetailsRelated linkItems={linkNotesItems} assign={link.assign} />
      </div>
    </div>
  );
}
