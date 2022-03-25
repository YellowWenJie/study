import { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import { Button, BackLink, Label, Radios } from 'govuk-react-jsx';
import { updateCases } from '../../services/API';
import { User } from '../User';
interface FormState {
  [key: string]: any;
}

const initial: FormState = {};

export default function ChangeCaseOwner(props: { user: User }) {
  const { user } = props;
  const { state } = useLocation();
  const [formState, setState] = useState(initial);
  const history = useHistory();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (state) {
      const theCase: any = state.case[0];
      let ownerName = '';
      let updatedCase = {
        id: theCase.id,
        usersId: '',
        customersId: theCase.customersId,
        customerName: theCase.customerName,
        crn: theCase.crn,
        nino: theCase.nino,
        ownerName: ``,
        teamId: theCase.teamId,
        createdOn: theCase.createdOn,
        type: theCase.type,
        subType: theCase.subType,
        state: theCase.state,
        benefit: theCase.benefit,
        resolution: theCase.resolution,
        resolutionDate: theCase.resolutionDate,
        dueDate: theCase.dueDate,
        claimId: theCase.claimId,
        priority: theCase.priority,
      };
      if (formState.owner === 'Myself') {
        updateCases(state.case[0].id, {
          ...updatedCase,
          ...{
            usersId: user.id,
            ownerName: `${user.firstName}${user.lastName}`,
          },
        });
        ownerName = `${user.firstName} ${user.lastName}`;
      } else {
        updateCases(state.case[0].id, {
          ...updatedCase,
          ...{ usersId: '', ownerName: `` },
        });

        ownerName = `Team's Queue`;
      }
      history.push({
        pathname: `${routes.cases}/all`,
        state: {
          notificationMessage: `Case owner changed to ${ownerName}`,
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
        <Label className="govuk-label--l">Change the owner of the Case</Label>
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
