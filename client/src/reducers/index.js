import { combineReducers } from 'redux';
import auth from './auth';
import workers from './workers';

export default combineReducers({ auth, workers });