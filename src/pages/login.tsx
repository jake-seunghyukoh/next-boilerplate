import { useAppSelector } from '@redux/hooks';
import LoginTemplate from '@components/container/login';
import SignUpTemplate from '@components/container/signUp';
import {
  LoginEnums,
  selectLoginPageState,
  setQuery,
} from '@redux/modules/login/login.reducer';
import { wrapper } from '@redux/store';
import { withSessionSsr } from '@session/withIron';
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

const _getServerSideProps = wrapper.getServerSideProps(function ({ dispatch }) {
  return async ({ query }) => {
    const expired = query.expired === '';
    const redirect = (query.redirect && String(query.redirect)) ?? null;

    dispatch(setQuery({ expired, redirectURL: redirect }));

    return {
      props: {},
    };
  };
});

export const getServerSideProps = withSessionSsr(_getServerSideProps);
