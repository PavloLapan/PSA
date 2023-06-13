export interface AuthState {
    isAuthenticated: boolean;
    obj: {
        email: string;
        password: string
    }

}

const initialState: AuthState = {
    isAuthenticated: false,
    obj: {
        email: '',
        password: ''
    }

};

type AuthAction = {
    type: 'LOGIN';
    payload: {
        obj: {
            email: string;
            password: string
        }

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
                obj:{
                    email: action.payload.obj.email,
                    password: action.payload.obj.password
                }

            };
        case 'LOGOUT':
            return {
                ...state,
                obj:{
                    email: '',
                    password: ''
                },
                isAuthenticated: false,

            };
        default:
            return state;
    }
};

export default authReducer;