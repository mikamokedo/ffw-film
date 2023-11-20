import { Suspense } from 'react';
import FilmSkeleton from '@movie/components/skeletons/FilmSkeleton';
import SearchContainer from '@movie/components/SearchContainer';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const query =
    typeof searchParams.query === 'string' ? searchParams.query : undefined;
  return {
    title: `${query ? query + '-' : ''} FFW movie`,
    description: `Search films with keyword: ${query}`,
  };
}

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams.query === 'string' ? searchParams.query : undefined;
  const page =
    typeof searchParams.page === 'string' ? searchParams.page : undefined;

  return (
    <div className="p-[30px] pb-[60px] lg:p-[50px] lg:pb-[50px]">
      <Suspense fallback={<FilmSkeleton />}>
        <SearchContainer query={query} page={page} />
      </Suspense>
    </div>
  );
}
