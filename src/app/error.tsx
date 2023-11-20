'use client';

import NavBarLeft from '@movie/components/NavBarLeft';
import NavbarRight from '@movie/components/NavbarRight';
import Profile from '@movie/components/Profile';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <button onClick={() => reset()}>Try again</button>
        <main className="min-h-screen flex">
          <NavBarLeft />
          <div className="main-content">
            <div className="p-5 flex justify-end border-b border-[#3a3939]">
              <Profile />
            </div>
            <div className="p-[50px]">
              <h2 className="text-white text-[20px] font-semibold mb-5 text-center">
                Something went wrong!
              </h2>
              <h3 className="text-white text-[16px] mt-3 text-center">
                {error?.message}
              </h3>
            </div>
          </div>
          <NavbarRight tags={[]} />
        </main>
      </body>
    </html>
  );
}
