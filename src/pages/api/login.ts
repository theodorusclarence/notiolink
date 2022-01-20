import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

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

    if (password !== process.env.NEXT_PUBLIC_APP_PASSWORD) {
      return res.status(401).json({
        message: 'Incorrect password',
      });
    }

    return res
      .status(200)
      .json({ token: jwt.sign({}, process.env.NEXT_PUBLIC_APP_SECRET!) });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
