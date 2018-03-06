import { combineReducers } from 'redux';

import ArtistsReducer from './artistsReducer.js';

const RootReducer = combineReducers({
  artists: ArtistsReducer,
});

export default RootReducer;