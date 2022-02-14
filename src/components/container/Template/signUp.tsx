import SignUpForm from '@components/presentational/Form/signUpForm';
import { useAppDispatch } from '@redux/hooks';
import { goLogin } from '@redux/modules/login/login.reducer';

export default function SignUpTemplate() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[281px] flex flex-col">
          <div className="w-full mb-20 flex justify-center">
            <span className="text-[32px] font-bold font-gmarket">Sign Up</span>
          </div>
          <SignUpForm />
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
