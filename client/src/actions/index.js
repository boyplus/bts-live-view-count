import axios from 'axios';
import { FETCH_USER, FETCH_VIDEOS } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchVideos = () => async (dispatch) => {
    const res = await axios.get('/api/videos');
    dispatch({type: FETCH_VIDEOS, payload: res.data});
}
