import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import "./assets/css/main.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
