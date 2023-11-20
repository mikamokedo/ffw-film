import React from 'react';
import FilmItem, { FilmItemProps } from './FilmItem';
import { getFilms } from '@movie/services/films';
import { GetFilmsType } from '@movie/types/responseType';

type FilmListProps = {
  type: GetFilmsType;
};

const FilmList: React.FC<FilmListProps> = async ({ type }) => {
  const films = await getFilms(type);

  return (
    <div className="flex gap-[30px] flex-wrap justify-left container-film-items">
      {films.results.map((item) => (
        <FilmItem
          evaluate={item.vote_average}
          img={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
          name={item.name || item.title}
          href={`/movie/${item.id}`}
          key={item.id}
          description={item.overview}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default FilmList;
