import FilmList from '@movie/components/FilmList';
import FilmSkeleton from '@movie/components/skeletons/FilmSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'FFW movie Popular',
  description: 'Trending and popular movies',
};

export default async function Popular() {
  return (
    <div className="p-[30px] pb-[60px] lg:p-[50px] lg:pb-[50px]">
      <h2 className="text-white text-[16px] sm:text-[18px] font-semibold mb-5">
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
  );
}
