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
    <Suspense fallback={<FilmDetailSkeleton />}>
      <FilmDetailContainer id={params.id} />
    </Suspense>
  );
}
