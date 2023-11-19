'use client';
import { useKeyPress } from '@movie/lib/keyPress';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const pressed = useKeyPress('Enter');
  const email = useRef('');
  const password = useRef('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    setError('');
    const res = await signIn('credentials', {
      email: email.current,
      password: password.current,
      redirect: false,
      // callbackUrl: '/',
    });
    if (!res?.ok) {
      setError('Wrong email or password');
    }
    setIsLoading(false);
  };

  const onSubmit = async () => {
    login();
  };
  useEffect(() => {
    if (pressed) {
      login();
    }
  }, [pressed]);

  return (
    <div
      className={
        'flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1'
      }
    >
      <div className="px-7 py-7 shadow bg-white rounded-md flex flex-col gap-2">
        <h1 className="mb-3 font-semibold text-center">Signing</h1>

        {error && <div className="mb-3 text-center text-red-600">{error}</div>}
        <input
          placeholder="Input your email"
          type="email"
          onChange={(e) => (email.current = e.target.value)}
          className="p-3 mb-3"
          required
        />
        <input
          placeholder="Input your password"
          type="password"
          onChange={(e) => (password.current = e.target.value)}
          className="p-3 mb-3"
          required
        />
        <button
          onClick={onSubmit}
          className="bg-[#5179FF] rounded-sm py-2 disabled:opacity-70 mb-3"
          disabled={isLoading}
        >
          Login
        </button>
        <div className="text-center">
          <Link href="/auth/signUp" className="text-center">
            <u>register</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
