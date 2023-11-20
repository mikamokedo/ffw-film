import FilmList from '@movie/components/FilmList';
import { Suspense } from 'react';
import FilmSkeleton from '@movie/components/skeletons/FilmSkeleton';

export default async function Home() {
  return (
    <div className="p-[30px] pb-[60px] lg:p-[50px] lg:pb-[50px]">
      <Suspense fallback={<FilmSkeleton />}>
        <FilmList type="top_rated" />
      </Suspense>
    </div>
  );
}
