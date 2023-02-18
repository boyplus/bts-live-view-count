import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye, faComment } from '@fortawesome/free-solid-svg-icons'

import CountUp from 'react-countup';

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

      <div className='content-container'>
        <div className='title'>
          <h4>{title}</h4>
        </div>

        <div className='view'>
          <FontAwesomeIcon icon={faEye} />
          <h4 className='value'>
            <CountUp start={oldView} end={currentView} duration={300} separator="," />
          </h4>
        </div>

        <div className='bottom-content-container'>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className='value'>
              <CountUp start={oldLike} end={currentLike} duration={300} separator="," />
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span className='value'>

            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Video;