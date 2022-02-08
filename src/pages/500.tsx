import * as React from 'react';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ErrorPage() {
  return (
    <Layout>
      <Seo templateTitle='Error' />

      <main>
        <section className=''>
          <div className='flex flex-col items-center justify-center layout min-h-screen py-20'>
            <h1 className='text-5xl md:text-7xl'>
              <Accent>Error occurred</Accent>
            </h1>
            <p className='mt-4 text-gray-300'>
              Sorry, there must be something wrong, please try again
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
