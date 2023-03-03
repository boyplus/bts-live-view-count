import React from 'react';

// Model
import { SortVideoBy } from '@/api/non-generated/model';

// Components
import SortBy from './SortBy';

// CSS
import './header.css'

type HeaderProps = {
  sortBy: SortVideoBy;
  setSortBy: (sortBy: SortVideoBy) => void;
}

const Header: React.FC<HeaderProps> = ({ sortBy, setSortBy }) => {
  const openNav = () => {
    document.getElementById('app-side-nav')!.style.right = '0px';
  }
  const closeNav = () => {
    document.getElementById('app-side-nav')!.style.right = '-250px';
  }

  return (
    <div>
      <div id="app-side-nav" className="sidenav">
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>
        <h4 className="text-menu">Sort by</h4>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div id="header">
        <h1 className="text-header">BTS live view count</h1>
        <div className="menu" onClick={openNav}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
            alt="hamburger-icon"
            height="40px"
            width="40px"
            className='hamburger'
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;