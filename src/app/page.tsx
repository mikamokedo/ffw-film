import NavBarLeft from '@movie/components/NavBarLeft';
import NavbarRight from '@movie/components/NavbarRight';
import Profile from '@movie/components/Profile';
import FilmList from '@movie/components/FilmList';
import { pickItem } from '@movie/utils/pickItem';
import { Suspense } from 'react';
import FilmSkeleton from '@movie/components/skeletons/FilmSkeleton';

export default async function Home() {
  return (
    <main className="min-h-screen flex">
      <NavBarLeft />
      <div className="main-content">
        <div className="p-5 flex justify-end border-b border-[#3a3939]">
          <Profile />
        </div>
        <div className="flex gap-[30px] flex-wrap justify-left container-film-items p-[50px]">
          <Suspense fallback={<FilmSkeleton />}>
            <FilmList type="top_rated" />
          </Suspense>
        </div>
      </div>
      <NavbarRight tags={[]} />
    </main>
  );
}
