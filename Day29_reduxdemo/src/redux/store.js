import {combineReducers,createStore} from 'redux';
import counterReducer from './reducers/counterReducer';
export const myreducer= combineReducers({
    counterReducer,
});
 
export const store=createStore(
    counterReducer
);
 
 