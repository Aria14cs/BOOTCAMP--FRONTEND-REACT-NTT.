import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModuleRoutes } from "./routes/routes";
import Home from "./pages/home/home";

import "./App.css";
import Resumen from "./pages/resumen/resumen";

const App: React.FC = () => {
  // las rutas pueden estar en enum para evitar escribirlas manualmente
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ModuleRoutes.Home} element={<Home />} />
          <Route path={ModuleRoutes.Resumen} element={<Resumen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
