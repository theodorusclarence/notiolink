/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { appName } from '@/lib/config';
import { getSocialTree } from '@/lib/notion';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function IndexPage({
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='layout flex flex-col justify-center items-center py-20 min-h-screen'>
            <h1 className='text-5xl md:text-7xl'>
              <Accent>{appName}</Accent>
            </h1>
            <div className='grid gap-4 mx-auto mt-8 w-full max-w-sm text-center'>
              {links.map(({ id, display, link, icon }) => (
                <div className='group relative' key={id}>
                  <div
                    className={clsx(
                      'opacity-0 group-hover:opacity-100',
                      'animate-tilt absolute -inset-0.5 z-0 rounded blur',
                      'bg-gradient-to-r from-emerald-400 to-amber-400',
                      'transition duration-300 group-hover:duration-200',
                      'pointer-events-none'
                    )}
                  />

                  <a
                    href={link}
                    className={clsx(
                      'flex relative gap-2 justify-center items-center',
                      'px-4 py-4 font-medium transition-colors md:text-lg ',
                      'bg-dark',
                      'border border-gray-600',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-500'
                    )}
                  >
                    {icon ? (
                      icon.type === 'emoji' ? (
                        icon.emoji + ' '
                      ) : icon.type === 'external' ? (
                        <img
                          src={icon.external.url}
                          width={20}
                          height={20}
                          alt={`${display} Icon`}
                        />
                      ) : (
                        <img
                          src={icon.file.url}
                          width={20}
                          height={20}
                          alt={`${display} Icon`}
                        />
                      )
                    ) : null}
                    {display}
                  </a>
                </div>
              ))}
            </div>
            {/* Thank you for not removing this as an attribution 🙏 */}
            <p className='mt-10 text-gray-300'>
              Built using{' '}
              <UnderlineLink href='https://github.com/theodorusclarence/notiolink'>
                <Accent>Notiolink</Accent>
              </UnderlineLink>
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
