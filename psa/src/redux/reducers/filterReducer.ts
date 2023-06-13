
export interface FilterState {
    sortBy: string;
    filter: string

}

const initialState: FilterState = {
    sortBy: '',
    filter: ''
};

type FilterAction = {
    type: 'FILTER_BY';
    payload: {
         str: string;

    };
} | {
    type: 'SORT_BY';
    payload: {
        str: string;

    };
};

const filterReducer = (state: FilterState = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case 'FILTER_BY':
            return {
                ...state,
                sortBy: action.payload.str
            };
        case 'SORT_BY':
            return {
                ...state,
                filter: action.payload.str
            };
        default:
            return state;
    }
};

export default filterReducer;