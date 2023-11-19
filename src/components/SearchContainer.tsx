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
    <div className="w-full">
      {query ? (
        <div className="text-white font-semibold text-[18px] mb-5">{`Search results for "${query}" (${films.total_results} results found)`}</div>
      ) : (
        <div className="flex items-center flex-col justify-center m-auto">
          <div className="mb-3">
            <svg
              stroke="currentColor"
              fill="#ffffff"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </div>
          <div className="text-white font-semibold text-[18px] mb-5">
            Find your favorite movie with keywords
          </div>
        </div>
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
      {films.total_pages > 1 && (
        <Pagination pageCount={films.total_pages} onPageActive={Number(page)} />
      )}
    </div>
  );
};

export default SearchContainer;
