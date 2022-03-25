import { ChangeEvent, useState, FormEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BackLink, Radios, Button, Fieldset } from 'govuk-react-jsx';
import {
  deleteCaseQuery,
  deleteTaskQuery,
  deleteEmployeeQuery,
  deleteCustomerQuery,
} from '../../services/API';

const link = {
  queryConfirmation: '/query/confirm',
};

interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

export default function DeleteQuery() {
  const { backUrl, id, name } = useParams();
  const [formState, setState] = useState(initial);
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (formState.deleteQuery === 'yes') {
      switch (backUrl) {
        case 'case':
          deleteCaseQuery(id).then(items => {
            history.push(
              `${link.queryConfirmation}/${backUrl}/${name} query deleted`
            );
          });
          break;
        case 'task':
          deleteTaskQuery(id).then(items => {
            history.push(
              `${link.queryConfirmation}/${backUrl}/${name} query deleted`
            );
          });
          break;
        case 'employee':
          deleteEmployeeQuery(id).then(items => {
            history.push(
              `${link.queryConfirmation}/${backUrl}/${name} query deleted`
            );
          });
          break;
        case 'customer':
          deleteCustomerQuery(id).then(items => {
            history.push(
              `${link.queryConfirmation}/${backUrl}/${name} query deleted`
            );
          });
          break;
      }
    } else {
      history.push(`/query/${backUrl}`);
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
      console.log(newState);
      setState(newState);
    }
  }

  return (
    <>
      <BackLink href={`/query/${backUrl}`}>Back</BackLink>
      <form onSubmit={handleSubmit}>
        <Fieldset
          legend={{
            children: `Are you sure you want to delete ${name} query?`,
            className: 'govuk-fieldset__legend--l',
            isPageHeading: true,
          }}
        >
          <Radios
            hint={{
              children: '',
            }}
            items={[
              {
                children: 'Yes, delete this query',
                value: 'yes',
              },
              {
                children: 'No, return to the queries list',
                value: 'no',
              },
            ]}
            name="deleteQuery"
            onChange={handleInputChange}
          />
        </Fieldset>
        <Button element="input" name="deleteQuery">
          Continue
        </Button>
      </form>
    </>
  );
}
