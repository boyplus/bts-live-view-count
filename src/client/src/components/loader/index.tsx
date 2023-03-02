import React from 'react';

import './loader.css';

type LoaderProps = {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    isLoading ? <div className="spinner-square" >
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-3 square"></div>
    </div> : <></>
  );
}

export default Loader;