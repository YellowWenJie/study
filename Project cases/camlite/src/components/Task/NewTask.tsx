import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Label, Hint, Checkboxes } from 'govuk-react-jsx';
import { Input, TextArea, DateInput, Select } from '../FormComponents';
import { deleteEmpty, convertDates } from '../../helpers/search';
import { useHistory } from 'react-router-dom';
import { Customer, CustomerDetails } from '../Customer';
import { Breadcrumbs } from 'govuk-react-jsx';
import { getCustomers } from '../../services/API';
import { postTask } from '../../services/API';
import { User } from '../User';
import dwp from '../../helpers/dwp';
import validation from '../../helpers/validation';
import moment from 'moment';
import { routes } from '../../helpers/routes';

interface FormState {
  [key: string]: any;
}

const initial: FormState = {
  assignedTo: '',
  casesId: '',
  claimId: '',
  'clearTaskBy-day': '',
  'clearTaskBy-month': '',
  'clearTaskBy-year': '',
  'createdOn-day': '',
  'createdOn-month': '',
  'createdOn-year': '',
  'dueDate-day': '',
  'dueDate-month': '',
  'dueDate-year': '',
  ownerName: '',
  'startTaskFrom-day': '',
  'startTaskFrom-month': '',
  'startTaskFrom-year': '',
  state: '',
  subType: '',
  taskId: '',
  taskSLADocBF: '',
  type: '',
  ownerId: '',
};

const initialCustomer: Customer = {
  firstName: '',
  lastName: '',
  nino: '',
  crn: 0,
  dateOfBirth: '',
  dateOfDeath: '',
  phone: {},
  language: {},
};

const dateMap = [
  { key: 'createdOn', search: 'createdOn' },
  { key: 'startTaskFrom', search: 'startTaskFrom' },
  { key: 'dueDate', search: 'dueDate' },
  { key: 'clearTaskBy', search: 'clearTaskBy' },
];

const formKeys = [
  'createdOn',
  'type',
  'subType',
  'state',
  'surname',
  'ni',
  'crn',
  'ownerId',
  'ownerName',
  'userId',
  'dueDate',
  'casesId',
  'claimId',
  'clearTaskBy',
  'assignedTo',
  'note',
  'taskId',
  'taskSLADocBF',
  'startTaskFrom',
];

const link = {
  task: '/task',
};

