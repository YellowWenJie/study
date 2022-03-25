import { Textarea } from 'govuk-react-jsx';

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
    <Textarea
      id={id}
      name={name}
      label={{
        children: label,
      }}
      className={className}
      onChange={handleInputChange}
      type="text"
    />
  ) : (
    <Textarea
      id={id}
      name={name}
      label={{
        children: label,
      }}
      className={className}
      onChange={handleInputChange}
      type="text"
      errorMessage={{
        children: errorMessage,
      }}
    />
  );
}
