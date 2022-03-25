import { Input } from 'govuk-react-jsx';

export default function InputComponent(props: {
  id: string;
  name: string;
  label: string;
  className: string;
  errorMessage: string;
  handleInputChange: any;
}) {
  const { id, name, label, className, errorMessage, handleInputChange } = props;

  return errorMessage === '' ? (
    <Input
      id={id}
      name={name}
      label={{
        children: label,
      }}
      className={className}
      type="text"
      onChange={handleInputChange}
    />
  ) : (
    <Input
      id={id}
      name={name}
      label={{
        children: label,
      }}
      className={className}
      type="text"
      onChange={handleInputChange}
      errorMessage={{
        children: errorMessage,
      }}
    />
  );
}
