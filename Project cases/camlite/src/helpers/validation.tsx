const dayValidation = {
  formKeys: [
    'clearTaskBy-day',
    'createdOn-day',
    'dueDate-day',
    'resolutionDate-day',
    'startTaskFrom-day',
  ],
  rules: [
    { required: true },
    { isNumber: true },
    { maxLength: 2 },
    { min: 1 },
    { max: 31 },
  ],
};
const monthValidation = {
  formKeys: [
    'clearTaskBy-month',
    'createdOn-month',
    'dueDate-month',
    'resolutionDate-month',
    'startTaskFrom-month',
  ],
  rules: [
    { required: true },
    { isNumber: true },
    { maxLength: 2 },
    { min: 1 },
    { max: 12 },
  ],
};
const yearValidation = {
  formKeys: [
    'clearTaskBy-year',
    'createdOn-year',
    'dueDate-year',
    'resolutionDate-year',
    'startTaskFrom-year',
  ],
  rules: [{ required: true }, { isNumber: true }, { maxLength: 4 }],
};
const requiredValidation = {
  formKeys: [
    'assignedTo',
    'benefit',
    'casesId',
    'claimId',
    'ownerId',
    'ownerName',
    'resolution',
    'state',
    'subType',
    'taskId',
    'taskSLADocBF',
    'type',
  ],
  rules: [{ required: true }],
};

const patterns = {
  numbers: /^\d*$/,
};
export default function validation(items: { [x: string]: any }): string[] {
  let formErrorKeys = [];
  for (const [key, value] of Object.entries(items)) {
    if (dayValidation.formKeys.includes(key)) {
      // dayAndMonthValidation rules check
      if (
        !(value && value !== '') ||
        !patterns.numbers.test(value) ||
        !(value.length > 0 && value.length <= 2) ||
        !(Number(value) >= 1 && Number(value) <= 31)
      ) {
        formErrorKeys.push(key);
      }
    } else if (monthValidation.formKeys.includes(key)) {
      // yearValidation rules check
      if (
        !(value && value !== '') ||
        !patterns.numbers.test(value) ||
        !(value.length > 0 && value.length <= 2) ||
        !(Number(value) >= 1 && Number(value) <= 12)
      ) {
        formErrorKeys.push(key);
      }
    } else if (yearValidation.formKeys.includes(key)) {
      // requiredValidation rules check
      if (
        !(value && value !== '') ||
        !patterns.numbers.test(value) ||
        value.length !== 4
      ) {
        formErrorKeys.push(key);
      }
    } else if (requiredValidation.formKeys.includes(key)) {
      // requiredValidation rules check
      if (!(value && value !== '')) {
        formErrorKeys.push(key);
      }
    }
  }
  return formErrorKeys;
}
