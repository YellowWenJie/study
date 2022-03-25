import React from 'react';
import { SummaryList } from 'govuk-react-jsx';
import { longMonth } from '../../helpers/dwp';
import DWPKeyDetails from '../DWP/KeyDetails';
import MOJTimeLine from '../MOJ/TimeLine/MOJTimeLine';
import { Customer } from './Customer';

export const CustomerDetails = (customer: Customer) => {
  const top = [
    {
      name: 'Name:',
      value: `${customer.firstName} ${customer.lastName}`,
    },
    {
      name: 'National Insurance Number',
      value: customer.nino,
      type: 'nino',
    },
    {
      value: customer.behaviour ?? 'none',
      type: 'status',
    },
  ];

  const bottom = [
    { name: 'Date of birth:', value: longMonth(customer.dateOfBirth) },
    { name: 'Mobile:', value: customer.phone.mobile },
    {
      name: 'Language:',
      value: `${customer.language.written} ${customer.language.spoken}`,
    },
  ];

  return <DWPKeyDetails top={top} bottom={bottom} />;
};

const links = {
  addContact: 'add-new-contact-record',
  contactHistory: 'customer-contact-history',
};

export function MainDetails(props: any) {
  const { customer } = props;

  let summary1 = null,
    summary2 = null;

  if (customer) {
    summary1 = (
      <SummaryList
        rows={[
          {
            key: { children: 'Customer Name' },
            value: {
              children: `${customer.firstName} ${customer.lastName}`,
            },
          },
          {
            key: { children: 'Preferred Name' },
            value: {
              children: `${customer.preferredName}`,
            },
          },
          {
            key: { children: 'Gender' },
            value: {
              children: `${customer.gender}`,
            },
          },
          {
            key: { children: 'NINO' },
            value: {
              children: `${customer.nino}`,
            },
          },
          {
            key: { children: 'CRN' },
            value: {
              children: `${customer.crn}`,
            },
          },
          {
            key: { children: 'Date of Birth' },
            value: {
              children: longMonth(customer.dateOfBirth),
            },
          },
          {
            key: { children: 'Date of Death' },
            value: {
              children: longMonth(customer.dateOfDeath),
            },
          },
        ]}
      />
    );

    summary2 = (
      <SummaryList
        rows={[
          {
            key: {
              children: 'Preferred spoken language',
            },
            value: {
              children: `${customer.language.spoken}`,
            },
          },
          {
            key: {
              children: 'Preferred written language',
            },
            value: {
              children: `${customer.language.written}`,
            },
          },
          {
            key: {
              children: 'Accessibility Needs',
            },
            value: {
              children: '--',
            },
          },
          {
            key: {
              children: 'Unacceptable behaviour',
            },
            value: {
              children: '--',
            },
          },
          {
            key: {
              children: 'National Sensitivity Indicator',
            },
            value: {
              children: (
                <div
                  className="govuk-checkboxes govuk-checkboxes--small"
                  data-module="govuk-checkboxes"
                >
                  <div className="govuk-checkboxes__item">
                    <input
                      className="govuk-checkboxes__input"
                      id="waste"
                      name="waste"
                      type="checkbox"
                      value="carcasses"
                    />
                    <label
                      className="govuk-label govuk-checkboxes__label"
                      htmlFor="waste"
                    />
                  </div>
                </div>
              ),
            },
          },
        ]}
      />
    );
  }

  return (
    <>
      <div className="govuk-!-margin-top-2">
        <h1 className="govuk-heading-l">Personal details</h1>
        {customer && summary1}
      </div>
      <div className="govuk-!-margin-top-9">
        <h1 className="govuk-heading-l">Additional</h1>
        {customer && summary2}
      </div>
      <div className="govuk-!-margin-top-9">
        <p className="govuk-body">
          <a
            href="#"
            className="govuk-link"
            rel="noreferrer noopener"
            target="_blank"
          >
            {' '}
            View customer documents{' '}
          </a>{' '}
          link will open in a new window (DRS system).
        </p>
      </div>
    </>
  );
}

export function ContactDetails(props: { customer: any }) {
  const { customer } = props;
  if (!customer) return null;

  return (
    <>
      <h1 className="govuk-heading-l">Contact details</h1>
      {customer && (
        <>
          <SummaryList
            rows={[
              {
                key: {
                  children: 'Preferred contact method',
                },
                value: {
                  children: customer.preferContact,
                },
              },
              {
                key: {
                  children: 'Postcode',
                },
                value: {
                  children: customer.postcode,
                },
              },
              {
                key: {
                  children: 'Address',
                },
                value: {
                  children: customer.address,
                },
              },
              {
                key: {
                  children: 'Phone - mobile',
                },
                value: {
                  children: customer.phone.mobile,
                },
              },
              {
                key: {
                  children: 'Phone - work',
                },
                value: {
                  children: customer.phone.work,
                },
              },
              {
                key: {
                  children: 'Phone - home',
                },
                value: {
                  children: customer.phone.home,
                },
              },
            ]}
          />
          <div className="govuk-!-margin-top-9">
            <div className="govuk-button-group">
              <a href={links.addContact}>
                <button
                  className="govuk-button govuk-!-button-align-right"
                  data-module="govuk-button"
                >
                  Add new contact record
                </button>
              </a>
              <a href={links.contactHistory}>
                <button
                  className="govuk-button govuk-button--secondary"
                  data-module="govuk-button"
                >
                  View contact log
                </button>
              </a>
            </div>
          </div>
          <div className="govuk-!-margin-top-7">
            <h1 className="govuk-heading-l">Contact history notes</h1>
            <MOJTimeLine items={customer.notes} />
          </div>
        </>
      )}
    </>
  );
}

export function Representatives(props: { customer: any }) {
  const { customer } = props;
  return (
    <>
      <h1 className="govuk-heading-l">Representatives</h1>
      <p>Representatives for {customer.firstName}</p>
    </>
  );
}

export function Benefits(props: { customer: any }) {
  const { customer } = props;
  return (
    <>
      <h1 className="govuk-heading-l">Benefits</h1>
      <p>Benefits for {customer.firstName}</p>
    </>
  );
}
