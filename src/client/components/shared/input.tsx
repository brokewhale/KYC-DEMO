import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type = 'text', placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[13px]">
        <label htmlFor={name} className=" font-normal text-base text-[#404B7C]">
          {label}
        </label>

        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          className="w-full h-[68px] rounded-lg py-[22px] px-7"
          {...props}
        />
      </div>
    );
  }
);
