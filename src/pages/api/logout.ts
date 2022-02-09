import { withSessionRoute } from '@session/withIron';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionRoute(logoutRoute);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  req.session.destroy();
  res.status(201).send({});
}
