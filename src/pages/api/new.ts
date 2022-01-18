import { NextApiRequest, NextApiResponse } from 'next';

import { addLink, checkSlugIsTaken } from '@/lib/notion';

export default async function NewLinkHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const url = req.body as { link: string; slug: string };

    if (!url.link || !url.slug) {
      return res.status(400).json({
        message: 'Link and slug are required',
      });
    }

    const taken = await checkSlugIsTaken(url.slug);
    if (taken) {
      return res.status(409).json({
        message: 'Slug is already taken',
      });
    }

    await addLink(url.slug, url.link);

    res.status(201).send('OK');
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
