/* eslint-disable @next/next/no-img-element */
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { config } from '@/lib/env';
import { getSocialTree } from '@/lib/notion';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import TreeLink from '@/components/links/TreeLink';
import Seo from '@/components/Seo';

export default function IndexPage({
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo />

      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-20'>
            <h1 className='text-center text-5xl md:text-7xl'>
              <Accent>{config.appName}</Accent>
            </h1>
            <div className='mx-auto mt-8 grid w-full max-w-sm gap-4 text-center'>
              {links.map((link) => (
                <TreeLink key={link.id} link={link} />
              ))}
            </div>
            {/* Thank you for not removing this as an attribution 🙏 */}
            <p className='mt-10 dark:text-gray-300'>
              Built using{' '}
              <PrimaryLink href='https://github.com/theodorusclarence/notiolink'>
                <Accent>Notiolink</Accent>
              </PrimaryLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: { links: await getSocialTree() },
    revalidate: 5,
  };
};
