import {combineReducers, createStore} from 'redux';
import {user} from "./auth";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')!)
    : {}

const rootReducer = combineReducers({user});
const store = createStore(rootReducer, persistedState);


store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


export default store;
