import axios from 'axios';
import router from 'next/router';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

type NewLinkFormData = {
  slug: string;
  link: string;
};

export default function NewLinkPage() {
  const isLoading = useLoadingToast();

  //#region  //*=========== Form ===========
  const methods = useForm<NewLinkFormData>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit: SubmitHandler<NewLinkFormData> = (data) => {
    toast.promise(
      axios.post<{ token: string }>('/api/login', data).then((res) => {
        localStorage.setItem('@notiolink/app_token', res.data.token);
        router.replace(`/new`);
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Logged in, you can now add new link',
      }
    );
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Login' />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-20'>
            <h1 className='h0'>
              <Accent>Login to the account</Accent>
            </h1>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-8 w-full max-w-sm'
              >
                <div className='space-y-4'>
                  <Input
                    id='password'
                    label='Password'
                    type='password'
                    validation={{
                      required: 'Password must be filled',
                    }}
                  />
                </div>

                <div className='mt-5 flex flex-col'>
                  <Button
                    isLoading={isLoading}
                    className='w-full justify-center md:ml-auto md:w-auto'
                    variant='outline'
                    type='submit'
                  >
                    Login!
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </Layout>
  );
}
