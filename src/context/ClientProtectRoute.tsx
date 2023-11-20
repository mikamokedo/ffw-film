'use client';
import { createContext, PropsWithChildren, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@movie/components/skeletons/Loading';

const ClientProtectContext = createContext({});
const protectRouters = ['/', '/popular', '/movie/', '/search', '/upcoming'];
const backToHomePages = ['/auth/signIn', '/auth/signUp'];

export const ClientProtectProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (
      !session &&
      protectRouters.some(
        (route) => pathName === route || pathName.startsWith(route + '/')
      )
    ) {
      void router.push('/auth/signIn');
    }
    if (session && backToHomePages.includes(pathName)) {
      void router.push('/');
    }
  }, [session, pathName]);

  return (
    <ClientProtectContext.Provider value>
      {!session && protectRouters.some((route) => pathName === route) && (
        <Loading />
      )}

      {children}
    </ClientProtectContext.Provider>
  );
};
