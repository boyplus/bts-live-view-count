import axios from 'axios';
import {
    FETCH_USER,
    FETCH_VIDEOS,
    UPDATE_SETTING,
    UPDATE_VIDEOS,
} from './types';

import sortVideo from '../utils/sortVideo';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchVideos = () => async (dispatch, getState) => {
    const res = await axios.get('/api/videos');
    const sortBy = getState().setting.sortBy;
    sortVideo(res.data.videos, sortBy);
    dispatch({ type: FETCH_VIDEOS, payload: res.data });
};

export const updateSetting = (setting) => async (dispatch, getState) => {
    const videos = getState().videos;
    const sortBy = setting.sortBy;
    sortVideo(videos.videos, sortBy);
    dispatch({ type: UPDATE_VIDEOS, payload: videos.videos });
    dispatch({ type: UPDATE_SETTING, payload: setting });
};
