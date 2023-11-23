import { LoginParams, LoginResponse } from '@movie/types/authTypes';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const login = async (params: LoginParams) => {
  const body = JSON.stringify({ ...params, returnSecureToken: true });
  const res = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiO4NTttc68zMHFkRFXyK5qLsU9zXsJmg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
  return res.json();
};

export const register = async (params: LoginParams) => {
  const body = JSON.stringify({ ...params, returnSecureToken: true });
  const res = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiO4NTttc68zMHFkRFXyK5qLsU9zXsJmg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
  return res.json();
};

export const authOptions: AuthOptions = {
  secret: 'secret',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== 'undefined') {
          const res = await login({
            email: credentials.email,
            password: credentials.password,
          });
          if (typeof res !== 'undefined' && !res?.error) {
            return { ...res, apiToken: res.idToken };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signIn',
  },
  session: { strategy: 'jwt' },
};
