import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5; // Maximum number of page buttons to show

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center flex-wrap">
        {/* First Page Button (only if not on first page) */}
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => paginate(1)}
              className="bg-white text-gray-700 px-3 py-2 rounded-md border mx-1 mt-2"
            >
              Pertama
            </button>
          </li>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number
                  ? "bg-primer text-white"
                  : "bg-white text-gray-700"
              } px-3 py-2 rounded-md border mx-1 mt-2`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Last Page Button (only if not on last page) */}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => paginate(totalPages)}
              className="bg-white text-gray-700 px-3 py-2 rounded-md border mx-1 mt-2"
            >
              Terakhir
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
