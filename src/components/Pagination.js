import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber !== currentPage &&
      pageNumber > 0 &&
      pageNumber <= totalPages
    ) {
      onPageChange(pageNumber);
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
        <button className="page-link" onClick={() => handlePageChange(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <nav aria-label="Blog gönderileri sayfalaması">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Önceki
          </button>
        </li>
        {pages}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Sonraki
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
