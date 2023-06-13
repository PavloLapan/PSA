import { combineReducers, Reducer } from 'redux';
import authReducer, { AuthState } from './authReducer';

export interface RootState {
    auth: AuthState;
}

const rootReducer= combineReducers({
    auth: authReducer,
});

export default rootReducer;
