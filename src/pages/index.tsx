import * as React from 'react';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function IndexPage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='layout flex justify-center items-center py-20 min-h-screen'>
            <h1 className='text-5xl md:text-7xl'>
              <Accent>Notiolink</Accent>
            </h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
