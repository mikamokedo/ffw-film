'use client';
import { useKeyPress } from '@movie/lib/keyPress';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { register } from '@movie/services/authService';
import Modal from '@movie/components/Modal';

const LoginPage = () => {
  const router = useRouter();
  const pressed = useKeyPress('Enter');
  const email = useRef('');
  const password = useRef('');
  const rePassword = useRef('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleRegister = async () => {
    if (password.current !== rePassword.current) {
      setError('Please confirm password');
      return;
    }
    setIsLoading(true);
    setError('');
    const res = await register({
      email: email.current,
      password: password.current,
    });
    console.log(res);
    if (res?.error) {
      setError(res.error.message);
    } else {
      setModal(true);
    }
    setIsLoading(false);
  };

  const onSubmit = async () => {
    handleRegister();
  };
  useEffect(() => {
    if (pressed) {
      handleRegister();
    }
  }, [pressed]);

  return (
    <div
      className={
        'flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1'
      }
    >
      {modal ? (
        <Modal
          onSubmit={() => router.push('/auth/signIn')}
          content="Sign up successfully, Please login"
        />
      ) : (
        <div className="px-7 py-7 shadow bg-white rounded-md flex flex-col gap-2">
          <h1 className="mb-3 font-semibold text-center">SignUp</h1>
          {error && (
            <div className="mb-3 text-center text-red-600">{error}</div>
          )}
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
          <input
            placeholder="Re input your password"
            type="password"
            onChange={(e) => (rePassword.current = e.target.value)}
            className="p-3 mb-3"
            required
          />
          <button
            onClick={onSubmit}
            className="bg-[#5179FF] rounded-sm py-2 disabled:opacity-70 mb-3"
            disabled={isLoading}
          >
            Register
          </button>
          <div className="text-center">
            <Link href="/auth/signIn" className="text-center">
              <u>Login</u>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
