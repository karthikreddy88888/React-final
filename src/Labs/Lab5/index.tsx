// import { Container } from "react-bootstrap";
// import EnvironmentVariables from "./EnvironmentVariables";
// import PathParameters from "./PathParameters";
// import QueryParameters from "./QueryParameters";
// import WorkingWithObjects from "./WorkingWithObjects";
// import WorkingWithArrays from "./WorkingWithArrays";
// import HttpClient from "./HttpClient";
// import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
// import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// export default function Lab5() {
//   return (
//     <Container>
//     <div id="wd-lab5">
//       <h2>Lab 5</h2>
//        <a href={`${REMOTE_SERVER}/lab5/welcome`}          
//            className="list-group-item">
//            Welcome!!
//         </a><hr/>
//       <EnvironmentVariables />
//       <PathParameters />
//       <QueryParameters />
//       <WorkingWithObjects />
//       <WorkingWithArrays />
//       <HttpClient />
//       <WorkingWithObjectsAsynchronously />
//       <WorkingWithArraysAsynchronously />
//       <div className="list-group">
       
//       </div><hr/>
//     </div>
//     </Container>
//   );
// }


import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters.tsx";
import QueryParameters from "./QueryParameters.tsx";
import WorkingWithObjects from "./WorkingWithObjects.tsx";
import WorkingWithArrays from "./WorkingWithArrays.tsx";
import HttpClient from "./HttpClient.tsx";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously.tsx";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously.tsx";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
                    Welcome
                </a>
            </div>
            <hr/>
            <EnvironmentVariables/>
            <PathParameters/>
            <QueryParameters/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
            <HttpClient/>
            <WorkingWithObjectsAsynchronously/>
            <WorkingWithArraysAsynchronously/>
        </div>
    );
}