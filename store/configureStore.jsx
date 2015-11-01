import routes from '../src/routes';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import createHistory from 'history/lib/createBrowserHistory';
import { createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

const finalCrateStore = compose(
  applyMiddleware(thunk, createLogger()),
  reduxReactRouter({ routes, createHistory }),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCrateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
