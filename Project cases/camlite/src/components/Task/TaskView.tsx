import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from 'govuk-react-jsx';
import { User } from '../User';
import {
  getCases,
  getCustomer,
  getTasks,
  getUser,
  patchTask,
} from '../../services/API';
import { Context, CTX } from '../../context/setGlobalDataContext';
import DetailsRelated from '../details/DetailsRelated';
import './task.scss';
import { CustomerDetails } from '../Customer';
import { priorityTag } from '../Case';
import { routes } from '../../helpers/routes';
import { CaseList } from '../Cases';
import { TaskForm } from './TaskForm';

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

export default function TaskView(props: { user: User }) {
  const { user } = props;

  let { id } = useParams();

  const ctx = useContext(Context) as CTX;
  const aTask = ctx.getValue('task');
  const [customer, setCustomer] = useState();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getTasks({ id }).then(async items => {
      ctx.setValue('task', items[0]);
      const [customer, cases] = await Promise.all([
        getCustomer(items[0].crn),
        getCases({ id: items[0].casesId }),
      ]);
      setCustomer(customer);
      setCases(cases);
    });
  }, [id]);

  function onChange(data: any) {
    patchTask(id, data).then(data => {
      ctx.setValue('task', data);
    });
  }

  const customerRoute = customer ? `${routes.customer}/${aTask.crn}` : '';
  const taskRoute = `${routes.task}/${id}`;

  const linkItems = [
    { link: `/notes/task/${id}`, title: 'View and add task notes' },
    { link: `${taskRoute}/history`, title: 'View task history' },
    { link: `${taskRoute}/close`, title: 'Close this task' },
    { link: `${taskRoute}/DRS`, title: 'View tasks documents' },
    { link: `${customerRoute}/DRS`, title: 'View customer documents' },
    { link: `${customerRoute}/tasks`, title: 'View customer tasks list' },
    { link: `${customerRoute}`, title: 'View customer details' },
    { link: `${customerRoute}/task/new`, title: 'Create new task' },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          {
            children: 'Tasks',
            href: '/tasks',
          },
          {
            children: 'Teams all tasks',
            href: '/tasks/all',
          },
          {
            children: 'Details',
            href: `/task/${id}`,
          },
        ]}
      />
      {customer && CustomerDetails(customer)}
      <div className={'govuk-grid-row details-container'}>
        <div className={'govuk-grid-column-two-thirds'}>
          <h1 className="govuk-heading-l">Task Details</h1>
          {aTask && priorityTag(aTask.priority)}
          {aTask ? (
            <TaskForm aTask={aTask} onChange={onChange} />
          ) : (
            <p>No Task Found</p>
          )}
        </div>
        <DetailsRelated
          buttonName="Re-assign task"
          linkItems={linkItems}
          assign={link.assign}
        />
      </div>
      <div className={'govuk-grid-row'}>
        <div className={'govuk-grid-column-full govuk-!-margin-top-7'}>
          <hr />
        </div>
      </div>
      <div className="related-cases">
        <CaseList user={user} title={'Cases for this task'} cases={cases} />
      </div>
    </>
  );
}
