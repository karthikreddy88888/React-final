// import { Link } from "react-router-dom";
// export default function Signup() {
//   return (
//     <div id="wd-signin-screen" className="container mt-4">
//       <div className="mx-auto" style={{ maxWidth: "400px" }}>
       
//         <h3 className="text-center mb-4">Sign Up</h3>

     
//         <form>
//           <div className="mb-3">
//             <input
//               placeholder="Username"
//               id="wd-username"
//               className="form-control"
//               type="text"
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               placeholder="Password"
//               id="wd-password"
//               className="form-control"
//               type="password"
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               placeholder="Verify Password"
//               id="wd-password"
//               className="form-control"
//               type="password"
          
//             />
//           </div>

//           <div className="d-grid">
//             <Link
//               to="/Kambaz/Dashboard"
//               id="wd-signin-btn"
//               className="btn btn-primary"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </form>

        
          
//         </div>
//       </div>
    
    
// );}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="wd-username b-2" placeholder="username" />
      <FormControl value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
             className="wd-password mb-2" placeholder="password" type="password"/>
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
      <Link to="/Kambaz/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
);}
