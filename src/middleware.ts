import { NextRequest, NextResponse } from 'next/server';

import { getAllLinkCategories, getUrlBySlug } from '@/lib/notion';

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/c/')) {
    const path = req.nextUrl.pathname.split('/')[2];

    const categories = await getAllLinkCategories();

    if (categories.includes(path)) {
      return;
    } else {
      return NextResponse.redirect('/404');
    }
  }

  const path = req.nextUrl.pathname.split('/')[1];
  const whitelist = [
    'favicons',
    'fonts',
    'images',
    'svg',
    '',
    'login',
    'new',
    'c',
  ];
  if (whitelist.includes(path)) {
    return;
  }

  const url = await getUrlBySlug(path);

  /** Don't redirect if /:slug/detail */
  const isDetailPage = req.nextUrl.pathname.split('/')[2]
    ? req.nextUrl.pathname.split('/')[2] === 'detail'
    : false;
  if (isDetailPage) {
    if (url.link) {
      return;
    } else {
      return NextResponse.redirect('/new?slug=' + path);
    }
  }

  if (url.link) {
    try {
      // using fetch because edge function won't allow patch request
      await fetch(req.nextUrl.origin + '/api/increment', {
        method: 'POST',
        body: JSON.stringify(url),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('/api/increment:', { error });
    }

    return NextResponse.redirect(url.link);
  }
}
