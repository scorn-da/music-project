import { TrackAction, TrackActionTypes } from '../../types/track';

import axios from 'axios';
import { Dispatch } from 'redux';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const res = await axios.get('http://localhost:5000/tracks');
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: res.data});
    } catch (e) {
      dispatch({ type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Произошла ошибка при загрузке треков' })
    }
  }
}

export const searchTracks = ( query: string ) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const res = await axios.get('http://localhost:5000/tracks/search?query=' + query);
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: res.data});
    } catch (e) {
      dispatch({ type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Произошла ошибка при загрузке треков' })
    }
  }
}
