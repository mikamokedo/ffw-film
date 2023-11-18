import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pickItem } from '@movie/utils/pickItem';
import { getFilmDetail } from '@movie/services/films';

type FilmDetailProps = {
  id: string;
};

const FilmDetailContainer: React.FC<FilmDetailProps> = async ({ id }) => {
  const film = await getFilmDetail(id);
  return (
    <div className="p-[50px]">
      <div className="relative mb-10">
        <Image
          src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}
          alt={film.title}
          width={2048}
          height={1152}
          // className='rounded-[50px]'
        />
        <div className="absolute left-0 bottom-[-30px]">
          <Image
            src={`https://image.tmdb.org/t/p/w185/${film.poster_path}`}
            alt={film.title}
            width={185}
            height={278}
            className="rounded-[5px]"
          />
        </div>
        <h1 className="text-white absolute z-10 bottom-[30px] left-[200px] text-[30px] font-bold">
          {film.title}
        </h1>
        <Link
          className="absolute right-[10px] bottom-[10px] px-5 py-2 bg-[#5179FF] w-[200px] flex items-center justify-center rounded-[10px]"
          href={`https://www.imdb.com/title/${film.imdb_id}`}
        >
          <svg
            stroke="currentColor"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
          </svg>
          <span className="text-white text-[20px] font-bold"> Watch</span>
        </Link>
      </div>
      <div className="text-white text-[20px] font-bold mb-4">
        {film.tagline}
      </div>
      <div className="text-white text-[14px] font-bold mb-1">STORY:</div>
      <div className="text-[14px] mb-4 text-[#989898]">{film.overview}</div>
      <div className="text-white text-[16px] font-bold mb-1">DETAIL:</div>
      <div className="text-[14px] mb-1 text-[#989898]">
        Status: {film.status}
      </div>
      <div className="text-[14px] mb-1 text-[#989898]">
        Release date: {film.release_date}
      </div>
      <div className="text-[14px] mb-1 text-[#989898]">
        Popularity: {film.popularity}
      </div>
      <div className="text-[14px] mb-1 text-[#989898]">
        Genres: {film.genres.map((item) => item.name).join(', ')}
      </div>
    </div>
  );
};

export default FilmDetailContainer;
