import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
type Props = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  required?: boolean | false;
  validationRules?: Object;
};

const InputComponent = ({
  label,
  placeholder,
  type,
  name,
  required,
  validationRules,
}: Props) => {
  return (
    <div className="flex flex-col gap-[13px]">
      <label
        htmlFor="Identifier"
        className=" font-normal text-base text-[#404B7C]"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        className="w-full h-[68px] rounded-lg py-[22px] px-7"
      />
    </div>
  );
};

export default InputComponent;
