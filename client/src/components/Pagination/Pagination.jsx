import style from "./Pagination.module.css"; 
import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, maximo }) => {
    const handleClick = (page) => {
        setCurrentPage(page);
      };

      const pages = [];

      for (let i = 1; i <= maximo; i++) {
          pages.push(
           <div key={i} className={style.pagination}>
              <div className={currentPage === i ? "active" : ""}>
               <button className={style.numbers} onClick={() => handleClick(i)}>
                {i}
                 </button>
            </div>
          </div>
        );
      }
    
      return <div className={style.pagination}>{pages}</div>;
    };

  
export default Pagination;
