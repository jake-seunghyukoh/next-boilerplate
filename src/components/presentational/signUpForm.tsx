import { passwordChecker } from '@utils/stringCheckers';
import { BaseSyntheticEvent } from 'react';

export default function SignUpForm() {
  const passwordMinLength = 8;
  const passwordMaxLength = 12;

  function signUp(event: BaseSyntheticEvent) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const validator = event.target.validator.value;

    if (!passwordChecker(password)) {
      alert('비밀번호가 규칙에 맞지 않습니다. 다시 입력해주세요.');
      return;
    } else if (password !== validator) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
      return;
    }

    alert('현재 회원가입 기능이 제한되어 있습니다.\n관리자에게 문의하세요.');
  }

  return (
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
            placeholder="아이디를 입력해주세요"
            required
            autoFocus
            className="w-full h-10 px-5 border-[1px] border-[#4B4B4B] rounded text-sm invalid:border-2 invalid:border-[#FF6969]"
          />
        </div>
        <div className="w-full flex flex-col items-start space-y-2">
          <label className="text-sm font-bold">비밀번호</label>
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요 (8~12자)"
            minLength={passwordMinLength}
            maxLength={passwordMaxLength}
            className="w-full h-10 px-5 border-[1px] border-[#4B4B4B] rounded text-sm invalid:border-2 invalid:border-[#FF6969]"
          />
        </div>
        <div className="w-full flex flex-col items-start space-y-2">
          <label className="text-sm font-bold">비밀번호 확인</label>
          <input
            name="validator"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            minLength={passwordMinLength}
            maxLength={passwordMaxLength}
            onPaste={(event) => {
              event.preventDefault();
            }}
            className="w-full h-10 px-5 border-[1px] border-[#4B4B4B] rounded text-sm invalid:border-2 invalid:border-[#FF6969]"
          />
        </div>
      </div>
      <button className="w-full h-11 rounded bg-[#A258FF] text-white font-bold">
        회원가입
      </button>
    </form>
  );
}
