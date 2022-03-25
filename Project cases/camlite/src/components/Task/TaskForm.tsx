import { TaskTag } from './TaskTag';
import { longMonth } from '../../helpers/dwp';
import { routes } from '../../helpers/routes';
import { Task } from './Task';
import { Checkboxes, SummaryList } from 'govuk-react-jsx';
import { Priority } from '../Case';

export function TaskForm(props: {
  aTask: Task;
  onChange?: (data: any) => void;
}) {
  const { aTask, onChange } = props;
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
  const rowOrder = [
    'id',
    'createdOn',
    'type',
    'subType',
    'state',
    'customerName',
    'nino',
    'crn',
    'benefit',
    'resolution',
    'resolutionDate',
    'dueDate',
    'usersId',
    'ownerName',
    'claimId',
    'casesId',
    'priority',
  ];
  const rowDesc: any = {
    id: {
      key: {
        children: 'Task ID',
      },
      value: {
        children: aTask.id,
      },
    },
    createdOn: {
      key: {
        children: 'Created On',
      },
      value: {
        children: longMonth(aTask.createdOn),
      },
    },
    type: {
      key: {
        children: 'Type',
      },
      value: {
        children: aTask.type,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editType,
            visuallyHiddenText: 'type',
          },
        ],
      },
    },
    subType: {
      key: {
        children: 'Sub-type',
      },
      value: {
        children: aTask.subType,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editSubtype,
            visuallyHiddenText: 'sub-type',
          },
        ],
      },
    },
    state: {
      key: {
        children: 'Status',
      },
      value: {
        children: TaskTag(aTask.state),
      },
    },
    customerName: {
      key: {
        children: 'Customer Name',
      },
      value: {
        children: aTask.customerName,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editCustomerName,
            visuallyHiddenText: 'customer name',
          },
        ],
      },
    },
    nino: {
      key: {
        children: 'National Insurance Number',
      },
      value: {
        children: aTask.nino,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editNI,
            visuallyHiddenText: 'national insurance number',
          },
        ],
      },
    },
    crn: {
      key: {
        children: 'CRN',
      },
      value: {
        children: aTask.crn,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editCRN,
            visuallyHiddenText: 'CRN',
          },
        ],
      },
    },
    benefit: {
      key: {
        children: 'Benefit',
      },
      value: {
        children: aTask.benefit,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editBenefit,
            visuallyHiddenText: 'benefit',
          },
        ],
      },
    },
    resolution: {
      key: {
        children: 'Case Resolution',
      },
      value: {
        children: aTask.resolution,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editResolution,
            visuallyHiddenText: 'case resolution',
          },
        ],
      },
    },
    resolutionDate: {
      key: {
        children: 'Case Resolution selected on',
      },
      value: {
        children: longMonth(aTask.resolutionDate),
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editResolutionDate,
            visuallyHiddenText: 'case resolution selected on',
          },
        ],
      },
    },
    dueDate: {
      key: {
        children: 'Due Date',
      },
      value: {
        children: longMonth(aTask.dueDate),
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editDueDate,
            visuallyHiddenText: 'due date',
          },
        ],
      },
    },
    ownerId: {
      key: {
        children: 'Owner ID',
      },
      value: {
        children: aTask.usersId,
      },
    },
    ownerName: {
      key: {
        children: 'Owner Name',
      },
      value: {
        children: aTask.ownerName,
      },
    },
    claimId: {
      key: {
        children: 'Claim ID',
      },
      value: {
        children: aTask.claimId,
      },
    },
    casesId: {
      key: {
        children: 'Case ID',
      },
      value: {
        children: aTask.casesId,
      },
    },
    priority: {
      key: {
        children: 'Mark as Urgent',
      },
      value: {
        children: (
          <Checkboxes
            className={'govuk-checkboxes--small input-checkbox'}
            items={[
              {
                children: ' ',
                value: 'urgent',
                checked: aTask.priority,
                onChange: (e: any) => {
                  onChange &&
                    onChange({
                      priority: e.target.checked
                        ? Priority.urgent
                        : Priority.normal,
                    });
                },
              },
            ]}
            name="priority"
          />
        ),
      },
    },
  };

  return (
    <form action={link.assign} method="post" className="form">
      <SummaryList rows={rowOrder.map((order: string) => rowDesc[order])} />
    </form>
  );
}
