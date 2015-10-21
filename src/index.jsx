import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools';

import configureStore from '../store/configureStore';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById("root")
);
