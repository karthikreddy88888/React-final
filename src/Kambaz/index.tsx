// import Account from "./Account";
// import Courses from "./Courses";
// import KambazNavigation from "./Navigation";
// import { Routes, Route, Navigate } from "react-router";
// import Dashboard from "./Dashboard";
// import "./styles.css"
// import * as db from "./Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ProtectedRoute from "./Account/ProtectedRoute";


// export default function Kambaz() {  
//    const [courses, setCourses] = useState<any[]>(db.courses);
//   const [course, setCourse] = useState<any>({
//     _id: "1234", name: "New Course", number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//   });
//   const addNewCourse = () => {
//     setCourses([...courses, { ...course, _id: uuidv4() }]);
//   };
//   const deleteCourse = (courseId: any) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };
//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
    
    
    
//     <div>
//         <div id="wd-kambaz">
        
//             <KambazNavigation />
//             <div className="wd-main-content-offset p-3">

          
          
//       <Routes>
//         <Route path="/" element={<Navigate to="Account" />} />
//         <Route path="/Account/*" element={<Account />} />
//         <Route path="/Dashboard/*" element={<ProtectedRoute><Dashboard 
//               courses={courses}
//               course={course}
//               setCourse={setCourse}
//               addNewCourse={addNewCourse} 
//               deleteCourse={deleteCourse}
//               updateCourse={updateCourse}/></ProtectedRoute>} />
//         <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
//         <Route path="/Calendar" element={<h1>Calendar</h1>} />
//         <Route path="/Inbox" element={<h1>Inbox</h1>} />

//       </Routes>
//       </div>
//     </div>
      
//     </div>
    
    
    
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import Account from "./Account";
import {Routes} from "react-router-dom";
import {Navigate, Route} from "react-router";
import Dashboard from "./Dashboard.tsx";
import KambazNavigation from "./Navigation.tsx";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import Session from "./Account/Session.tsx";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client"
import * as enrollmentClient from "./enrollmentClient.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const defaultCourse = {
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    };
    const [course, setCourse] = useState<any>(defaultCourse);

    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAllCourses = async () => {
        try {
            const allAvailableCourses = await courseClient.fetchAllCourses();
            setAllCourses(allAvailableCourses);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCourses();
        fetchAllCourses();
    }, [currentUser]);

    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
        setAllCourses([...allCourses, newCourse]);
        setCourse(defaultCourse);
    };

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
        setAllCourses(allCourses.filter((course) => course._id != courseId))
    };


    const updateCourse = async () => {
        console.log(course);
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        }));
        setAllCourses(allCourses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })
    )};


    const enroll = async(courseId: string) => {
        await enrollmentClient.enrollInCourse({userId: currentUser._id, courseId: courseId});
        const course = allCourses.find((course: any) => course._id === courseId);
        setCourses([...courses, course])
    }


    const unEnroll = async(courseId: string) => {
        await enrollmentClient.unEnrollInCourse({userId: currentUser._id, courseId: courseId});
        setCourses(courses.filter((course) => course._id !== courseId));
    }

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation/>
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kambaz/Account"/>}/>
                        <Route path="/Account/*" element={<Account/>}/>
                        <Route
                            path="Dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard
                                        courses={courses}
                                        allCourses={allCourses}
                                        course={course}
                                        setCourse={setCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                        enroll={enroll}
                                        unEnroll={unEnroll}
                                    />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="Courses/:cid/*"
                            element={
                                <ProtectedRoute requireEnrollment={true}>
                                    <Courses courses={courses} />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                        <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                    </Routes>
                </div>
            </div>
        </Session>
    );
}