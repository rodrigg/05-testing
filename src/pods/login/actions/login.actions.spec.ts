import { loginRequestAction, LOGIN_REQUEST, LOGIN_SUCCESS } from '.';
import { loginSuccessAction } from './login.actions';

describe('login actions', () => {
  it('loginRequestAction', () => {
    //Arrange
    const historySpy = jest.fn();
    const payload = {
      loginEntity: { login: 'login', password: 'password' },
      history: historySpy,
    };
    //Act
    const result = loginRequestAction(payload);
    //expect
    expect(result.type).toBe(LOGIN_REQUEST);
    expect(result.payload.loginEntity.login).toBe('login');
    expect(result.payload.loginEntity.password).toBe('password');
    expect(result.payload.history).toBe(historySpy);
  });

  it('loginSuccesAction', () => {
    //Arrange
    const historySpy = jest.fn();
    const payload = {
      loginEntity: { login: 'login', password: 'password' },
      history: historySpy,
    };
    //Act
    const result = loginSuccessAction(payload);
    //expect
    expect(result.type).toBe(LOGIN_SUCCESS);
    expect(result.payload.loginEntity.login).toBe('login');
    expect(result.payload.loginEntity.password).toBe('password');
    expect(result.payload.history).toBe(historySpy);
  });
});
