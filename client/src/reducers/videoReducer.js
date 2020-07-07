import { FETCH_VIDEOS, UPDATE_VIDEOS } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            return action.payload;
        case UPDATE_VIDEOS:
            return { ...state, videos: action.payload };
        default:
            return state;
    }
}
