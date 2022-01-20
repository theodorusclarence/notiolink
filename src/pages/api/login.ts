import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

import { APP_PASSWORD, APP_SECRET } from '@/lib/config';

export default async function LoginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { password } = req.body as { password: string };

    if (!password) {
      return res.status(400).json({
        message: 'Password are required',
      });
    }

    if (password !== APP_PASSWORD) {
      return res.status(401).json({
        message: 'Incorrect password',
      });
    }

    return res.status(200).json({ token: jwt.sign({}, APP_SECRET!) });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
