import { combineReducers } from 'redux';
import authReducer from './authReducer';
import videoReducer from './videoReducer';

export default combineReducers({ auth: authReducer, videos: videoReducer });
