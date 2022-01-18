import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getUrlBySlug, incrementLinkCount } from '@/lib/notion';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function TestingPage({
  link,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo templateTitle='Testing' />

      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>
            <pre>{JSON.stringify(link, null, 2)}</pre>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const link = await getUrlBySlug('clarence');
  await incrementLinkCount(link);

  return {
    props: { link },
  };
};
