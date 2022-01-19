import { NextApiRequest, NextApiResponse } from 'next';

import { getUrlBySlug } from '@/lib/notion';

export default async function UrlBySlugHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug) {
      return res.status(400).json({ message: 'Missing slug' });
    }

    const url = await getUrlBySlug(slug as string);

    if (!url.pageId) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.status(200).json(url);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
