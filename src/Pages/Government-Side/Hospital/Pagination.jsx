import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button 
        onClick={() => handleClick(currentPage - 1)} 
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
      >
        Previous
      </button>
      
      <span className="text-sm">{currentPage} / {totalPages}</span>
      
      <button 
        onClick={() => handleClick(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
