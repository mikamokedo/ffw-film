import FilmList from '@movie/components/FilmList';
import FilmSkeleton from '@movie/components/skeletons/FilmSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'FFW movie upcoming',
  description: 'Upcoming movies',
};

export default async function Popular() {
  return (
    <div className="p-[30px] pb-[60px] lg:p-[50px] lg:pb-[50px]">
      <h2 className="text-white text-[16px] sm:text-[18px] font-semibold mb-5">
        Upcoming movies
      </h2>
      <Suspense fallback={<FilmSkeleton />}>
        <FilmList type="upcoming" />
      </Suspense>
    </div>
  );
}
