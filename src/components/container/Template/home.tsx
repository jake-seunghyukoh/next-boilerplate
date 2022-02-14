import DefaultLayout from '@components/container/Layout';
import { useAppSelector } from '@redux/hooks';
import { selectAuthenticated } from '@redux/modules/auth/auth.reducer';
import { useUser } from '@services/api/hooks/user';
import { logout } from '@utils/logout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSWRConfig } from 'swr';

export default function HomeTemplate() {
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
  const [needLogin, setNeedLogin] = useState(true);

  useEffect(() => {
    const isLogin = authenticated && !isError;
    setNeedLogin(!isLogin);
  }, [authenticated, isError, isLoading, needLogin]);

  if (needLogin) {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <DefaultLayout isLoading={isLoading}>
          <Link href="/login" passHref>
            <button>로그인</button>
          </Link>
        </DefaultLayout>
      </div>
    );
  }

  // Happy case
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <DefaultLayout>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-2xl font-bold">환영합니다</span>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      </DefaultLayout>
    </div>
  );
}
