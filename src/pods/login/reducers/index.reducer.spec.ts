import { LoginActions, LOGIN_SUCCESS } from '../actions';
import { LoginState, createEmptyLogin, loginReducer } from '.';
import deepFreeze from 'deep-freeze';

describe('login reducer', () => {
  it('LOGIN_SET_STATE modify state.login ', () => {
    // Arrange
    const action: LoginActions = {
      type: LOGIN_SUCCESS,
      payload: {
        loginEntity: {
          login: 'login',
          password: 'password',
        },
        history: undefined,
      },
    };

    const initialLoginState: LoginState = deepFreeze({
      login: createEmptyLogin(),
    });

    // Act
    const result = loginReducer(initialLoginState, action);

    // Assert

    expect(result.login.login).toBe('login');
    expect(result.login.password).toBe('password');
  });

  it('LOGIN_SET_STATE modify state.login ', () => {
    // Arrange
    const action: LoginActions = {
      type: null,
      payload: {
        loginEntity: {
          login: 'login',
          password: 'password',
        },
        history: undefined,
      },
    };

    const initialLoginState: LoginState = deepFreeze({
      login: createEmptyLogin(),
    });

    // Act
    const result = loginReducer(initialLoginState, action);

    // Assert

    expect(result).toBe(initialLoginState);
  });
});
