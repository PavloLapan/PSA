import {combineReducers} from 'redux';
import authReducer, {AuthState} from './authReducer';
import courseReducer, {CourseState} from "./courseReducer";

export interface RootState {
    auth: AuthState;
    course: CourseState;
}

const rootReducer = combineReducers({
    auth: authReducer,
    course: courseReducer
});

export default rootReducer;
