import React from 'react';
import ReactPlayer from 'react-player';

function Video() {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player fixed-bottom'
        url='https://vimeo.com/457039995'
        width='80%'
        height='100%'
        controls={true}

      />
    </div>
  );
}

export default Video;
