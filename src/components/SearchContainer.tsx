import React from 'react';
import FilmItem from './FilmItem';
import { searchFilms } from '@movie/services/films';
import Pagination from './Pagination';

type SearchContainerProps = {
  query?: string;
  page?: string;
};

const SearchContainer: React.FC<SearchContainerProps> = async ({
  query,
  page = '1',
}) => {
  const films = await searchFilms(query, page);
  return (
    <div>
      {query && (
        <div className="text-white font-semibold text-[18px] mb-5">{`Search results for "${query}" (${films.total_results} results found)`}</div>
      )}
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
      {films.results.length > 0 && (
        <Pagination pageCount={films.total_pages} onPageActive={Number(page)} />
      )}
    </div>
  );
};

export default SearchContainer;
