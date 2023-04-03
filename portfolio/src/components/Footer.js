import React from 'react';

function Footer({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        -
        <a
          href="https://github.com/jmkuhn11"

        //   className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Github
        </a>
        -
      </li>
      <li className="nav-item">
        -
        <a
          href="https://twitter.com/JoshKuhn3"

        //   className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Twitter
        </a>
        -
      </li>
    </ul>
  );
}

export default Footer;
