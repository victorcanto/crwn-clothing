import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { signUpStart } from '../../store/user/user.action';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFromFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          id='displayName'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          id='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
