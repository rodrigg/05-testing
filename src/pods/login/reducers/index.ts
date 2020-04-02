import { LoginActions, LOGIN_SUCCESS } from '../actions';

export interface LoginEntity {
  login: string;
  password: string;
}

export interface LoginState {
  login: LoginEntity;
}
export const createEmptyLogin = (): LoginEntity => ({
  login: '',
  password: '',
});
const initialLoginState: LoginState = {
  login: createEmptyLogin(),
};

export const loginReducer = (
  state: LoginState = initialLoginState,
  action: LoginActions
): LoginState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload.loginEntity };
    default:
      return state;
  }
};
