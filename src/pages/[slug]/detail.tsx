import { useRouter } from 'next/router';
import * as React from 'react';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
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
    const origin = window.location.origin;
    const slug = idParam;

    setLink(origin + '/' + slug);
  }, [idParam]);
  //#endregion  //*======== Link ===========

  return (
    <Layout>
      <Seo templateTitle='Detail' />

      <main>
        <section className=''>
          <div className='layout flex flex-col items-center py-20 min-h-screen'>
            <h1 className='h0'>
              <Accent>Shorten New Link</Accent>
            </h1>

            {link ? (
              <QRCode link={link} className='mt-8' />
            ) : (
              <Skeleton className='mt-8 w-64 h-64' />
            )}

            {link ? (
              <CopyBox link={link} className='mt-8' />
            ) : (
              <Skeleton className='mt-8 w-72 h-14 rounded' />
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
