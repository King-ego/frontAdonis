import { Creators, Types } from './actions';
// import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { all, put, takeLatest, call } from 'redux-saga/effects';

import api from '../../../utils/api';

export function* requestMoment() {
  try {
    const { data } = yield call(api.get, `/moments`);
    console.log({ data: data.data });
    yield put(Creators.sucessMoment(data.data));
  } catch (error) {
    console.log({ error });
  }
}

export default all([takeLatest(Types.REQUEST_MOMENT, requestMoment)]);
