import { Creators, Types } from './actions';
// import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { all, put, takeLatest } from 'redux-saga/effects';

export function* requestStorage() {
  localStorage.setItem('token', 'abc');
  yield put(Creators.sucessActionTab('vai ficar tudo bem'));
}

export default all([takeLatest(Types.REQUEST_ACTION_TAB, requestStorage)]);
