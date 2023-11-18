import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface FilmItemProps {
  href: string;
  img: string;
  name: string;
  evaluate: number;
  description: string;
  id: number;
}
const FilmItem: React.FC<FilmItemProps> = ({
  href,
  img,
  name,
  evaluate,
  description,
}) => {
  return (
    <Link
      href={href}
      className="relative w-[175px] bg-[#19191b] pb-[9px] rounded-[7px] hover:brightness-110 hover:scale-105 transition duration-300"
    >
      <div className="absolute top-[15px] left-[14px] flex items-center w-[52px] text-[white] text-[12px]">
        <div className="px-[8px] py-[4px] bg-[#5179ff] rounded-[50px] flex items-center">
          {evaluate ? evaluate.toFixed(1) : 0}
          <span className="ml-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
          </span>
        </div>
      </div>
      <Image
        src={img}
        alt=""
        className="w-[175px] h-[262px] rounded-t-[7px]"
        width={175}
        height={262}
      />
      <div className="text-[16px] font-medium text-[#d1d5db] text-center mt-[9px] content-film-big hide-text-row">
        {name}
      </div>
      <div className="text-[#989898] text-[12px] hide-text-col">
        {description}
      </div>
    </Link>
  );
};

export default FilmItem;
