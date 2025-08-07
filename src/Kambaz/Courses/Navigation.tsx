// import { ListGroup } from "react-bootstrap";
// import { Link , useParams , useLocation} from "react-router-dom";
// export default function CourseNavigation() {
//   const { cid } = useParams();
//   const { pathname } = useLocation();
//   const links = [
//     { label: "Home", path: "Home" },
//     { label: "Modules", path: "Modules" },
//     { label: "Assignments", path: "Assignments" },
//     { label: "Piazza", path: "Piazza" },
//     { label: "Grades", path: "Grades" },
//     { label: "Quizzes", path: "Quizzes" },
//     { label: "Zoom", path: "Zoom" },
//     { label: "People", path: "People" }
//   ];
//   return (
//     <ListGroup className="rounded-0 wd">
//       {links.map((link) => (
//       <ListGroup.Item
//       key ={link.path}
//       as={Link} 
//       to={`/Kambaz/Courses/${cid}/${link.path}`}
//       className={`list-group-item text-danger border border-0
//             ${pathname.includes(link.path) ? "active" : ""}`}>
//        {link.label}

      
//       </ListGroup.Item>
//       ))}
//     </ListGroup>

// );}


import { Link, useParams, useLocation } from "react-router-dom";
export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/Kambaz/Courses/${cid}/${link}`}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}