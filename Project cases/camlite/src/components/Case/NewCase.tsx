import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Breadcrumbs, Label, Hint } from 'govuk-react-jsx';
import { Input, TextArea, DateInput, Select } from '../FormComponents';
import { deleteEmpty, convertDates } from '../../helpers/search';
import { useHistory } from 'react-router-dom';
import { Customer } from '../Customer';
import { CustomerDetails } from '../Customer';
import { getCustomers } from '../../services/API';
import { postCase } from '../../services/API';
import { User } from '../User';
import dwp from '../../helpers/dwp';
import validation from '../../helpers/validation';
import moment from 'moment';

interface FormState {
  [key: string]: any;
}

const initial: FormState = {
  benefit: '',
  claimId: '',
  'createdOn-day': '',
  'createdOn-month': '',
  'createdOn-year': '',
  'dueDate-day': '',
  'dueDate-month': '',
  'dueDate-year': '',
  ownerName: '',
  resolution: '',
  'resolutionDate-day': '',
  'resolutionDate-month': '',
  'resolutionDate-year': '',
  state: '',
  subType: '',
  type: '',
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
  { key: 'resolutionDate', search: 'resolutionDate' },
  { key: 'dueDate', search: 'dueDate' },
];

const formKeys = [
  'benefit',
  'claimId',
  'createdOn',
  'dueDate',
  'note',
  'ownerName',
  'resolution',
  'resolutionDate',
  'state',
  'subType',
  'type',
];

const link = {
  case: '/case',
};

export default function NewCase(props: { user: User }) {
  const { id } = useParams();
  const { user } = props;
  const [formState, setState] = useState(initial);
  const [validationState, setValidationState] = useState<string[]>([]);
  const [customer, setCustomer] = useState(initialCustomer);

  let history = useHistory();

  const page = [
    {
      children: 'Customers',
      href: '/customers',
    },
    {
      children: 'Customers details',
      href: `/customer/${id}`,
    },
    {
      children: 'Customer new case',
      href: `new`,
    },
  ];

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { type, checked, name, value } = target;
    if (target) {
      const val = type === 'checkbox' ? checked : value;
      let newState = {
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
      if (!moment(obj.resolutionDate).isSameOrAfter(today)) {
        dateValidation.push('resolutionDate');
      }
      setValidationState(dateValidation);

      if (dateValidation.length === 0) {
        obj = deleteEmpty(obj, formKeys);
        //add mandatory fields
        const params = {
          ...obj,
          usersId: user.id,
          customersId: customer.crn,
          // TODO: following fields to keep mock server happy
          ownerName: `${user.firstName} ${user.lastName}`,
          customerName: `${customer.firstName} ${customer.lastName}`,
          nino: customer.nino,
          crn: customer.crn,
        };

        postCase(params).then(response => {
          if (response && response.message === 'Success') {
            history.push(`${link.case}/${response.data.id}`);
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

  // const today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // const yyyy = today.getFullYear();

  return (
    <>
      <Breadcrumbs items={[...page]} />
      {customer && CustomerDetails(customer)}
      <form onSubmit={handleSubmit} className="govuk-!-margin-top-7" noValidate>
        <div className={'govuk-grid-row'}>
          <div className="govuk-grid-column-full">
            <h1 className="govuk-heading-l">Create new case</h1>
          </div>
          <div className={'govuk-grid-column-one-half'}>
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
                  max: 12,
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
              id="benefit"
              name="benefit"
              label={'Benefit'}
              className="govuk-select govuk-!-width-one-half"
              handleInputChange={handleInputChange}
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
              errorMessage={
                validationState.some((el: string) => el === 'benefit')
                  ? 'Please choose a benefit from the below dropdown list!'
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
            <Select
              id="resolution"
              name="resolution"
              label={'Case resolution'}
              className="govuk-select govuk-!-width-one-half"
              handleInputChange={handleInputChange}
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
              errorMessage={
                validationState.some((el: string) => el === 'resolution')
                  ? 'Please choose a resolution from the below dropdown list!'
                  : ''
              }
            />
            <DateInput
              id="resolutionDate"
              namePrefix="resolutionDate"
              label={'Case resolution selected on'}
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
                  max: 12,
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
                validationState.some((el: string) => el === 'resolutionDate')
                  ? 'The resolution date should be a date in the future!'
                  : validationState.some((el: string) =>
                      el.includes('resolutionDate')
                    )
                  ? `The date's value should be filled out as shown in the above example!`
                  : ''
              }
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
                  max: 12,
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
            <div className="govuk-form-group">
              <Label className="govuk-label">Case ID</Label>
              <Hint name="casesId" id="case-id" className="govuk-hint">
                New Case ID
              </Hint>
            </div>
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
            <div className="govuk-form-group">
              <Label className="govuk-label">System</Label>
              <Hint id="system" className="govuk-hint">
                ----
              </Hint>
            </div>
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
