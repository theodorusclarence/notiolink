import { NextRequest, NextResponse } from 'next/server';

import { getUrlBySlug } from '@/lib/notion';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split('/')[1];
  const whitelist = ['favicons', 'fonts', 'images', 'svg', ''];

  if (whitelist.includes(path)) {
    return;
  }

  const url = await getUrlBySlug(path);

  if (url.link) {
    return NextResponse.redirect(url.link);
  }
}
