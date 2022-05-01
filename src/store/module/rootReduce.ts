import { combineReducers } from 'redux';
import info from './Info/reduce';
import moment from './Moments/reduce';

export default combineReducers({ info, moment });
