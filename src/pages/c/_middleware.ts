import { NextRequest, NextResponse } from 'next/server';

import { getAllLinkCategories } from '@/lib/notion';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split('/')[2];

  const categories = await getAllLinkCategories();

  if (categories.includes(path)) {
    return;
  } else {
    return NextResponse.redirect('/404');
  }
}
