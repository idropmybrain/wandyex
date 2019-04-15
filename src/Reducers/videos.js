/* eslint-disable no-console */
export const GET_VIDEOS_REQUESTED = 'videos/VIDEOS_REQUESTED';
export const GET_VIDEOS_SUCCESS = 'videos/VIDEOS_SUCCESS';
export const GET_VIDEOS_FAILURE = 'videos/VIDEOS_FAILURE';
export const POST_VIDEO_REQUESTED = 'videos/VIDEO_REQUESTED';
export const POST_VIDEO_SUCCESS = 'videos/VIDEO_SUCCESS';
export const POST_VIDEO_FAILURE = 'videos/VIDEO_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  videos: null,
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_VIDEOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        videos: action.result
      };
    }
    case GET_VIDEOS_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }
    case POST_VIDEO_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case POST_VIDEO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        message: action.result
      };
    }
    case POST_VIDEO_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }
    default:
      return state;
  }
};

export const getVideos = () => {
  return {
    types: [GET_VIDEOS_REQUESTED, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE],
    promise: client => client.get('fakeapi/videos')
  };
};

export const addToPlaylist = (data) => {
  return {
    types: [POST_VIDEO_REQUESTED, POST_VIDEO_SUCCESS, POST_VIDEO_FAILURE],
    promise: client => client.post('fakeapi/videos', { data }),
    payload: data
  };
};
