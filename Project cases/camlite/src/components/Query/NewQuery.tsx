import { ChangeEvent, useState, FormEvent } from 'react';
import {
  postCaseQuery,
  postTaskQuery,
  postEmployeeQuery,
  postCustomerQuery,
} from '../../services/API';
import { Button, BackLink, Label } from 'govuk-react-jsx';
import { Input } from '../FormComponents';
import { useLocation, useHistory } from 'react-router-dom';

interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

const link = {
  queryConfirmation: '/query/confirm',
};

export default function NewQuery() {
  const [formState, setState] = useState(initial);
  const history = useHistory();
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState('');
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (formState.queryName && formState.queryName !== '') {
      // Case Query
      let query = {
        usersId: state.usersId,
        name: formState.queryName,
        link: state.params,
      };
      // Post new Case Query
      switch (state.title) {
        case 'Case':
          postCaseQuery(query).then(response => {
            if (response && response.message === 'Success') {
              history.push(`${link.queryConfirmation}/case/New query created`);
            }
          });
          break;
        case 'Task':
          postTaskQuery(query).then(response => {
            if (response && response.message === 'Success') {
              history.push(`${link.queryConfirmation}/task/New query created`);
            }
          });
          break;
        case 'Employee':
          postEmployeeQuery(query).then(response => {
            if (response && response.message === 'Success') {
              history.push(
                `${link.queryConfirmation}/employee/New query created`
              );
            }
          });
          break;
        case 'Customer':
          postCustomerQuery(query).then(response => {
            if (response && response.message === 'Success') {
              history.push(
                `${link.queryConfirmation}/customer/New query created`
              );
            }
          });
          break;
      }
    } else {
      setErrorMessage(`Please fill out the query name field!`);
    }
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { type, checked, name, value } = target;
    if (target) {
      const val = type === 'checkbox' ? checked : value;
      const newState = {
        ...formState,
        [name]: val,
      };
      setErrorMessage('');
      setState(newState);
    }
  }

  return (
    <>
      <BackLink href={state.urlHistory}>Back</BackLink>
      <form onSubmit={handleSubmit}>
        <span className="govuk-caption-l">New query</span>
        <Label className="govuk-label--l">
          How do you want to name this query?
        </Label>
        <Input
          id={'queryName'}
          name={'queryName'}
          label={'Owner name'}
          className={'govuk-!-width-one-half'}
          errorMessage={errorMessage !== '' ? errorMessage : ''}
          handleInputChange={handleInputChange}
        />
        <Button element="input" name="saveQuery">
          Save and continue
        </Button>
      </form>
    </>
  );
}
