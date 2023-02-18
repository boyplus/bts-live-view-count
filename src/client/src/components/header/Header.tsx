import React from 'react';

import './header.css'

type HeaderProps = {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const Header: React.FC<HeaderProps> = ({ sortBy, setSortBy }) => {
  const openNav = () => {
    document.getElementById('app-side-nav')!.style.right = '0px';
  }
  const closeNav = () => {
    document.getElementById('app-side-nav')!.style.right = '-300px';
  }

  const getClass = (name: string) => {
    return name === sortBy ? 'bold' : 'link';
  }

  const renderSortBy = () => {
    const links = [
      { text: 'Most view', name: 'view' },
      { text: 'Most like', name: 'like' },
      { text: 'Date added (oldest)', name: 'oldest' },
      { text: 'Date added (newest)', name: 'newest' },
    ];
    return links.map(({ text, name }) => {
      return (
        <li
          className={getClass(name)}
          key={name}
          onClick={() => setSortBy(name)}
          style={{ marginLeft: '35px' }}
        >
          {text}
        </li>
      );
    });
  }
  return (
    <div>
      <div id="app-side-nav" className="sidenav">
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>
        <span className="text-menu">Sort by</span>
        <ul>{renderSortBy()}</ul>
      </div>
      <div id="header">
        <h1 className="text-header">BTS live view count</h1>
        <div className="menu" onClick={openNav}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
            alt="hamburger-icon"
            height="40px"
            className='hamburger'
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;