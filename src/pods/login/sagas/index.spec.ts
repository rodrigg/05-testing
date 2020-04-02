import { watchFetchMembersRequest, fetchLoginSaga } from '.';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LoginActions, loginSuccessAction } from '../actions';
import { LoginEntity } from '../reducers';
import * as api from 'pods/login/login.api';
describe('pages/login sagas', () => {
  describe('fetchLoginSaga', () => {
    it('should wait for expected action and execute the expected worker', () => {
      // Arrange
      const saga = watchFetchMembersRequest();
      // Act
      const result = saga.next();

      // Assert
      expect(result.value).toEqual(takeLatest(LOGIN_REQUEST, fetchLoginSaga));
    });
  });

  it('should put fetchLoginRequest with given logon success call is succesful', () => {
    // Arrange
    const fetchLoginReques: LoginActions = {
      type: 'LOGIN_REQUEST',
      payload: {
        history: jest.fn(),
        loginEntity: { login: 'a', password: 'a' },
      },
    };
    jest.spyOn(api, 'validateCredentials').mockResolvedValue(true);

    const saga = fetchLoginSaga(fetchLoginReques);
    // Act & Assert
    expect(saga.next().value).toEqual(call(api.validateCredentials, 'a', 'a'));
    expect(saga.next(true).value).toEqual(
      put(loginSuccessAction(fetchLoginReques.payload))
    );
  });
});
