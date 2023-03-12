import React, { memo } from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import { usePagination, DOTS } from "./usePagination";

import "./pagination.scss";

const Pagination = memo((props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div
      className={classnames("pagination-container", { [className]: className })}
    >
      <Link
        className={classnames("arrow pagination-item left", {
          disabled: currentPage === 1,
        })}
        to={currentPage === 2 ? `/` : `/${currentPage - 1}`}
        onClick={onPrevious}
      >
        <div className="arrow left"></div>
      </Link>

      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <div key={i} className="pagination-item dots">
              &#8230;
            </div>
          );
        }
        return (
          <div key={i}>
            <Link
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              to={pageNumber === 1 ? `/` : `/${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Link>
          </div>
        );
      })}

      <Link
        className={classnames("arrow pagination-item right", {
          disabled: currentPage === lastPage,
        })}
        to={`/${currentPage + 1}`}
        onClick={onNext}
      >
        <div className="arrow right"></div>
      </Link>
    </div>
  );
});

export default Pagination;
