import { all } from 'redux-saga/effects';
import { watchFetchMembersRequest } from 'pods/login/sagas';
import 'regenerator-runtime/runtime';

export function* rootSaga() {
  yield all([watchFetchMembersRequest()]);
}
