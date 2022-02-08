import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

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
      <label
        htmlFor={id}
        className='block dark:text-gray-200 font-normal text-gray-700 text-sm'
      >
        {label}
      </label>
      <div className='mt-1 relative'>
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsxm(
            'bg-transparent',
            'focus:border-primary-500 focus:ring-primary-500',
            readOnly &&
              'cursor-not-allowed bg-gray-700 focus:border-gray-600 focus:ring-0',
            errors[id]
              ? [
                  'border-red-600 focus:border-red-600 focus:ring-red-600',
                  'dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400',
                ]
              : ['border-gray-400', 'dark:border-gray-600'],
            'block w-full rounded-md shadow-sm dark:text-white'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {!hideError && errors[id] && (
          <div className='absolute flex inset-y-0 items-center pointer-events-none pr-3 right-0'>
            <HiExclamationCircle className='dark:text-red-400 text-red-600 text-xl' />
          </div>
        )}
      </div>
      <div className='mt-1'>
        {helperText && (
          <p className='dark:text-gray-300 text-gray-600 text-xs'>
            {helperText}
          </p>
        )}
        {!hideError && errors[id] && (
          <span className='dark:text-red-400 text-red-600 text-sm'>
            {errors[id].message}
          </span>
        )}
      </div>
    </div>
  );
}
