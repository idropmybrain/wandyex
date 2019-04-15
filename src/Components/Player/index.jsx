/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const Player = ({
  id,
  title,
  video,
  playNext,
  resetState
}) => {
  return (
    <div className="w-80pc df fdc aic">
      <h2>
        {title}
      </h2>
      <button type="button" className="btnPrim" onClick={() => { resetState(); }}>
        Add Videos
      </button>
      <video key={video} id={id} width="640" onTimeUpdate={(e) => { playNext(e); }} height="480" autoPlay controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Player;
