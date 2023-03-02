import React from 'react';
import { SortVideoBy } from '@/api/non-generated/model';

type SortByProps = {
  sortBy: SortVideoBy;
  setSortBy: (sortBy: SortVideoBy) => void;
}

const SortBy: React.FC<SortByProps> = ({ sortBy, setSortBy }) => {
  const getClass = (name: string) => {
    return name === sortBy ? 'bold' : 'link';
  }
  const links = [
    { text: 'Most view', name: SortVideoBy.View },
    { text: 'Most like', name: SortVideoBy.Like },
    { text: 'Date added (oldest)', name: SortVideoBy.Oldest },
    { text: 'Date added (newest)', name: SortVideoBy.Newest },
  ];
  return <ul>
    {links.map(({ text, name }) => {
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
    })}
  </ul>
}

export default SortBy;