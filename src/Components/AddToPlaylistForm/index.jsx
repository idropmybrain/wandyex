/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Input from '@components/Common/Input';

const AddToPlayListForm = ({
  videoName,
  videoUrl,
  startTime,
  endTime,
  handleInputChange,
  addToPlaylist
}) => {
  return (
    <div className="df p-10px fdc jcs aic w-80pc">
      <h3>
        Add To Playlist
      </h3>
      <form className="df fdc jcsa aic h-75pc w-75pc" onSubmit={(e) => { addToPlaylist(e); }}>
        <label htmlFor="videoTitle">
          Video Title
          <br />
          <Input
            autoFocus
            type="text"
            name="videoName"
            id="videoName"
            value={videoName}
            classes="mt-10px h-25px w-300px"
            placeholder="Enter Video Title"
            onChange={(e) => { handleInputChange(e); }}
          />
        </label>
        <label htmlFor="videoUrl">
          Video URL
          <br />
          <Input
            type="text"
            name="videoUrl"
            id="videoUrl"
            value={videoUrl}
            classes="mt-10px h-25px w-300px"
            placeholder="Enter Video URL"
            onChange={(e) => { handleInputChange(e); }}
          />
        </label>
        <label htmlFor="startTime">
          Start Time
          <br />
          <Input
            type="number"
            name="startTime"
            id="startTime"
            value={startTime}
            classes="mt-10px h-25px w-300px"
            placeholder="Enter Start Time"
            onChange={(e) => { handleInputChange(e); }}
          />
        </label>
        <label htmlFor="endTime">
          End Time
          <br />
          <Input
            type="number"
            name="endTime"
            id="endTime"
            value={endTime}
            classes="mt-10px h-25px w-300px"
            placeholder="Enter End Time"
            onChange={(e) => { handleInputChange(e); }}
          />
        </label>
        <div className="df jcsa aic w-300px">
          <button className="btnSec fs-14" type="submit">
            Submit
          </button>
          {/* <button className="btnNeg fs-14" type="button" onClick={() => { goToLogin(); }}>
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default AddToPlayListForm;
