import NavBarLeft from '@movie/components/NavBarLeft';
import NavbarRight from '@movie/components/NavbarRight';
import Profile from '@movie/components/Profile';
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
    title: `${query} - FFW movie`,
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
    <main className="min-h-screen flex">
      <NavBarLeft />
      <div className="main-content">
        <div className="p-5 flex justify-end border-b border-[#3a3939]">
          <Profile />
        </div>
        <div className="flex gap-[30px] flex-wrap justify-left container-film-items p-[50px]">
          <Suspense fallback={<FilmSkeleton />}>
            <SearchContainer query={query} page={page} />
          </Suspense>
        </div>
      </div>
      <NavbarRight tags={[]} />
    </main>
  );
}
