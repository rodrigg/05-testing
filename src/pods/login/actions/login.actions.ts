import {
  LoginActions,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  PayloadLogin,
} from './login-types.actions';

export const loginRequestAction = (payload: PayloadLogin): LoginActions => ({
  type: LOGIN_REQUEST,
  payload,
});
export const loginSuccessAction = (payload: PayloadLogin): LoginActions => ({
  type: LOGIN_SUCCESS,
  payload,
});
