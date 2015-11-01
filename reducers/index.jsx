import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import {
  REQUEST_POSTS, FETCH_MAC_DATA
} from '../actions';

const initialState = {
    mac_addresses: ''
}


function registerMacInfo(state={}, action) {
  switch (action.type) {
  case REQUEST_POSTS:
    console.log("IN REGISTER Reducer");
    console.log(action);
    return {mac_addresses: action.registeredMacAddress};
  default:
    return state;
  }
}

function fetchedData(state=initialState, action) {
  switch (action.type) {
  case FETCH_MAC_DATA:
    console.log("IN SEARCH Reducer");
    console.log(action);
    const a = Object.assign({}, state, {mac_addresses: action.fetchedMacInfo});
    console.log("assing:" +a);
    return a;
  default:
    return state;
  }
}


const rootReducer = combineReducers({
    registerMacInfo,
    fetchedData,
    router
});

export default rootReducer;
