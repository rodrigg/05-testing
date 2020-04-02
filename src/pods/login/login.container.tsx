import { LoginComponent } from './login.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginEntity } from './reducers';
import { State } from 'reducers';
import { loginRequestAction } from './actions';

const mapStateToProps = ({ loginState }: State) => ({
  initialLogin: loginState.login,
});

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onLogin: (loginEntity: LoginEntity) => {
      return dispatch(loginRequestAction({ loginEntity, history }));
    },
  };
};

export const LoginContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);
