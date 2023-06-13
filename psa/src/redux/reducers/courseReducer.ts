
export interface Course{
    id: number,
    name: string,
    date: string,
    comment: string[],
    descr: string
}
export interface CourseState {
    courses: Course[];
    course: Course | null;
}

const initialState = {
    courses: [],
    course: null,
};

type CourseAction = {
    type: 'SET_COURSES';
    payload: {
        courses: Course[];
    };
} | {
    type: 'SELECT_COURSE';
    payload: {
        course: Course[];
    };
};

const courseReducer = (state: CourseState = initialState, action: CourseAction): CourseState => {
    switch (action.type) {
        case 'SET_COURSES':
            return {
                ...state,
                courses: action.payload.courses,
            };
        case 'SELECT_COURSE':
            return {
                ...state,
                //@ts-ignore
                course: action.payload.course,
            };
        default:
            return state;
    }
};

export default courseReducer;