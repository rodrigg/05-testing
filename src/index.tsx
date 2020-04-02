import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotelCollectionScene } from './scenes';
import { switchRoutes } from 'core';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { rootSaga } from './sagas';

const nonTypedWindow: any = window;
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        />
        <Route
          path={switchRoutes.hotelCollection}
          component={HotelCollectionScene}
        />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
