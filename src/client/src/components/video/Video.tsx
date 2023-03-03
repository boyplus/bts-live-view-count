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
  currentComment: number;
  oldView: number;
  oldLike: number;
  oldComment: number;
  thumbnail: string;
}

const Video: React.FC<VideoProps> = ({ id, title, currentView, currentLike, currentComment, oldView, oldLike, oldComment, thumbnail }) => {
  const getURL = () => {
    return `https://www.youtube.com/watch?v=${id}`;
  }

  return (
    <div className='video-card'>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={getURL()}
      >
        <img
          src={thumbnail}
          className='center-cropped'
          width="358px"
          height="260px"
          alt={title}
        />
      </a>

      <div className='content-container'>

        <h4 className='title'>{title}</h4>

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
              <CountUp start={oldComment} end={currentComment} duration={300} separator="," />
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Video;