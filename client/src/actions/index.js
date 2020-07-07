import axios from 'axios';
import { FETCH_USER, FETCH_VIDEOS, UPDATE_SETTING } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchVideos = () => async (dispatch) => {
    const res = await axios.get('/api/videos');
    dispatch({ type: FETCH_VIDEOS, payload: res.data });
};

export const updateSetting = (setting) => {
    return {
        type: UPDATE_SETTING,
        payload: setting,
    };
};
