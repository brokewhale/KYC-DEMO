import React from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  DeepMap,
  FieldError,
} from 'react-hook-form';
import { Input, InputProps } from './input';
import get from 'lodash.get';
import { ErrorMessage } from '@hookform/error-message';

type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

export const FormInput = <TFormValues extends FieldValues>({
  className,
  name,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={className} aria-live="polite">
      <Input name={name} {...props} {...(register && register(name, rules))} />
      {hasError && (
        <ErrorMessage
          errors={errors}
          name={name as any}
          render={({ message }) => (
            <p
              className={`block mt-1 font-serif text-sm text-left text-red-600 ${
                name === 'identifier' && 'absolute'
              }`}
            >
              {message}
            </p>
          )}
        />
      )}
    </div>
  );
};
