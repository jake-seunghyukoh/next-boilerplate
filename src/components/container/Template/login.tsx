import LoginForm from '@components/presentational/Form/loginFrom';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { goSignUp } from '@redux/modules/login/login.reducer';

export default function LoginTemplate() {
  const dispatch = useAppDispatch();
  const { expired, redirectURL } = useAppSelector((state) => state.loginPage);

  return (
    <div>
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[281px] flex flex-col">
          <div className="w-full flex justify-center">
            <span className="text-[32px] font-bold font-gmarket">Login</span>
          </div>
          <div className="mt-20 flex-auto" />
          <LoginForm redirectURL={redirectURL} />
          <span className="my-2 text-sm text-[#FF6969]" hidden={!expired}>
            인증이 만료되었습니다. 다시 로그인해주세요
          </span>
          <div className="w-full mt-2 flex justify-end">
            <button
              onClick={() => dispatch(goSignUp())}
              className="text-sm text-[#2F2F2F] text-opacity-50"
            >
              회원가입하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
