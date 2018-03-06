import { artists } from '../util/artists.js';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const fetchArtists = () => dispatch => {
  dispatch(receiveArtists(artists));
};