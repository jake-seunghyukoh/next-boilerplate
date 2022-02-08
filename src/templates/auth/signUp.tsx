import { useAppDispatch } from '@redux/hooks';
import { goLogin } from '@redux/slices/loginPage';
import { BaseSyntheticEvent } from 'react';

export default function SignUpTemplate() {
  const dispatch = useAppDispatch();

  function signUp(event: BaseSyntheticEvent) {
    event.preventDefault();
  }

  return (
    <div>
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[281px] flex flex-col">
          <div className="w-full mb-20 flex justify-center">
            <span className="text-[32px] font-bold font-gmarket">Sign Up</span>
          </div>
          <form
            onSubmit={signUp}
            className="w-full h-[342px] flex flex-col space-y-12"
          >
            <div className="w-full h-[250px] space-y-6">
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
              <div className="w-full flex flex-col items-start space-y-2">
                <label className="text-sm font-bold">비밀번호 확인</label>
                <input
                  name="validator"
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요"
                  required
                  className="w-full h-10 px-5 border-[1px] border-[#4B4B4B] rounded text-sm"
                />
              </div>
            </div>
            <button className="w-full h-11 rounded bg-[#A258FF] text-white font-bold">
              회원가입하기
            </button>
          </form>
          <div className="w-full mt-2 flex justify-end">
            <button
              onClick={() => dispatch(goLogin())}
              className="text-sm text-[#2F2F2F] text-opacity-50"
            >
              계정이 있으신가요?
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
