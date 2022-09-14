import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

export default store;
