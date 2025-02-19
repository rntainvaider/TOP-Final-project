import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import "./assets/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
