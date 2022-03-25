import { longMonth } from '../../helpers/dwp';
import { Case, Priority } from './Case';
import { Checkboxes, SummaryList } from 'govuk-react-jsx';
import { CaseTag } from './CaseTag';

export function CaseForm(props: {
  aCase: Case | undefined;
  className: string;
  onChange?: (data: any) => void;
}) {
  const { aCase, className, onChange } = props;
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

  const rowOrder = [
    'casesId',
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
    'assigned',
    'claimId',
    'priority',
  ];

  if (!aCase) return <p className={className}>No Case</p>;

  const rowDesc: any = {
    id: {
      key: {
        children: 'ID',
      },
      value: {
        children: aCase.id,
      },
    },
    createdOn: {
      key: {
        children: 'Created On',
      },
      value: {
        children: longMonth(aCase.createdOn),
      },
    },
    type: {
      key: {
        children: 'Type',
      },
      value: {
        children: aCase.type,
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
        children: aCase.subType,
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
        children: CaseTag(aCase.state),
      },
    },
    customerName: {
      key: {
        children: 'Customer Name',
      },
      value: {
        children: aCase.customerName,
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
        children: 'NINO',
      },
      value: {
        children: aCase.nino,
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
        children: aCase.crn,
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
        children: aCase.benefit,
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
        children: 'Case resolution',
      },
      value: {
        children: aCase.resolution,
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
        children: 'Case resolution selected on',
      },
      value: {
        children: longMonth(aCase.resolutionDate),
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
        children: longMonth(aCase.dueDate),
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
    usersId: {
      key: {
        children: 'Owner ID',
      },
      value: {
        children: aCase.usersId,
      },
    },
    ownerName: {
      key: {
        children: 'Owner Name',
      },
      value: {
        children: aCase.ownerName,
      },
    },
    claimId: {
      key: {
        children: 'Claim ID',
      },
      value: {
        children: aCase.claimId,
      },
    },
    casesId: {
      key: {
        children: 'Case ID',
      },
      value: {
        children: aCase.id,
      },
    },
    assigned: {
      key: {
        children: 'Assigned to',
      },
      value: {
        children: aCase.ownerName,
      },
    },
    priority: {
      key: {
        children: 'Mark as Urgent',
      },
      value: {
        children: (
          <Checkboxes
            className={'govuk-checkboxes--small checkboxes'}
            items={[
              {
                children: ' ',
                value: 'urgent',
                checked: aCase.priority,
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
    <form action={link.assign} method="post" className={`form ${className}`}>
      <SummaryList rows={rowOrder.map((order: string) => rowDesc[order])} />
    </form>
  );
}
