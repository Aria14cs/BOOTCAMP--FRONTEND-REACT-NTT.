import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

import "./App.css";
import Resumen from "./pages/resumen/resumen";

function App() {
  // las rutas pueden estar en enum para evitar escribirlas manualmente
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
