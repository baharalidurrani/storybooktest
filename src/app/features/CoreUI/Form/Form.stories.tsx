import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';

// import '../../App/Root/Root.scss';
import styles from './Form.module.scss';
import FormInput from '../FormInput/FormInput';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';
import Label from '../Label/Label';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import Checkbox from '../Checkbox/Checkbox';

export default { title: 'Form' };

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  marketing: boolean;
  marketing2: boolean;
  weeklytips: boolean;
  newfeatures: boolean;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const mapSubmitHandler = useCallback((data) => onSubmit(data), [onSubmit]);

  return (
    <form onSubmit={handleSubmit(mapSubmitHandler)} className={styles.myform}>
      <TwoColumnGrid>
        <FormInput 
          fillWidth
          label='Firstname *'
          name='firstname'
          placeholder='OguZ Yagiz'
          ref={register({ required: true })}
          error={errors.firstname && 'First name is required.'}
        />
        <FormInput
          fillWidth
          label='Lastname *'
          name='lastname'
          placeholder='Kara'
          ref={register({ required: true })}
          error={errors.lastname && 'Last name is required.'}
        />
        <FormInput
          fillWidth
          label='E-Mail *'
          name='email'
          type='email'
          placeholder='Enter your email'
          ref={register({ required: true })}
          error={errors.email && 'E-Mail is required.'}
        />
        <FormInput
          fillWidth
          label='Phone Number'
          placeholder='+90 (535) 646 8177'
          name='phone'
          ref={register({})}
        />
        <Label title='Marketing 2' >
          <Toggle
            name='weeklytips'
            label='Send me weekly tips to help me improve the engagement on my store'
            ref={register({})}
          />
        </Label>
        <Toggle
          name='newfeatures'
          label='I want to be the first to hear about new features'
          defaultValue
          ref={register({})}
        />
        <Button size='big' type='submit'>Submit</Button>
      </TwoColumnGrid>
    </form>
  );
};

export const normal = () => (
  <Form onSubmit={action('submit')} />
);
