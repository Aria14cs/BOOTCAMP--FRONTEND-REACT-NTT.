import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

import "./App.css";
import Resumen from "./pages/resumen/resumen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumen" element={<Resumen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
