import { combineReducers } from 'redux';
import authReducer from './authReducer';
import videoReducer from './videoReducer';
import settingReducer from './settingReducer';
import videoListReducer from './videoListReducer';

export default combineReducers({
    auth: authReducer,
    videos: videoReducer,
    setting: settingReducer,
    videoList: videoListReducer,
});
