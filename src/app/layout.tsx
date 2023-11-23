import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@movie/context/SesionProvides';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@movie/services/authService';
import { ClientProtectProvider } from '@movie/context/ClientProtectRoute';
import { LayoutProvider } from '@movie/context/LayoutProvider';

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
          <ClientProtectProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ClientProtectProvider>
        </Providers>
      </body>
    </html>
  );
}
