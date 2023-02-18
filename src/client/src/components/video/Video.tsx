import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye, faComment } from '@fortawesome/free-solid-svg-icons'

// CSS

import './video.css';

type VideoProps = {
  id: string;
  title: string;
  currentView: number;
  currentLike: number;
  oldView: number;
  oldLike: number;
  thumbnail: string;
}

const Video: React.FC<VideoProps> = ({ id, title, currentView, currentLike, oldView, oldLike, thumbnail }) => {
  const getURL = () => {
    return `https://www.youtube.com/watch?v=${id}`;
  }

  const renderNumber = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


  return (
    <div className='video-card'>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={getURL()}
      >
        <img src={thumbnail} className='center-cropped'></img>
      </a>

      <div style={{ padding: '10px' }}>
        <div style={{ minHeight: '55px' }}>
          <h4>{title}</h4>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faEye} />
          <h4 style={{ marginLeft: '8px' }}>
            {renderNumber(currentView)}
          </h4>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5px',
          }}
        >
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span style={{ marginLeft: '8px' }}>
              {renderNumber(currentLike)}
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span style={{ marginLeft: '8px' }}>

            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Video;