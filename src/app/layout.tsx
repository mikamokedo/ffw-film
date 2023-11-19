import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@movie/app/auth/Provides';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@movie/app/api/auth/[...nextauth]/route';
import { ClientProtectProvider } from '@movie/context/ClientProtectContext';

export const metadata: Metadata = {
  title: 'FFW movie',
  description: 'This website in testing mode',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <ClientProtectProvider>{children}</ClientProtectProvider>
        </Providers>
      </body>
    </html>
  );
}
