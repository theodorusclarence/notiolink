import { NextRequest, NextResponse } from 'next/server';

import { getUrlBySlug } from '@/lib/notion';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split('/')[1];

  const whitelist = ['favicons', 'fonts', 'images', 'svg', '', 'testing'];
  if (whitelist.includes(path)) {
    return;
  }

  const url = await getUrlBySlug(path);

  if (url.link) {
    // using fetch because edge function won't allow patch request
    await fetch(req.nextUrl.origin + '/api/increment', {
      method: 'POST',
      body: JSON.stringify(url),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.redirect(url.link);
  }
}
