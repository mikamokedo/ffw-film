import FilmList from '@movie/components/FilmList';
import NavBarLeft from '@movie/components/NavBarLeft';
import NavbarRight from '@movie/components/NavbarRight';
import Profile from '@movie/components/Profile';
import FilmSkeleton from '@movie/components/skeletons/FilmSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'FFW movie Popular',
  description: 'Trending and popular movies',
};

export default async function Popular() {
  return (
    <main className="min-h-screen flex">
      <NavBarLeft />
      <div className="main-content">
        <div className="p-5 flex justify-end border-b border-[#3a3939]">
          <Profile name="lecaoquy" avatar="/defaultAvatar.jpeg" />
        </div>
        <div className="p-[50px]">
          <h2 className="text-white text-[20px] font-semibold mb-5">
            Popular movies
          </h2>
          <Suspense fallback={<FilmSkeleton />}>
            <FilmList type="popular" />
          </Suspense>
          <h2 className="text-white text-[20px] font-semibold mb-5 mt-[30px]">
            Top trending movies
          </h2>
          <Suspense fallback={<FilmSkeleton />}>
            <FilmList type="trending" />
          </Suspense>
        </div>
      </div>
      <NavbarRight tags={[]} />
    </main>
  );
}
