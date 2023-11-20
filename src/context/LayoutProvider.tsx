'use client';
import Header from '@movie/components/Header';
import NavBarLeft from '@movie/components/NavBarLeft';
import NavbarRight from '@movie/components/NavbarRight';
import { usePathname } from 'next/navigation';
import React from 'react';

const auth_pages = ['/auth/signIn', '/auth/signUp'];

export const LayoutProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();
  return (
    <>
      {!auth_pages.includes(pathname) ? (
        <main className="min-h-screen flex">
          <NavBarLeft />
          <div className="main-content">
            <Header />
            {children}
          </div>
          <NavbarRight tags={[]} />
        </main>
      ) : (
        children
      )}
    </>
  );
};
