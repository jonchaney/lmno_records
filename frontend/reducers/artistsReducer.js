import merge from 'lodash/merge';

import {
  RECEIVE_ARTISTS,
} from '../actions/artistActions';

const defaultState = {
    artists: [{
    "name": null,
    "songTitle": null,
    "songURL": null,
    "location": null,
    "imageURL": null
    }]
  };

const ArtistsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = action.artists;
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return newState.artists;
    default:
      return state;
  }
};

export default ArtistsReducer;