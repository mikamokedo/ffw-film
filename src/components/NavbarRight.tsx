import React, { Suspense } from 'react';
import SearchInput from './SearchInput';
import Tag, { TagProps } from './Tag';
import SimilarFilms from './SimilarFilms';
import FilmSimilarSkeleton from './skeletons/FilmSimilarSkeleton';

type NavbarRightProps = {
  tags: TagProps[];
  filmId?: string;
};

const NavbarRight: React.FC<NavbarRightProps> = ({ tags, filmId }) => {
  return (
    <div className="w-[320px] h-100vh pt-[28px] px-6 border-l border-[#3a3939]">
      <div>
        <SearchInput />
      </div>
      {!!tags.length && (
        <div className="mb-[30px] mt-[30px]">
          <div className="text-white font-semibold">Genres</div>
          <div className="flex flex-wrap gap-x-3 gap-y-[10px] mt-[10px]">
            {tags.map((item) => {
              return <Tag key={item.id} name={item.name} id={item.id} />;
            })}
          </div>
        </div>
      )}
      {filmId && (
        <Suspense fallback={<FilmSimilarSkeleton />}>
          <SimilarFilms id={filmId} />
        </Suspense>
      )}
    </div>
  );
};

export default NavbarRight;
