import { combineReducers } from 'redux';
import authReducer from './authReducer';
import videoReducer from './videoReducer';
import settingReducer from './settingReducer';

export default combineReducers({
    auth: authReducer,
    videos: videoReducer,
    setting: settingReducer,
});
