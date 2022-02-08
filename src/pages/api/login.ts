import { AuthInterface } from '@interfaces/auth';
import { SessionUserEntity } from '@interfaces/session';
import { get, post } from '@services/api';
import { withSessionRoute } from '@session/index';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionRoute(loginRoute);

const baseURL = process.env.API_BASE_URL;

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  // Sign in
  const signInURL = baseURL + '/auth/sign-in';

  const body = req.body as AuthInterface;

  const { data: tokens, error: signInError } = await post(
    signInURL,
    body,
    null,
  );

  if (signInError) {
    res.status(signInError.status).json(signInError.data);
    return;
  }

  // Get user entity
  const getUserURL = baseURL + '/users/me';

  const headers = {
    Authorization: `Bearer ${tokens.accessToken}`,
  };

  const { data: userEntity, error: getUserError } = await get(
    getUserURL,
    headers,
  );

  if (getUserError) {
    res.status(signInError.status).json(signInError.data);
    return;
  }

  const user: SessionUserEntity = {
    userId: userEntity.userId,
    role: userEntity.role,
    tokens,
    updatedAt: new Date(),
  };

  // Persist session user entity
  req.session.user = {
    ...user,
  };

  await req.session.save();
  res.send({ data: { message: 'success' } });
}
