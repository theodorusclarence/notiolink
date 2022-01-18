import { NextApiRequest, NextApiResponse } from 'next';

import { incrementLinkCount, Url } from '@/lib/notion';

export default async function increment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const url = req.body as Url;

    if (!url.pageId) {
      throw Error('pageId not sent through body');
    }

    await incrementLinkCount(url);

    res.status(200).send('OK');
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
