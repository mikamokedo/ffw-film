import { getSimilarFilms } from '@movie/services/films';
import React from 'react';
import SimilarFilmItem from './SimilarFilmItem';
import { pickItem } from '@movie/utils/pickItem';

interface SimilarFilmsProps {
  id: string;
}
const SimilarFilms: React.FC<SimilarFilmsProps> = async ({ id }) => {
  const similarFilms = await getSimilarFilms(id);

  return (
    <div className="mt-[30px]">
      <div className="text-white font-semibold">Similar</div>
      <div className="flex flex-col gap-y-[10px] mt-[20px]">
        {pickItem(
          similarFilms.results.filter((item) => item.poster_path),
          3
        ).map((item) => (
          <SimilarFilmItem
            key={item.id}
            img={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            name={item.name || item.title}
            evaluate={item.vote_average}
            date={item.release_date}
            href={`/movie/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarFilms;
