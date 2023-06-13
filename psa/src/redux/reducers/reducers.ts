import { combineReducers, Reducer } from 'redux';
import authReducer, { AuthState } from './authReducer';
import filterReducer, {FilterState} from "./filterReducer";

export interface RootState {
    auth: AuthState;
    filter: FilterState
}

const rootReducer= combineReducers({
    auth: authReducer,
    filter: filterReducer

});

export default rootReducer;
