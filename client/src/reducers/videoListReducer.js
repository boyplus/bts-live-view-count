import { FETCH_VIDEO_LIST } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_VIDEO_LIST:
            console.log('inside reducer');
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
