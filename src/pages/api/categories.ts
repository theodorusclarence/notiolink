import { NextApiRequest, NextApiResponse } from 'next';

import { getAllLinkCategories } from '@/lib/notion';

export default async function Categories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      return res.status(200).json({ categories: await getAllLinkCategories() });
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
