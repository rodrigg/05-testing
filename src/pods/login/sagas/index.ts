import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LoginActions,
  LOGIN_REQUEST,
  loginSuccessAction,
} from 'pods/login/actions';
import { validateCredentials } from 'pods/login/login.api';
import { linkRoutes } from 'core';

export function* watchFetchMembersRequest() {
  yield takeLatest(LOGIN_REQUEST, fetchLoginSaga);
}

export function* fetchLoginSaga(_action: LoginActions) {
  const valid = yield call(
    validateCredentials,
    _action.payload.loginEntity.login,
    _action.payload.loginEntity.password
  );
  if (valid) {
    yield put(loginSuccessAction(_action.payload));
    _action.payload.history.push(linkRoutes.hotelCollection);
  } else {
    alert(
      'invalid credentials, use admin/test, excercise: display a mui snackbar instead of this alert.'
    );
  }
}
