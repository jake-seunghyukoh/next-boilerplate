import { withSessionRoute } from '@session/withIron';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionRoute(userRoute);

async function userRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const user = req.session.user;

  res.send({ user });
}
