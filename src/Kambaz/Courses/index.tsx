// import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
// import CourseNavigation from "./Navigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import Table from "./People/Table";
// import { FaBars } from "react-icons/fa6";
// export default function Courses({ courses }: { courses: any[]; }) {
//   const { cid } = useParams();
//   const course = courses.find((course) => course._id === cid);
//   const { pathname } = useLocation();
//   const currentPage = pathname.split("/")[4];

//   if (!course) {
//     return <h1>Course Not Found</h1>;
//   }

//   return (
//     <div style={{ padding: "10px 20px", backgroundColor: "#fff" }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           borderBottom: "1px solid #ddd",
//           paddingBottom: "10px",
//         }}
//       >
//         <FaBars style={{ color: "crimson", marginRight: "10px", fontSize: "30px" }} />
//         <span style={{ color: "crimson", fontSize: "30px" }}>
//           {course.name} &gt; {currentPage}
//         </span>
//       </div>

//       <table>
//         <tr>
//           <td valign="top">
//             <CourseNavigation />
//           </td>
//           <td valign="top">
//             <Routes>
//               <Route path="/" element={<Navigate to="Home" />} />
//               <Route path="Home" element={<Home />} />
//               <Route path="Modules" element={<Modules />} />
//               <Route path="Assignments" element={<Assignments />} />
//               <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//               <Route path="People" element={<Table />} />
//               <Route path="Grades" element={<h2>Grades</h2>} />
//               <Route path="Quizzes" element={<h2>Quizzes</h2>} />
//               <Route path="Zoom" element={<h2>Zoom</h2>} />
//               <Route path="Piazza" element={<h2>Piazza</h2>} />
//             </Routes>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import {Route, Routes} from "react-router";
import CourseNavigation from "./Navigation.tsx";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor.tsx";
import {FaAlignJustify} from "react-icons/fa";
import PeopleTable from "./People/Table.tsx";
import {useLocation, useParams} from "react-router-dom";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course: any) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
                <div className="d-flex">
                    <div className="d-none d-md-block">
                        <CourseNavigation />
                    </div>
                    <div className="flex-fill">
                        <Routes>
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="Assignments/create" element={<AssignmentEditor />} />
                            <Route path="Zoom" element={<h1>Zoom</h1>} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                    </div>
                </div>
        </div>
    );
}