import { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import { Button, BackLink, Label, Radios } from 'govuk-react-jsx';
import { updateTasks } from '../../services/API';
import { User } from '../User';

interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

export default function ChangeTaskOwner(props: { user: User }) {
  const { user } = props;
  const { state } = useLocation();
  const [formState, setState] = useState(initial);
  const history = useHistory();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (state) {
      const theTask: any = state.task[0];
      let ownerName = '';
      let updatedTask = {
        id: theTask.id,
        teamId: theTask.teamId,
        casesId: theTask.casesId,
        usersId: '',
        customersId: theTask.customersId,
        crn: theTask.crn,
        customerName: theTask.customerName,
        nino: theTask.nino,
        ownerName: ``,
        createdOn: theTask.createdOn,
        type: theTask.type,
        subType: theTask.subType,
        state: theTask.state,
        benefit: theTask.benefit,
        resolution: theTask.resolution,
        resolutionDate: theTask.resolutionDate,
        dueDate: theTask.dueDate,
        claimId: theTask.claimId,
        priority: theTask.priority,
      };

      if (formState.owner === 'Myself') {
        updateTasks(theTask.id, {
          ...updatedTask,
          ...{
            usersId: user.id,
            ownerName: `${user.firstName}${user.lastName}`,
          },
        });
        ownerName = `${user.firstName} ${user.lastName}`;
      } else {
        updateTasks(theTask.id, {
          ...updatedTask,
          ...{ usersId: '', ownerName: `` },
        });

        ownerName = `Team's Queue`;
      }
      history.push({
        pathname: `${routes.tasks}/all`,
        state: {
          notificationMessage: `Task owner changed to ${ownerName}`,
        },
      });
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
      setState(newState);
    }
  }

  return (
    <>
      <BackLink href={state.urlHistory}>Back</BackLink>
      <form onSubmit={handleSubmit}>
        <Label className="govuk-label--l">Change the owner of the Task</Label>
        <Radios
          items={[
            {
              children: 'Myself',
              value: `Myself`,
            },
            {
              children: `Team's queue`,
              value: 'Teams-queue',
            },
          ]}
          name="owner"
          onChange={handleInputChange}
        />

        <Button element="input" name="save">
          Save and continue
        </Button>
      </form>
    </>
  );
}
