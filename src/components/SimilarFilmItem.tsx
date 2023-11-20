import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface SimilarFilmItemProps {
  href: string;
  img: string;
  name: string;
  evaluate: number;
  date: string;
}

const SimilarFilmItem: React.FC<SimilarFilmItemProps> = ({
  href,
  img,
  name,
  evaluate,
  date,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center hover:brightness-75 transition duration-300 w-[262px] mb-[28px]"
    >
      <Image
        src={img}
        alt={name}
        width={100}
        height={150}
        className="mr-[20px] rounded-[6px]"
      />
      <div className="w-[142px]">
        <div className="text-lg text-white font-semibold mb-3 hide-text-row text-[14px]">
          {name}
        </div>
        <div className="text-[#989898] mb-8">{date}</div>
        <div className="w-[70px] items-center text-[#5179FF] py-[2px] px-[12px] border border-[#5179FF] rounded-[30px] flex justify-center">
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
    </Link>
  );
};

export default SimilarFilmItem;
