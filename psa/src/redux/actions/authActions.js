export const login = (obj) => {
    return {
        type: 'LOGIN',
        payload: {
            obj
        },
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};