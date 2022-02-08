import LoginTemplate from '@templates/auth/login';
import Head from 'next/head';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>로그인</title>
      </Head>
      <LoginTemplate />
    </div>
  );
}
