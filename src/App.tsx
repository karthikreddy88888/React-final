// import store from "./Kambaz/store";
// import { Provider } from "react-redux";
// import Kambaz from './Kambaz';
// import { Labs } from './Labs/index.tsx';
// import { HashRouter, Navigate, Route, Routes } from "react-router-dom";


// function App() {
//   return (
//   <HashRouter>
//      <Provider store={store}>

//     <div>
//       <div style={{ marginLeft: '160px', padding: '20px' }}>
//       { <h1>Karthik L Sec 01</h1> }
//       </div>
//       <Routes>
//          <Route path="/" element={<Navigate to="/Kambaz" />} />
//       <Route path="Labs/*" element={<Labs />} />
//       <Route path="Kambaz/*" element={<Kambaz />} />
//       </Routes>
//     </div>
//      </Provider>
//   </HashRouter>
//   )
// }
// export default App;

import  Labs  from './Labs/index.tsx';
import {HashRouter, Routes} from "react-router-dom";
import {Navigate, Route} from "react-router";
import Kambaz from "./Kambaz";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Kambaz"/>}/>
                        <Route path="/Labs/*" element={<Labs/>}/>
                        <Route path="/Kambaz/*" element={<Kambaz/>}/>
                    </Routes>
                </div>
            </Provider>

        </HashRouter>
    );
}

