import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

import { addLink, checkSlugIsTaken } from '@/lib/notion';

export default async function NewLinkHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const url = req.body as { link: string; slug: string; category?: string };
    if (!url.link || !url.slug) {
      return res.status(400).json({
        message: 'Link and slug are required',
      });
    }

    let APP_TOKEN = req.headers['authorization'] as string | undefined;
    if (!APP_TOKEN) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    APP_TOKEN = APP_TOKEN.replace(/^Bearer\s+/, '');
    try {
      jwt.verify(APP_TOKEN, process.env.NEXT_PUBLIC_APP_SECRET!);
    } catch (error) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const taken = await checkSlugIsTaken(url.slug);
    if (taken) {
      return res.status(409).json({
        message: 'Slug is already taken',
      });
    }

    await addLink(url.slug, url.link, url.category);

    res.status(201).send('OK');
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
