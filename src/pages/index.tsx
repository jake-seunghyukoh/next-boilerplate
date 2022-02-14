import HomeTemplate from '@components/container/home';
import { exampleLogin, exampleLogout } from '@redux/modules/auth/auth.reducer';
import { wrapper } from '@redux/store';
import { withSessionSsr } from '@session/withIron';
import Head from 'next/head';
import { ReactNode } from 'react';

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomeTemplate />
    </div>
  );
}

const _getServerSideProps = wrapper.getServerSideProps(function ({ dispatch }) {
  return async ({ req }) => {
    const user = req.session?.user;
    // TODO : Validate user Ex) Access token validity
    if (user) dispatch(exampleLogin());
    else {
      dispatch(exampleLogout());
    }
    return { props: {} };
  };
});

export const getServerSideProps = withSessionSsr(_getServerSideProps);
