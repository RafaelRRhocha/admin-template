import { FC, useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { Warning } from '../components/icons';
import { useAuth } from '../data/hook/useAuth';

interface AuthenticationProps {}

const Authentication: FC<AuthenticationProps> = ({}) => {
  const { loginUser, registerUser , loginGoogle } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const sendError = (msg: any, time = 5) => {
    setError(msg)
    setTimeout(() => setError(null), time * 1000)
  }

  const submitForm = async () => {
    try {
      if(mode === 'login') {
        await loginUser(email, password)
      } else {
        await registerUser(email, password)
      }
    } catch (error) {
      sendError(error.message ?? 'An unknown error has occurred')
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-zinc-100 text-zinc-800">
      <div className="md:w-1/2 hidden md:block">
        <picture>
            <img
              src="https://source.unsplash.com/random"
              alt="image authentication"
              className="h-screen w-full object-cover"
            />
        </picture>
      </div>
      <div className="md:w-1/2 w-full m-10">
        <h1 className="text-2xl font-bold mb-5">{mode === 'login' ? 'Login with your account' : 'Register your account'}</h1>
        {error && (
          <div className="flex items-center justify-center bg-red-500 text-zinc-100 py-3 px-5 my-2 border border-red-700 rounded-lg transition-all">
            {Warning}
            <p className="ml-3 text-sm">
              {error}
            </p>
          </div>
        )}
        <AuthInput label="Email" value={email} type="email" valueChanged={setEmail} required />
        <AuthInput label="Password" value={password} type="password" valueChanged={setPassword} required />
        <button onClick={ submitForm } className="w-full bg-violet-500 hover:bg-violet-400 text-zinc-200 rounded-lg px-4 py-3 mt-6 transition-colors">
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        <hr className="my-6 border-zinc-300 w-full" />
        <button onClick={ loginGoogle } className="w-full bg-red-500 hover:bg-red-400 text-zinc-200 rounded-lg px-4 py-3 transition-colors">
          Login with Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            New here?
            <a onClick={() => setMode('register')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1">
              Create a free account
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Already have an account? 
            <a onClick={() => setMode('login')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1">
              Login here
            </a>
          </p>
        )}
      </div>
    </div>
    );
}

export default Authentication;