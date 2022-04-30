import { Group, Input, FormInputLabel } from './form-input.styles';

const FormInput = ({ label, id, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor={id}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
