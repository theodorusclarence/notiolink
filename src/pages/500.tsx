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
          <div className='layout flex flex-col justify-center items-center py-20 min-h-screen'>
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
