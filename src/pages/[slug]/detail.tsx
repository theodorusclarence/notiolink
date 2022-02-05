import { useRouter } from 'next/router';
import * as React from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { useQuery } from 'react-query';

import { trimHttps } from '@/lib/helper';
import { Url } from '@/lib/notion';
import useRQWithToast from '@/hooks/toast/useRQWithToast';

import Accent from '@/components/Accent';
import Favicon from '@/components/Favicon';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';
import Skeleton from '@/components/Skeleton';
import CopyBox from '@/container/CopyBox';
import QRCode from '@/container/QRCode';

export default function DetailPage() {
  //#region  //*=========== Get Route Param ===========
  const router = useRouter();
  const idParam = router.query.slug;
  //#endregion  //*======== Get Route Param ===========

  //#region  //*=========== Link ===========
  const [link, setLink] = React.useState<string>();

  React.useEffect(() => {
    const origin = trimHttps(window.location.href).replace('/detail', '');
    setLink(origin);
  }, [idParam]);
  //#endregion  //*======== Link ===========

  //#region  //*=========== Get Url Data ===========
  const { data: url } = useRQWithToast(
    useQuery<Url, Error>(`/api/link/${idParam}`, { retry: 1 }),
    {
      loading: 'Fetching url details...',
      success: 'Url detail fetched successfully',
    }
  );
  //#endregion  //*======== Get Url Data ===========

  return (
    <Layout>
      <Seo templateTitle='Detail' />

      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center py-20'>
            <h1 className='h0'>
              <Accent>Link Details</Accent>
            </h1>

            {link ? (
              <QRCode link={`https://${link}`} className='mt-8' />
            ) : (
              <Skeleton className='mt-8 h-64 w-64' />
            )}

            {link ? (
              <CopyBox link={link} className='mt-8' />
            ) : (
              <Skeleton className='mt-8 h-14 w-72 rounded' />
            )}

            <div className='mt-6'>
              <h2 className='h4'>Detail</h2>
              <div className='mt-2 flex items-center gap-4'>
                {url?.link ? (
                  <Favicon fullUrl={url.link} />
                ) : (
                  <Skeleton className='h-5 w-5' />
                )}
                <div className='w-full max-w-sm break-all font-medium text-gray-600 dark:text-gray-300'>
                  {url?.link ? url.link : <Skeleton className='h-5 w-64' />}
                </div>
              </div>
              <div className='mt-2 flex items-center gap-4'>
                <HiCursorClick className='h-5 w-5' />
                <span className='font-medium text-gray-600 dark:text-gray-300'>
                  {url?.count ?? '—'} click{(url?.count ?? 0) > 1 && 's'}
                </span>
              </div>
            </div>

            <ArrowLink href='/new' className='mt-8' as={PrimaryLink}>
              <Accent>Shorten another</Accent>
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
