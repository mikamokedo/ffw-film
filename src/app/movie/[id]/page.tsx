import NavBarLeft from '@movie/components/NavBarLeft';
import NavbarRight from '@movie/components/NavbarRight';
import Profile from '@movie/components/Profile';
import { getFilmDetail, getSimilarFilms } from '@movie/services/films';
import React, { Suspense } from 'react';
import FilmDetailContainer from '@movie/components/FilmDetailContainer';

import { Metadata } from 'next';
import FilmDetailSkeleton from '@movie/components/skeletons/FilmDetailSkeleton';

interface MovieDetail {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: MovieDetail): Promise<Metadata> {
  const film = await getFilmDetail(params.id);
  return {
    title: film.title,
    description: film.overview,
  };
}

export default async function FilmDetail({ params }: MovieDetail) {
  return (
    <main className="min-h-screen flex">
      <NavBarLeft />
      <div className="main-content">
        <div className="p-5 flex justify-end border-b border-[#3a3939]">
          <Profile name="lecaoquy" avatar="/defaultAvatar.jpeg" />
        </div>
        <Suspense fallback={<FilmDetailSkeleton />}>
          <FilmDetailContainer id={params.id} />
        </Suspense>
      </div>
      <NavbarRight tags={[]} filmId={params.id} />
    </main>
  );
}
