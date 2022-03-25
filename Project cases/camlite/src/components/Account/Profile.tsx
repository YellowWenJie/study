import React from 'react';
import { SummaryList } from 'govuk-react-jsx';
import { User } from '../User';

const link = {
  editName: '',

  editMobile: '',
  editWork: '',
  editEmail: '',
};

export function Profile(props: { item: User | undefined }) {
  const { item } = props;

  if (!item) return <p>No User</p>;

  const rowOrder = ['name', 'phone.mobile', 'phone.work', 'email'];
  const rowOrder2 = ['role', 'userid', 'team', 'organisation'];

  const rowDesc: any = {
    id: {
      key: {
        children: 'ID',
      },
      value: {
        children: item.id,
      },
    },
    name: {
      key: {
        children: 'Name',
      },
      value: {
        children: `${item.firstName} ${item.lastName}`,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editName,
            visuallyHiddenText: 'name',
          },
        ],
      },
    },
    'phone.mobile': {
      key: {
        children: 'Mobile phone',
      },
      value: {
        children: item.phone ? item.phone.mobile : '---',
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editMobile,
            visuallyHiddenText: 'mobile number',
          },
        ],
      },
    },
    'phone.work': {
      key: {
        children: 'Work phone',
      },
      value: {
        children: item.phone ? item.phone.work : '---',
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editWork,
            visuallyHiddenText: 'work number',
          },
        ],
      },
    },
    email: {
      key: {
        children: 'Email address',
      },
      value: {
        children: `${item.email}`,
      },
      actions: {
        items: [
          {
            children: 'Change',
            href: link.editEmail,
            visuallyHiddenText: 'email',
          },
        ],
      },
    },
    role: {
      key: {
        children: 'Job Role',
      },
      value: {
        children: `${item.role}`,
      },
    },
    userid: {
      key: {
        children: 'User Id',
      },
      value: {
        children: `${item.id}`,
      },
    },
    team: {
      key: {
        children: 'Team',
      },
      value: {
        children: `${item.teamId}`,
      },
    },
    organisation: {
      key: {
        children: 'Organisation',
      },
      value: {
        children: `${item.organisation}`,
      },
    },
  };

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-l">My profile</h1>
          <p className="govuk-body govuk-!-margin-bottom-7">
            To edit your contact details, click change. Account details can only
            be edited by the administrator.
          </p>
          <form method="post" className="form">
            <h1 className="govuk-heading-m">Contact details</h1>
            <SummaryList
              rows={rowOrder.map((order: string) => rowDesc[order])}
            />
            <h1 className="govuk-heading-m">Account details</h1>
            <SummaryList
              rows={rowOrder2.map((order: string) => rowDesc[order])}
            />
          </form>
        </div>
      </div>
    </>
  );
}
