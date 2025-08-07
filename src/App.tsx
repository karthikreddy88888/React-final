import store from "./Kambaz/store";
import { Provider } from "react-redux";
import Kambaz from './Kambaz';
import { Labs } from './Labs/index.tsx';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
  <HashRouter>
     <Provider store={store}>

    <div>
      <div style={{ marginLeft: '160px', padding: '20px' }}>
      { <h1>Karthik L Sec 01</h1> }
      </div>
      <Routes>
         <Route path="/" element={<Navigate to="/Kambaz" />} />
      <Route path="Labs/*" element={<Labs />} />
      <Route path="Kambaz/*" element={<Kambaz />} />
      </Routes>
    </div>
     </Provider>
  </HashRouter>
  )
}
export default App;