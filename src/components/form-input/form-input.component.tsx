import { InputHTMLAttributes, FC } from 'react';
import { Group, Input, FormInputLabel } from './form-input.styles';

type FormInputProps = {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, id, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
          htmlFor={id}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
