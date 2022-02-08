import { useAppSelector } from '@redux/hooks';
import {
  exampleLogin,
  exampleLogout,
  selectAuthenticated,
} from '@redux/slices/auth';
import { wrapper } from '@redux/store';
import { useUser } from '@services/api/hooks/user';
import { withSessionSsr } from '@session/index';
import { logout } from '@utils/logout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Loading from 'react-loading';
import { useSWRConfig } from 'swr';

export default function Home(): ReactNode {
  function handleLogout() {
    logout(() => {
      mutate('/api/user');
      router.push('/');
    });
  }

  const router = useRouter();
  const mutate = useSWRConfig().mutate;

  const authenticated = useAppSelector(selectAuthenticated);
  const { isLoading, isError } = useUser();

  if (authenticated && isLoading) {
    // Authenticated and loading
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <div>
          <main className="min-h-screen w-screen flex items-center justify-center">
            <Loading type="spinningBubbles" color="#000000" />
          </main>
        </div>
      </div>
    );
  } else if (!authenticated || isError) {
    // Not authenticated or error occurred
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <div>
          <main className="min-h-screen w-screen flex items-center justify-center">
            <Link href="/login" passHref>
              <button>로그인</button>
            </Link>
          </main>
        </div>
      </div>
    );
  }

  // Happy case
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <main className="min-h-screen w-screen flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-2xl font-bold">환영합니다</span>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        </main>
      </div>
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
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }
    return { props: {} };
  };
});

export const getServerSideProps = withSessionSsr(_getServerSideProps);
