export const setCourses = (courses) => {
    return {
        type: 'SET_COURSES',
        payload: {
            courses,
        },
    };
};

export const setCourse = (course) => {
    return {
        type: 'SELECT_COURSE',
        payload: {
            course,
        },
    };
};