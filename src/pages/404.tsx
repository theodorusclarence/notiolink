import * as React from 'react';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Link not found' />

      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-20'>
            <h1 className='text-5xl md:text-7xl'>
              <Accent>Link not found</Accent>
            </h1>
            <p className='mt-4 text-gray-300'>
              Are you sure it is the right link?
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
