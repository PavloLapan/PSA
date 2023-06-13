import CoursesMock from "./courses-mock";

export interface Course {
    name: string;
    date: Date;
    comment?: string;
}
class FilterHelperService {


    static filteredCourses = function (filterBy){
       return CoursesMock.filter((course: Course) =>
            course.name.toLowerCase().includes(filterBy.toLowerCase())
        );
    }


    static sortedCourses(filterBy: string, sortBy: string): Course[] {
        const filteredCourses = this.filteredCourses(filterBy);
        const sortedCourses = filteredCourses.sort((courseA: Course, courseB: Course) => {
            if (sortBy === 'name') {
                return courseA.name.localeCompare(courseB.name);
            } else if (sortBy === 'date') {
                return new Date(courseA.date).getTime() - new Date(courseB.date).getTime();
            }
            return 0;
        });

        return sortedCourses;
    }
}

export default FilterHelperService