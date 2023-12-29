import React from "react";

export default function Pagination({ currentPage, totalPage, setPage }) {
  const visiblePageCount = 5;
  const halfVisibleCount = Math.floor(visiblePageCount / 2);
  const startPage = Math.max(currentPage - halfVisibleCount, 1);
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPage);
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="hf">
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage(1);
        }}
      >
        First page
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {currentPage !== 1 && pageNumbers[0] !== 1 && <span>...</span>}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={(e) => {
            e.preventDefault();
            setPage(number);
          }}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      {currentPage !== totalPage &&
        pageNumbers[pageNumbers.length - 1] !== totalPage && <span>...</span>}
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage(currentPage + 1);
        }}
        disabled={currentPage === totalPage}
      >
        &raquo;
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage(totalPage);
        }}
      >
        Last page
      </button>
    </div>
  );
}
