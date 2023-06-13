export interface AuthState {
    isAuthenticated: boolean;
    login: string;
    password: string

}

const initialState: AuthState = {
    isAuthenticated: false,
    login: '',
    password: ''
};

type AuthAction = {
    type: 'LOGIN';
    payload: {
        login: string;
        password: string
    };
} | {
    type: 'LOGOUT';
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                login: action.payload.login,
                password: action.payload.password
            };
        case 'LOGOUT':
            return {
                ...state,
                login:'',
                password: '',
                isAuthenticated: false,

            };
        default:
            return state;
    }
};

export default authReducer;