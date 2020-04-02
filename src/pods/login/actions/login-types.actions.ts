import { LoginEntity } from '../reducers';

export const LOGIN_SUCCESS = 'LOGIN_SET_STATE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_INVALID_CREDENTIALS = 'LOGIN_INVALID_CREDENTIALS';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: PayloadLogin;
}
interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: PayloadLogin;
}
interface LoginErrorAction {
  type: typeof LOGIN_INVALID_CREDENTIALS;
  payload: PayloadLogin;
  error: string;
}

export type PayloadLogin = { loginEntity: LoginEntity; history: any };

export type LoginActions =
  | LoginSuccessAction
  | LoginRequestAction
  | LoginErrorAction;
