import { useUser } from '@services/api/hooks/user';
import { withSessionSsr } from '@session/index';
import { logout } from '@utils/logout';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useSWRConfig } from 'swr';

export function Home(): ReactNode {
  const router = useRouter();
  const mutate = useSWRConfig().mutate;
  const { isLoading, isError } = useUser();

  function handleLogout() {
    logout(() => {
      mutate('/api/user');
      router.push('/');
    });
  }

  if (isLoading) {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
      </div>
    );
  }

  if (isError) {
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

export const getServerSideProps = withSessionSsr(_getServerSideProps);

async function _getServerSideProps(context: GetServerSidePropsContext) {
  const user = context.req.session?.user;

  if (user) console.log('유저가 존재합니다.');
  else console.log('유저가 존재하지 않습니다.');

  return { props: {} };
}

export default Home;
