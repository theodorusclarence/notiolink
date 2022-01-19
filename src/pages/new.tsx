import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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
  const router = useRouter();

  //#region  //*=========== Form ===========
  const methods = useForm<NewLinkFormData>({
    mode: 'onTouched',
  });
  const { handleSubmit, setValue } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit: SubmitHandler<NewLinkFormData> = (data) => {
    toast.promise(
      axios.post('/api/new', data).then(() => {
        router.replace(`/${data.slug}/detail`);
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Link successfully shortened',
      }
    );
  };
  //#endregion  //*======== Form Submit ===========

  //#region  //*=========== Set Slug Query ===========
  React.useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;

    if (query.slug) {
      setValue('slug', query.slug as string);
    }
  }, [router.isReady, router.query, setValue]);
  //#endregion  //*======== Set Slug Query ===========

  return (
    <Layout>
      <Seo templateTitle='Shorten!' />

      <main>
        <section>
          <div className='layout flex flex-col justify-center items-center py-20 min-h-screen'>
            <h1 className='h0'>
              <Accent>Shorten New Link</Accent>
            </h1>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-8 w-full max-w-sm'
              >
                <div className='space-y-4'>
                  <Input
                    id='slug'
                    label='Slug'
                    placeholder='slug'
                    validation={{
                      required: 'Slug must be filled',
                      pattern: {
                        value: /^\S+$/,
                        message: 'Cannot include whitespace',
                      },
                    }}
                  />
                  <Input
                    id='link'
                    label='Link'
                    helperText='Must include http or https'
                    placeholder='https://google.com'
                    validation={{
                      required: 'Link must be filled',
                      pattern: {
                        value:
                          /^(?:https?:\/\/|s?ftps?:\/\/)(?!www | www\.)[A-Za-z0-9_-]+\.+[A-Za-z0-9./%#*&=?_:;-]+$/,
                        message: 'Please input a valid link',
                      },
                    }}
                  />
                </div>

                <div className='flex flex-col mt-5'>
                  <Button
                    className='justify-center w-full md:ml-auto md:w-auto'
                    variant='outline'
                    isDarkBg
                    type='submit'
                  >
                    Shorten!
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
