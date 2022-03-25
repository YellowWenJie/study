import { Select as SelectComponent } from 'govuk-react-jsx';

export default function Select(props: {
  id: string;
  name: string;
  label: string;
  className: string;
  errorMessage: string;
  handleInputChange: any;
  items: any;
}) {
  const { id, name, label, className, handleInputChange, items, errorMessage } =
    props;

  return errorMessage === '' ? (
    <SelectComponent
      id={id}
      name={name}
      label={{
        children: label,
      }}
      className={className}
      type="text"
      onChange={handleInputChange}
      formGroup={{
        className: 'extra-class',
      }}
      items={items}
    />
  ) : (
    <SelectComponent
      id={id}
      name={name}
      label={{
        children: label,
      }}
      className={className}
      type="text"
      onChange={handleInputChange}
      formGroup={{
        className: 'extra-class',
      }}
      items={items}
      errorMessage={{
        children: errorMessage,
      }}
    />
  );
}
