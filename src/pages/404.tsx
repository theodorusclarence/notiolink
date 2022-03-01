import { useRouter } from 'next/router';
import * as React from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  const router = useRouter();
  const firstPath = router.asPath.split('/')[1];

  const token = getFromLocalStorage('@notiolink/app_token');

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

            {token && (
              <ArrowLink
                href={`/new?slug=${firstPath}`}
                className='mt-8'
                as={PrimaryLink}
              >
                <Accent>Shorten link to /{firstPath}</Accent>
              </ArrowLink>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
