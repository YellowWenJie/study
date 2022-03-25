import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, DateInput, Fieldset, Button } from 'govuk-react-jsx';
import { convertDates, deleteEmpty } from '../../helpers/search';
import { User } from '../User';

// import { User } from '../User';

interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

const dateMap = [
  { key: 'birthStart', search: 'dateOfBirth_gte' },
  { key: 'birthEnd', search: 'dateOfBirth_lte' },
  { key: 'deathStart', search: 'dateOfDeath_gte' },
  { key: 'deathEnd', search: 'dateOfDeath_lte' },
];

const formKeys = [
  'nino',
  'crn',
  'firstName',
  'otherName',
  'lastName',
  'preferredName',
  'gender',
  'postcode',
  'dateOfBirth_gte',
  'dateOfBirth_lte',
  'dateOfDeath_gte',
  'dateOfDeath_lte',
];

const link = {
  customerSearch: '/customers/search',
  customerSearchResult: '/customers',
  newQuery: '/query/new',
};

export default function CustomerSearch(props: { target: string; user: User }) {
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

      let obj = convertDates(formState, dateMap);
      obj = deleteEmpty(obj, formKeys);

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
    let obj = convertDates(formState, dateMap);
    obj = deleteEmpty(obj, formKeys);
    // convert into a URL/route
    let params = new URLSearchParams(obj).toString();
    let caseQuery = {
      usersId: user.id,
      title: 'Customer',
      urlHistory: link.customerSearch,
      params: `${link.customerSearchResult}?${params}`,
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
          <h1 className="govuk-heading-l">Search customers</h1>
        </div>
        <div className={'govuk-grid-column-one-half'}>
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
            name="otherName"
            id="other-name"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Other Forename(s)',
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
            name="preferredName"
            id="preferred-name"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Preferred Name',
            }}
            type="text"
          />
          <Input
            name="gender"
            id="gender"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Gender',
            }}
            type="text"
            list={'gender-list'}
          />
          <Input
            name="postcode"
            id="postcode"
            className={'govuk-!-width-one-half'}
            onChange={handleInputChange}
            label={{
              children: 'Postcode',
            }}
            type="text"
          />
        </div>
        <div className={'govuk-grid-column-one-half'}>
          <Fieldset legend={{ children: 'Date of Birth Start' }}>
            <DateInput
              namePrefix="birthStart"
              id="birth-start"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 1990',
              }}
            />
          </Fieldset>
          <Fieldset legend={{ children: 'Date of Birth End' }}>
            <DateInput
              namePrefix="birthEnd"
              id="birth-end"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 1995',
              }}
            />
          </Fieldset>

          <Fieldset legend={{ children: 'Date of Death Start' }}>
            <DateInput
              namePrefix="deathStart"
              id="death-start"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 2018',
              }}
            />
          </Fieldset>
          <Fieldset legend={{ children: 'Date of Death End' }}>
            <DateInput
              namePrefix="deathEnd"
              id="death-end"
              onChange={handleInputChange}
              hint={{
                children: 'For example, 27 3 2019',
              }}
            />
          </Fieldset>
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
      <datalist id={'gender-list'}>
        <option value={'Male'} />
        <option value={'Female'} />
      </datalist>
    </form>
  );
}
