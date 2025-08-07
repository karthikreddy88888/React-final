// import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { enrollStudent, unenrollStudent } from "./Courses/reducer";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const enrollments = useSelector(
//     (state: any) => state.enrollmentsreducer.enrollments
//   );

//   const dispatch = useDispatch();
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   const filteredCourses = showAllCourses
//     ? courses
//     : courses.filter((course: any) =>
//         enrollments.some(
//           (enrollment: any) =>
//             enrollment.user === currentUser._id &&
//             enrollment.course === course._id
//         )
//       );

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard {currentUser?.username}</h1>
//       <hr />

//       <div className="d-flex justify-content-end mb-3">
//         <button
//           className="btn btn-info"
//           onClick={() => setShowAllCourses((prev) => !prev)}
//         >
//           {showAllCourses ? "My Enrollments" : "All Courses"}
//         </button>
//       </div>

//       {currentUser?.role === "FACULTY" && (
//         <>
//           <h5 style={{ position: "relative" }}>
//             New Course
//             <button
//               className="btn btn-primary float-end"
//               id="wd-add-new-course-click"
//               onClick={addNewCourse}
//             >
//               Add
//             </button>
//             <button
//               className="btn btn-warning float-end me-2"
//               onClick={updateCourse}
//               id="wd-update-course-click"
//             >
//               Update
//             </button>
//           </h5>

//           <br />

//           <FormControl
//             value={course.name}
//             className="mb-2"
//             onChange={(e) =>
//               setCourse({ ...course, name: e.target.value })
//             }
//           />

//           <FormControl
//             as="textarea"
//             value={course.description}
//             rows={3}
//             className="mb-3"
//             onChange={(e) =>
//               setCourse({ ...course, description: e.target.value })
//             }
//           />

          
          
//         </>
//       )}

//       <h2 id="wd-dashboard-published">
//         {showAllCourses ? "All Courses" : "My Enrollments"} (
//         {filteredCourses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {filteredCourses.map((course) => {
//             const enrolled = enrollments.some(
//               (enrollment: any) =>
//                 enrollment.user === currentUser._id &&
//                 enrollment.course === course._id
//             );

//             const canAccess =
//               currentUser.role === "Faculty" || enrolled;

//             return (
//               <Col
//                 key={course._id}
//                 className="wd-dashboard-course"
//                 style={{ width: "300px" }}
//               >
//                 <Card>
//                   <Link
//                     to={
//                       canAccess
//                         ? `/Kambaz/Courses/${course._id}/Home`
//                         : "#"
//                     }
//                     className="wd-dashboard-course-link text-decoration-none text-dark"
//                   >
//                     <Card.Img
//                       src="/images/reactjs.jpg"
//                       variant="top"
//                       width="100%"
//                       height={160}
//                     />
//                     <Card.Body className="card-body">
//                       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                         {course.name}
//                       </Card.Title>
//                       <Card.Text
//                         className="wd-dashboard-course-description overflow-hidden"
//                         style={{ height: "100px" }}
//                       >
//                         {course.description}
//                       </Card.Text>

//                       {currentUser.role === "FACULTY" && (
//                         <>
//                           <Button variant="primary">Go</Button>
//                           <button
//                             onClick={(event) => {
//                               event.preventDefault();
//                               deleteCourse(course._id);
//                             }}
//                             className="btn btn-danger float-end"
//                             id="wd-delete-course-click"
//                           >
//                             Delete
//                           </button>
//                           <button
//                             id="wd-edit-course-click"
//                             onClick={(event) => {
//                               event.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning me-2 float-end"
//                           >
//                             Edit
//                           </button>
//                         </>
//                       )}

//                       {currentUser.role !== "Faculty" && (
//                         <button
//                           className={`btn ${
//                             enrolled ? "btn-danger" : "btn-success"
//                           } w-100 mt-2`}
//                           onClick={(event) => {
//                             event.preventDefault();
//                             if (enrolled) {
//                               dispatch(
//                                 unenrollStudent({
//                                   user: currentUser._id,
//                                   course: course._id,
//                                 })
//                               );
//                             } else {
//                               dispatch(
//                                 enrollStudent({
//                                   user: currentUser._id,
//                                   course: course._id,
//                                 })
//                               );
//                             }
//                           }}
//                         >
//                           {enrolled ? "Unenroll" : "Enroll"}
//                         </button>
//                       )}
//                     </Card.Body>
//                   </Link>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </div>
//   );
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {Button, Card, Col, FormControl, Row} from "react-bootstrap";
import { useSelector} from "react-redux";
import {useState} from "react";

export default function Dashboard({courses, allCourses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enroll, unEnroll}: {
    courses: any[];
    allCourses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: any) => void;
    updateCourse: () => void;
    enroll: (courseId: any) => void;
    unEnroll: (courseId: any) => void;
}) {
    const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const handleToggling = (status: boolean) => {
        setShowAllCourses(status);
    }

    const isUserEnrolled = (courseId: string) => {
        return courses.some((course: any) => course._id === courseId);
    };

    const displayedCourses = showAllCourses ? allCourses : courses;

    return (
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => handleToggling(!showAllCourses)}>
                    {showAllCourses ? 'My Courses' : 'All Courses'}
                </button>
            </div>
            <hr/>
            {isFaculty && (
                <>
                    <h5>New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>

                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                        <br/>
                        <br/>
                        <FormControl
                            value={course.name}
                            className="mb-2"
                            onChange={(e) => setCourse({...course, name: e.target.value})}
                            placeholder="Course Name"
                        />
                        <FormControl
                            as="textarea"
                            value={course.description}
                            rows={3}
                            onChange={(e) => setCourse({...course, description: e.target.value})}
                            placeholder="Course Description"
                        />
                    </h5>
                    <hr/>
                </>
            )}
            <hr/>
            <h2 id="wd-dashboard-published">
                {showAllCourses ? `All Courses (${allCourses.length})` : `My Courses (${courses.length})`}
            </h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {displayedCourses.map((courseItem: any) => (
                        <Col key={courseItem._id} className="wd-dashboard-course" style={{width: "300px"}}>
                            <Card>
                                <Link
                                    to={`/Kambaz/Courses/${courseItem._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160}/>
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {courseItem.name}
                                        </Card.Title>
                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{height: "100px"}}
                                        >
                                            {courseItem.description}
                                        </Card.Text>

                                        {showAllCourses ? (
                                            // Show enroll/unenroll buttons when viewing all courses
                                            isUserEnrolled(courseItem._id) ? (
                                                <Button
                                                    variant="danger"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        unEnroll(courseItem._id);
                                                    }}
                                                >
                                                    Unenroll
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="success"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                       enroll(courseItem._id)
                                                    }}
                                                >
                                                    Enroll
                                                </Button>
                                            )
                                        ) : (
                                            <>
                                                <Button variant="primary">Go</Button>
                                                {isFaculty && (
                                                    <>
                                                        <button
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                deleteCourse(courseItem._id);
                                                            }}
                                                            className="btn btn-danger float-end"
                                                            id="wd-delete-course-click"
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            id="wd-edit-course-click"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                setCourse(courseItem);
                                                            }}
                                                            className="btn btn-warning me-2 float-end"
                                                        >
                                                            Edit
                                                        </button>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}