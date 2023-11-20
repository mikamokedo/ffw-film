import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from './authService';

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
