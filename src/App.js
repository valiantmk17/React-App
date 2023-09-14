import LoginForm from "./components/loginform"
import HomePage from "./components/hompage"
import PageOne from "./components/tabel/table1";
import PageTwo from "./components/tabel/table2";
import Navbar from "./components/navbar/navbar";
import DiaForm from "./components/diaform.js"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
    <div className="page">
     <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
      <Route path="/pageone" element={<PageOne/>}></Route>
      <Route path="/pagetwo" element={<PageTwo/>}></Route>
      <Route path="/diaform" element={<DiaForm/>}></Route>
     </Routes>
    </div>
    </div>
  );
}

export default App;
