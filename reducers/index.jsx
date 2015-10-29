import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import {
  REQUEST_POSTS
} from '../actions';

function registerMacInfo(state={}, action) {
  switch (action.type) {
  case REQUEST_POSTS:
    return action.registeredMacAddress;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
    registerMacInfo,
    router
});

export default rootReducer;
