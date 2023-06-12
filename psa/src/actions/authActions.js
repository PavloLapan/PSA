export const login = (initials) => {
    return {
        type: 'LOGIN',
        payload: {
            initials,
        },
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};