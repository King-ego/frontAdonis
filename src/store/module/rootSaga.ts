import { all } from 'redux-saga/effects';
import info from './Info/saga';
import moment from './Moments/saga';

export default function* rootSaga() {
  yield all([info, moment]);
}
