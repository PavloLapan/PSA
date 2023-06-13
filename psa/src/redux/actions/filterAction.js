export const filterBy = (str) => {
    return {
        type: 'FILTER_BY',
        payload: {
            str
        },
    };
};

export const sortBy = (str) => {
    return {
        type: 'SORT_BY',
        payload: {
            str
        }
    };
};