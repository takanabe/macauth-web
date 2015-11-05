import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import {
  REQUEST_POSTS, FETCH_MAC_DATA,
  CHANGE_PAGE
} from '../actions';

const initialState = {
    mac_addresses: '',
    current_page: 1
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
    return Object.assign({}, state, {mac_addresses: action.mac_addresses,
                                     total_pages: action.total_pages,
                                     current_page_size: action.current_page_size
                                    });
  case CHANGE_PAGE:
    console.log("IN CHANGE_PAGE");
    return Object.assign({}, state, {current_page: action.nextPage});
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
