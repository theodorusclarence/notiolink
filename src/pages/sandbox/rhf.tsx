import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RHFSandbox() {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='React Hook Form Sandbox' />

      <section className=''>
        <div className='layout min-h-screen py-20'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='max-w-sm space-y-3'
            >
              <Input
                id='name'
                label='Name'
                validation={{ required: 'Name must be filled' }}
              />
              <div className='flex flex-wrap gap-4'>
                {/* other button must have type='button' so it won't trigger validation */}
                <Button variant='outline'>Not Submit</Button>
                <Button type='submit'>Submit</Button>
              </div>
              <p className='text-sm text-gray-800'>
                Check console after submit
              </p>
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
