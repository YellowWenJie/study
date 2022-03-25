import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, Tag } from 'govuk-react-jsx';
import { Priority } from './Case';
import { getCases, getCustomer, getTasks, patchCase } from '../../services/API';
import { User } from '../User';
import { Context, CTX } from '../../context/setGlobalDataContext';
import DetailsRelated from '../details/DetailsRelated';
import './CaseView.scss';
import { CustomerDetails } from '../Customer';
import { routes } from '../../helpers/routes';
import { TaskList } from '../Tasks';
import { CaseForm } from './CaseForm';

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
  dashboard: 'dashboard',
};

export function priorityTag(priority: Priority) {
  switch (priority) {
    case Priority.normal:
      return <span>&nbsp;</span>;
    default:
      return <Tag className={'govuk-tag--red'}>Urgent</Tag>;
  }
}

export default function CaseView(props: { user: User }) {
  const { user } = props;
  let { id } = useParams();
  const ctx = useContext(Context) as CTX;
  const aCase = ctx.getValue('case');
  const [customer, setCustomer] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getCases({ id }).then(async items => {
      ctx.setValue('case', items[0]);
      const [customer, tasks] = await Promise.all([
        getCustomer(items[0].crn),
        getTasks({ casesId: id }),
      ]);
      setCustomer(customer);
      setTasks(tasks);
    });
  }, [id]);

  function onChange(data: any) {
    patchCase(id, data).then(data => {
      ctx.setValue('case', data);
    });
  }

  const customerRoute = customer ? `${routes.customer}/${aCase.crn}` : '';
  const caseRoute = `${routes.case}/${id}`;

  const linkItems = [
    { link: `/notes/case/${id}`, title: 'View and add case notes' },
    { link: `${caseRoute}/history`, title: 'View case history' },
    { link: `${caseRoute}/close`, title: 'Close this case' },
    { link: `${caseRoute}/DRS`, title: 'View case documents' },
    { link: `${customerRoute}/DRS`, title: 'View customer documents' },
    { link: `${customerRoute}/cases`, title: 'View customer cases list' },
    { link: `${customerRoute}`, title: 'View customer details' },
    { link: `${customerRoute}/case/new`, title: 'Create new case' },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'Cases',
            href: '/cases',
          },
          {
            children: 'Teams all cases',
            href: '/cases/all',
          },
          {
            children: 'Details',
            href: `/case/${id}`,
          },
        ]}
      />
      {customer && CustomerDetails(customer)}
      <div className={'govuk-grid-row details-container'}>
        <div className={'govuk-grid-column-two-thirds'}>
          <h1 className="govuk-heading-l">Case Details</h1>
          {aCase && priorityTag(aCase.priority)}
          <CaseForm
            aCase={aCase}
            className={'govuk-!-margin-top-6'}
            onChange={onChange}
          />
        </div>
        <DetailsRelated
          buttonName="Re-assign case"
          linkItems={linkItems}
          assign={link.assign}
        />
      </div>
      <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />
      <div className="related-tasks">
        <TaskList user={user} title={'Tasks for this case'} tasks={tasks} />
      </div>
    </>
  );
}
