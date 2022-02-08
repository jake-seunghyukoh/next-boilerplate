import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { goSignUp } from '@redux/slices/loginPage';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent } from 'react';

export default function LoginTemplate() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { expired, redirectURL } = useAppSelector((state) => state.loginPage);

  function login(event: BaseSyntheticEvent) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    axios
      .post('/api/login', { username, password })
      .then(async () => {
        router.push(redirectURL ?? '/');
      })
      .catch(() => {
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요.');
      });
  }

  return (
    <div>
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[281px] flex flex-col">
          <div className="w-full flex justify-center">
            <span className="text-[32px] font-bold font-gmarket">Login</span>
          </div>
          <div className="mt-20 flex-auto" />
          <form
            onSubmit={login}
            className="w-full h-[250px] flex flex-col space-y-12"
          >
            <div className="w-full h-[158px] space-y-6">
              <div className="w-full flex flex-col items-start space-y-2">
                <label className="text-sm font-bold">아이디</label>
                <input
                  name="username"
                  type="text"
                  placeholder="ID를 입력해주세요"
                  required
                  className="w-full h-10 px-5 border-[1px] border-[#4B4B4B] rounded text-sm"
                />
              </div>
              <div className="w-full flex flex-col items-start space-y-2">
                <label className="text-sm font-bold">비밀번호</label>
                <input
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  required
                  className="w-full h-10 px-5 border-[1px] border-[#4B4B4B] rounded text-sm"
                />
              </div>
            </div>
            <button className="w-full h-11 rounded bg-[#5700FF] text-white font-bold">
              로그인
            </button>
          </form>
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