export default function NewTask(props: { user: User }) {
  const { id } = useParams();
  const { user } = props;
  const [formState, setState] = useState(initial);
  const [validationState, setValidationState] = useState<string[]>([]);
  const [customer, setCustomer] = useState(initialCustomer);
  let history = useHistory();

  const page = [
    {
      children: 'Customers',
      href: routes.customers,
    },
    {
      children: 'Customer details',
      href: `${routes.customer}${id}`,
    },
    {
      children: 'Create new task',
      href: `new`,
    },
  ];

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { type, checked, name, value } = target;
    if (target) {
      const val = type === 'checkbox' ? checked : value;
      const newState = {
        ...formState,
        [name]: val,
      };
      setValidationState(validationState.filter(el => el !== name));
      setState(newState);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // Validation
    const validationResult = validation(formState);
    setValidationState(validationResult);

    if (validationResult.length === 0) {
      let dateValidation = [];
      const today = moment(moment.now()).format('YYYY-MM-DD');
      let obj = convertDates(formState, dateMap);

      if (!moment(obj.createdOn).isSame(today)) {
        dateValidation.push('createdOn');
      }
      if (!moment(obj.dueDate).isSameOrAfter(today)) {
        dateValidation.push('dueDate');
      }
      if (!moment(obj.startTaskFrom).isSameOrAfter(today)) {
        dateValidation.push('startTaskFrom');
      }
      if (!moment(obj.clearTaskBy).isSameOrAfter(today)) {
        dateValidation.push('clearTaskBy');
      }
      setValidationState(dateValidation);

      if (dateValidation.length === 0) {
        // remove empty values
        // obj = deleteEmpty(obj, formKeys);
        let params = {
          ...formState,
          customerName: `${customer.firstName} ${customer.lastName}`,
          nino: customer.nino,
          crn: customer.crn,
          userId: user.id,
        };

        postTask(params).then(response => {
          if (response && response.message === 'Success') {
            history.push(`${link.task}/${response.data.id}`);
          }
        });
      }
    }
  }

  useEffect(() => {
    getCustomers({ id }).then(items => {
      setCustomer(items[0]);
    });
  }, []);

  return (
    <>
      <Breadcrumbs items={[...page]} />
      {customer && CustomerDetails(customer)}
      <form onSubmit={handleSubmit} className="govuk-!-margin-top-7">
        <div className={'govuk-grid-row'}>
          <div className="govuk-grid-column-full">
            <h1 className="govuk-heading-l">Create new task</h1>
          </div>
          <div className={'govuk-grid-column-one-half'}>
            <Input
              id={'taskId'}
              name={'taskId'}
              label={'Task ID'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'taskId')
                  ? `Please fill out the task id field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
            <DateInput
              id="created-on"
              namePrefix="createdOn"
              label={'Created on'}
              handleInputChange={handleInputChange}
              hint={`For example, ${moment(moment.now()).format('DD MM YYYY')}`}
              items={[
                {
                  className: 'govuk-input--width-2',
                  name: 'day',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-2',
                  name: 'month',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-4',
                  name: 'year',
                  maxLength: 4,
                },
              ]}
              errorMessage={
                validationState.some((el: string) => el === 'createdOn')
                  ? 'The date for case creation should be today!'
                  : validationState.some((el: string) =>
                      el.includes('createdOn')
                    )
                  ? `The date's value should be filled out as shown in the above example!`
                  : ''
              }
            />
            <Select
              id="type"
              name="type"
              label={'Type'}
              className="govuk-select govuk-!-width-one-half"
              handleInputChange={handleInputChange}
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
              errorMessage={
                validationState.some((el: string) => el === 'type')
                  ? 'Please choose a type from the below dropdown list!'
                  : ''
              }
            />
            <Select
              id="subType"
              name="subType"
              label={'Sub-Type'}
              className="govuk-select govuk-!-width-one-half"
              handleInputChange={handleInputChange}
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
              errorMessage={
                validationState.some((el: string) => el === 'subType')
                  ? 'Please choose a sub type from the below dropdown list!'
                  : ''
              }
            />
            <Select
              id="state"
              name="state"
              label={'state'}
              className="govuk-select govuk-!-width-one-half"
              handleInputChange={handleInputChange}
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
              errorMessage={
                validationState.some((el: string) => el === 'state')
                  ? 'Please choose a state from the below dropdown list!'
                  : ''
              }
            />
            <Input
              id={'taskSLADocBF'}
              name={'taskSLADocBF'}
              label={'Task SLA/ Doc BF'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'taskSLADocBF')
                  ? `Please fill out the Task SLA/ Doc BF field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
            <DateInput
              id="startTaskFrom"
              namePrefix="startTaskFrom"
              label={'Start task from'}
              handleInputChange={handleInputChange}
              hint={`For example, ${moment(moment.now()).format('DD MM YYYY')}`}
              items={[
                {
                  className: 'govuk-input--width-2',
                  name: 'day',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-2',
                  name: 'month',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-4',
                  name: 'year',
                  maxLength: 4,
                },
              ]}
              errorMessage={
                validationState.some((el: string) => el === 'startTaskFrom')
                  ? 'The start task date should be a date in the future!'
                  : validationState.some((el: string) =>
                      el.includes('startTaskFrom')
                    )
                  ? `The date's value should be filled out as shown in the above example!`
                  : ''
              }
            />
            <DateInput
              id="clearTaskBy"
              namePrefix="clearTaskBy"
              label={'Clear task by'}
              handleInputChange={handleInputChange}
              hint={`For example, ${moment(moment.now()).format('DD MM YYYY')}`}
              items={[
                {
                  className: 'govuk-input--width-2',
                  name: 'day',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-2',
                  name: 'month',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-4',
                  name: 'year',
                  maxLength: 4,
                },
              ]}
              errorMessage={
                validationState.some((el: string) => el === 'clearTaskBy')
                  ? 'The clear task date should be a date in the future!'
                  : validationState.some((el: string) =>
                      el.includes('clearTaskBy')
                    )
                  ? `The date's value should be filled out as shown in the above example!`
                  : ''
              }
            />
            <Input
              id={'ownerId'}
              name={'ownerId'}
              label={'Owner ID'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'ownerId')
                  ? `Please fill out the owner id field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
          </div>
          <div className={'govuk-grid-column-one-half'}>
            <Input
              id={'ownerName'}
              name={'ownerName'}
              label={'Owner name'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'ownerName')
                  ? `Please fill out the owner's name field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
            <Input
              id={'assignedTo'}
              name={'assignedTo'}
              label={'Assigned to'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'assignedTo')
                  ? `Please fill out the assigned to field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
            <div className="govuk-form-group">
              <Label className="govuk-label">Customer surname</Label>
              <Hint name="surname" id="surname" className="govuk-hint">
                {customer.firstName} {customer.lastName}
              </Hint>
            </div>
            <div className="govuk-form-group">
              <Label className="govuk-label">NINO</Label>
              <Hint name="nino" id="nino" className="govuk-hint">
                {customer.nino}
              </Hint>
            </div>
            <div className="govuk-form-group">
              <Label className="govuk-label">CRN</Label>
              <Hint id="crn" className="govuk-hint">
                {customer.crn}
              </Hint>
            </div>
            <DateInput
              id="dueDate"
              namePrefix="dueDate"
              label={'Due date'}
              handleInputChange={handleInputChange}
              hint={`For example, ${moment(moment.now()).format('DD MM YYYY')}`}
              items={[
                {
                  className: 'govuk-input--width-2',
                  name: 'day',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-2',
                  name: 'month',
                  max: 31,
                  min: 1,
                  maxLength: 2,
                },
                {
                  className: 'govuk-input--width-4',
                  name: 'year',
                  maxLength: 4,
                },
              ]}
              errorMessage={
                validationState.some((el: string) => el === 'dueDate')
                  ? 'The due date should be a date in the future!'
                  : validationState.some((el: string) => el.includes('dueDate'))
                  ? `The date's value should be filled out as shown in the above example!`
                  : ''
              }
            />
            <Input
              id={'casesId'}
              name={'casesId'}
              label={'Case ID'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'casesId')
                  ? `Please fill out the case id field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
            <Input
              id={'claimId'}
              name={'claimId'}
              label={'Claim ID'}
              className={'govuk-!-width-one-half'}
              errorMessage={
                validationState.some((el: string) => el === 'claimId')
                  ? `Please fill out the claim id field!`
                  : ''
              }
              handleInputChange={handleInputChange}
            />
            <Checkboxes
              items={[
                {
                  children: 'Urgent',
                  value: 'Urgent',
                },
              ]}
              name="urgent"
              onChange={handleInputChange}
            />
          </div>
          <div className={'govuk-grid-column-full'}>
            <TextArea
              id={'note'}
              name={'note'}
              label={'Add note'}
              className={'govuk-!-width-one-half'}
              errorMessage={''}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className={'govuk-grid-column-full'}>
            <Button element="input" name="save">
              Save and continue
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
