import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, DateInput, Fieldset, Button, Select } from 'govuk-react-jsx';
import { deleteEmpty, convertDates } from '../../helpers/search';
import { User } from '../User';
import dwp from '../../helpers/dwp';
import { routes } from '../../helpers/routes';

const link = {
  taskSearchResult: `${routes.tasks}/all`,
  taskSearch: `${routes.tasks}/search`,
  newQuery: `/query/new`,
};

interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

const dateMap = [
  { key: 'createdOn', search: 'createdOn_like' },
  { key: 'resolutionDate', search: 'resolutionDate_like' },
  { key: 'dueDate', search: 'dueDate_like' },
];

const formKeys = [
  'createdOn_like',
  'type',
  'subType',
  'benefit',
  'state',
  'lastName',
  'nino',
  'crn',
  'resolution',
  'resolutionDate_like',
  'dueDate_like',
  'casesId',
  'claimId',
  'preferredName',
  'gender',
  'postcode',
];

export default function TaskSearch(props: { user: User }) {
  const { user } = props;
  const [formState, setState] = useState(initial);
  let history = useHistory(); // declare here, inside a React component.

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { type, checked, name, value } = target;
    if (target) {
      const val = type === 'checkbox' ? checked : value;
      const newState = {
        ...formState,
        [name]: val,
      };
      setState(newState);
    }
  }

  function saveQuery(event: FormEvent) {
    event.preventDefault();
    // remove empty values
    let obj = convertDates(formState, dateMap);
    obj = deleteEmpty(obj, formKeys);
    // convert into a URL/route for cases/tasks
    let params = new URLSearchParams(obj).toString();
    let caseQuery = {
      usersId: user.id,
      title: 'Task',
      urlHistory: link.taskSearch,
      params: `${link.taskSearchResult}?${params}`,
    };
    // Pass data to NewQuery component
    history.push({
      pathname: link.newQuery,
      state: caseQuery,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // remove empty values
    let obj = convertDates(formState, dateMap);
    obj = deleteEmpty(obj, formKeys);

    // convert into a URL/route for cases/tasks
    let params = new URLSearchParams(obj).toString();
    if (params) {
      history.push(`${link.taskSearch}?${params}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={'govuk-grid-row'}>
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-l">Search Tasks</h1>
        </div>
        <div className={'govuk-grid-column-one-half'}>
          <Fieldset legend={{ children: 'Created on' }}>
            <DateInput
              namePrefix="createdOn"
              id="created-on"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 2007',
              }}
            />
          </Fieldset>
          <Select
            name="type"
            id="type"
            className="govuk-select govuk-!-width-one-half"
            onChange={handleInputChange}
            formGroup={{
              className: 'extra-class',
            }}
            items={[
              {
                children: '',
                value: '',
              },
              ...dwp.types.map(t => ({
                children: t,
                value: t,
              })),
            ]}
            label={{
              children: 'Type',
            }}
          />
          <Select
            name="subType"
            id="sub-type"
            className="govuk-select govuk-!-width-one-half"
            onChange={handleInputChange}
            formGroup={{
              className: 'extra-class',
            }}
            items={[
              {
                children: '',
                value: '',
              },
              ...dwp.subTypes.map(t => ({
                children: t,
                value: t,
              })),
            ]}
            label={{
              children: 'Sub-Type',
            }}
          />
          <Select
            name="benefit"
            id="benefit"
            className="govuk-select govuk-!-width-one-half"
            onChange={handleInputChange}
            formGroup={{
              className: 'extra-class',
            }}
            items={[
              {
                children: '',
                value: '',
              },
              ...dwp.benefits.map(t => ({
                children: t,
                value: t,
              })),
            ]}
            label={{
              children: 'Benefit',
            }}
          />
          <Select
            name="state"
            id="status"
            className="govuk-select govuk-!-width-one-half"
            onChange={handleInputChange}
            formGroup={{
              className: 'extra-class',
            }}
            items={[
              {
                children: '',
                value: '',
              },
              {
                children: 'New',
                value: 'new',
              },
              {
                children: 'Open',
                value: 'open',
              },
              {
                children: 'Closed',
                value: 'closed',
              },
            ]}
            label={{
              children: 'Status',
            }}
          />
          <Select
            name="resolution"
            id="resolution"
            className="govuk-select govuk-!-width-one-half"
            onChange={handleInputChange}
            formGroup={{
              className: 'extra-class',
            }}
            items={[
              {
                children: '',
                value: '',
              },
              ...dwp.resolutions.map(t => ({
                children: t,
                value: t,
              })),
            ]}
            label={{
              children: 'Case resolution',
            }}
          />
          <Fieldset legend={{ children: 'Case resolution selected on' }}>
            <DateInput
              namePrefix="resolutionDate"
              id="resolution-date"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 2007',
              }}
            />
          </Fieldset>
        </div>
        <div className={'govuk-grid-column-one-half'}>
          <Input
            name="lastName"
            id="lastname"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Customer surname',
            }}
            type="text"
          />
          <Input
            name="nino"
            id="nino"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'NINO',
            }}
            type="text"
            pattern="[A-Z]{2}\d{6}[A-Z]"
          />
          <Input
            name="crn"
            id="crn"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'CRN',
            }}
            type="text"
          />
          <Fieldset legend={{ children: 'Due date' }}>
            <DateInput
              namePrefix="dueDate"
              id="due-date"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 2007',
              }}
            />
          </Fieldset>
          <Input
            name="casesId"
            id="case-id"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Case ID',
            }}
            type="text"
          />
          <Input
            name="claimId"
            id="claim-id"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Claim ID',
            }}
            type="text"
          />
        </div>
        <div className={'govuk-grid-column-full'}>
          <Button element="input" name="search">
            Search
          </Button>
          <Button
            element="input"
            name="saveQuery"
            className="govuk-!-margin-left-5"
            onClick={(event: FormEvent) => saveQuery(event)}
          >
            Save query
          </Button>
        </div>
      </div>
    </form>
  );
}
