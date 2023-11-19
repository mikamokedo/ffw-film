'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useKeyPress } from '@movie/utils/keyPress';

const SearchInput = () => {
  const router = useRouter();
  const pressed = useKeyPress('Enter');
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');

  const handleSubmit = () => {
    router.push(`/search?query=${value}&page=1`);
  };

  useEffect(() => {
    if (pressed && value) {
      handleSubmit();
    }
  }, [pressed]);

  return (
    <div className="relative">
      <button
        className="absolute left-[18px] top-[12px] text-[#989898] hover:text-[#fff] transition duration-300"
        onClick={handleSubmit}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </button>
      <input
        value={value}
        type="text"
        className="bg-[#333335] outline-none py-3 pr-7 pl-14 rounded-[50px] text-[white] font-medium max-w-[302px] w-[100%]"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
