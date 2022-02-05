import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

export type InputProps = {
  /** Input label */
  label: string;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  label,
  placeholder = '',
  helperText,
  id,
  type = 'text',
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='w-full'>
      <label htmlFor={id} className='block text-sm font-normal text-gray-200'>
        {label}
      </label>
      <div className='relative mt-1'>
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            readOnly
              ? 'cursor-not-allowed border-gray-600 bg-gray-700 focus:border-gray-600 focus:ring-0'
              : errors[id]
              ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
              : 'border-gray-600 focus:border-primary-500 focus:ring-primary-500',
            'block w-full rounded-md bg-dark text-white shadow-sm'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {!hideError && errors[id] && (
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
            <HiExclamationCircle className='text-xl text-red-400' />
          </div>
        )}
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-300'>{helperText}</p>}
        {!hideError && errors[id] && (
          <span className='text-sm text-red-400'>{errors[id].message}</span>
        )}
      </div>
    </div>
  );
}
