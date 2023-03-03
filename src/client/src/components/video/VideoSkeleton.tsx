import React from 'react';

// Font awesome
import { faEye, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import './video.css';

const VideoSkeleton: React.FC = () => {
  return (
    <div className='video-card'>

      <div className='skeleton-video-thumbnail' />

      <div className='content-container'>
        <div className='title'>
          <h4 className='fake'>____________</h4>
        </div>


        <div className='view'>
          <div className='icon'>
            <FontAwesomeIcon icon={faEye} />
          </div>
          <h4 className='value fake'>
            _________________
          </h4>
        </div>


        <div className='bottom-content-container'>
          <div className='value-container'>
            <div className='icon'>
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <span className='value fake'>
              _________________
            </span>
          </div>

          <div className='value-container'>
            <div className='icon'>
              <FontAwesomeIcon icon={faComment} />
            </div>
            <span className='value fake'>
              ____________
            </span>
          </div>
        </div>
      </div>

    </div>
  );

}

export default VideoSkeleton