import { combineReducers } from 'redux';
import { LoginState, loginReducer } from 'pods/login/reducers';

export interface State {
  loginState: LoginState;
}

export const reducers = combineReducers<State>({
  loginState: loginReducer,
});
