// import { Button } from "react-bootstrap";
// import {
//   FaCheckCircle,
//   FaBan,
//   FaChartBar,
//   FaBell,
//   FaBullhorn,
//   FaCloudUploadAlt,
//   FaDownload,
//   FaHome,
//   FaListUl,
//   FaUserClock
// } from "react-icons/fa";

// export default function CourseStatus() {
//   return (
//     <div className="p-3">
//       <div id="wd-course-status">
//         <h2>Course Status</h2>
//         <div className="d-flex gap-2 mb-2">
//           <Button variant="secondary">
//             <FaBan className="me-1" />
//             Unpublish
//           </Button>

//           <Button variant="success">
//             <FaCheckCircle className="me-1" />
//             Publish
//           </Button>
//         </div>

//         <div className="d-grid gap-2">
//           <Button variant="secondary" size="sm">
//             <FaUserClock className="me-1" />
//             View Course Progress
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaDownload className="me-1" />
//             Import Existing Content
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaCloudUploadAlt className="me-1" />
//             Import From Commons
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaHome className="me-1" />
//             Choose Home Page
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaListUl className="me-1" />
//             View Course Stream
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaBullhorn className="me-1" />
//             View Announcement
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaChartBar className="me-1" />
//             View Analytics
//           </Button>
//           <Button variant="secondary" size="sm">
//             <FaBell className="me-1" />
//             View Course Notifications
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/Kambaz/Courses/Home/Status.tsx
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome, FaChartBar, FaBullhorn, FaBell } from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" />
                        Unpublish
                    </Button>
                </div>
                <div className="w-50">
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5" />
                        Publish
                    </Button>
                </div>
            </div>
            <br />
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" />
                Import Existing Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" />
                Import from Commons
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaHome className="me-2 fs-5" />
                Choose Home Page
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaChartBar className="me-2 fs-5" />
                View Course Stream
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaBullhorn className="me-2 fs-5" />
                New Announcement
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaChartBar className="me-2 fs-5" />
                New Analytics
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaBell className="me-2 fs-5" />
                View Course Notifications
            </Button>
        </div>
    );
}