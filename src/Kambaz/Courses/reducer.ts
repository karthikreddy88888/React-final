// import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   enrollments: enrollments,
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     enrollStudent: (state, { payload }) => {
      
//       if (!state.enrollments.some(e => e.user === payload.user && e.course === payload.course)) {
//         state.enrollments.push({ _id: uuidv4(), user: payload.user, course: payload.course });
//       }
//     },
//     unenrollStudent: (state, { payload }) => {
    
//       state.enrollments = state.enrollments.filter(e => !(e.user === payload.user && e.course === payload.course));
//     }
//   }
// });

// export const { enrollStudent, unenrollStudent } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses : []
}

const coursesSlice = createSlice({
    name: "courses",
    initialState: initialState,
    reducers: {
        setCourses: (state, action) => {
          state.courses = action.payload;
        },
        addCourse: (state, {payload: course})=>{
            const newCourse  = {
                _id: uuidv4(),
                name: course.name,
                description: course.description
            }
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse:(state, {payload: courseId})=>{
          state.courses = state.courses.filter(
              (course: any)=>course._id !== courseId) ;
        },
        updateCourse:(state, {payload: course})=>{
            state.courses = state.courses.map((c: any) => c._id === course._id ? course : c) as any
        }
    }
});

export const {addCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;