import React from 'react';
import './SideMenu.css';

const renderList = (videos, play) => {
  return videos.map((video, index) => {
    return (
      <div key={video.id} onClick={() => { play(index); }} onKeyUp={() => { play(index); }} className="df pl-10px aic w-100pc cp hover" role="presentation">
        <h4>
          {video.title}
        </h4>
      </div>
    );
  });
};

const SideMenu = (props) => {
  return (
    <div className="h-86vh o-auto w-20pc df fdc ais jcs bgSec tcw p-10px">
      <div className="df aic jcb w-100pc">
        <h3 className="tc">
          {props.heading}
        </h3>
        <button className="btnPrim fs-14 h-40px" onClick={() => { props.play(); }} type="button">
          Play
        </button>
      </div>
      {renderList(props.videos, props.play)}
    </div>
  );
};

export default SideMenu;
