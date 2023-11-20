'use client';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';
import React from 'react';

type PaginationProps = {
  pageCount: number;
  onPageActive: number;
};

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageActive }) => {
  const router = useRouter();

  const handlePageClick = (page: { selected: number }) => {
    router.push(`/search?query=qua&page=${page.selected + 1}`);
  };

  return (
    <div className="flex justify-center mt-[30px]">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        forcePage={onPageActive - 1}
      />
    </div>
  );
};

export default Pagination;
