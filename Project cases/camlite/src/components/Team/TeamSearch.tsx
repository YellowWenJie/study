import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button, Select } from 'govuk-react-jsx';
import { deleteEmpty, convertDates } from '../../helpers/search';
import { User } from '../User';
import dwp from '../../helpers/dwp';

interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

const link = {
  employeeSearch: '/team/search',
  employeeSearchResult: '/team',
  newQuery: '/query/new',
};

export default function TeamSearch(props: { target: string; user: User }) {
  const { target, user } = props;

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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (target) {
      // remove empty values
      let obj = deleteEmpty(formState);

      // convert into a URL/route for cases/tasks
      let params = new URLSearchParams(obj).toString();
      if (params) {
        history.push(`${target}?${params}`);
      }
    }
  }

  function saveQuery(event: FormEvent) {
    event.preventDefault();
    // remove empty values
    let obj = deleteEmpty(formState);
    // convert into a URL/route
    let params = new URLSearchParams(obj).toString();
    let caseQuery = {
      usersId: user.id,
      title: 'Employee',
      urlHistory: link.employeeSearch,
      params: `${link.employeeSearchResult}?${params}`,
    };
    // Pass data to NewQuery component
    history.push({
      pathname: link.newQuery,
      state: caseQuery,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={'govuk-grid-row'}>
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-l">Search employees</h1>
        </div>
        <div className={'govuk-grid-column-one-half'}>
          <Input
            name="firstName"
            id="first-name"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'First Name',
            }}
            type="text"
          />
          <Input
            name="lastName"
            id="last-name"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Last Name',
            }}
            type="text"
          />
          <Input
            name="id"
            id="userid"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'User Id',
            }}
            type="text"
          />
          <Input
            name="staffNo"
            id="staff-number"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Staff Number',
            }}
            type="text"
          />
        </div>
        <div className={'govuk-grid-column-one-half'}>
          <Input
            name="sensitive"
            id="sensitive"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Nationally Sensitive',
            }}
            type="text"
          />
          <Select
            name="status"
            id="availability"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Availability',
            }}
            items={[
              { children: '---', value: '' },
              ...dwp.available.map((a: string) => ({ children: a })),
            ]}
          />
          <Input
            name="callbackSkill"
            id="callback"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Callback skill (Enquire Only)',
            }}
            type="text"
          />
        </div>
      </div>
      <div className={'govuk-grid-row'}>
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
