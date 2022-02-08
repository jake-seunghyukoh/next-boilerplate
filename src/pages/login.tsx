import { useAppSelector } from '@redux/hooks';
import { LoginEnums, selectLoginPageState } from '@redux/slices/loginPage';
import LoginTemplate from '@templates/auth/login';
import SignUpTemplate from '@templates/auth/signUp';
import Head from 'next/head';

export default function LoginPage() {
  const pageState = useAppSelector(selectLoginPageState);

  if (pageState === LoginEnums.LOGIN) {
    return (
      <div>
        <Head>
          <title>로그인</title>
        </Head>
        <LoginTemplate />
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>회원가입</title>
        </Head>
        <SignUpTemplate />
      </div>
    );
  }
}
