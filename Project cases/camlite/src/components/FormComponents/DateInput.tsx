import { DateInput } from 'govuk-react-jsx';

export default function InputComponent(props: {
  id: string;
  namePrefix: string;
  label: string;
  hint: string;
  items: any;
  errorMessage: string;
  handleInputChange: any;
}) {
  const {
    id,
    namePrefix,
    label,
    hint,
    items,
    errorMessage,
    handleInputChange,
  } = props;

  return errorMessage === '' ? (
    <DateInput
      id={id}
      namePrefix={namePrefix}
      onChange={handleInputChange}
      hint={{
        children: hint,
      }}
      items={items}
      fieldset={{
        legend: {
          children: label,
        },
      }}
    />
  ) : (
    <DateInput
      id={id}
      namePrefix={namePrefix}
      onChange={handleInputChange}
      hint={{
        children: hint,
      }}
      items={items}
      fieldset={{
        legend: {
          children: label,
        },
      }}
      errorMessage={{
        children: errorMessage,
      }}
    />
  );
}
