import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModuleRoutes } from "./routes/routes";
import Home from "./pages/home/home";
import Resumen from "./pages/resumen/resumen";
import { CartProvider } from "./context/CartContext";

import "./App.css";

const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ModuleRoutes.Home} element={<Home />} />
          <Route path={ModuleRoutes.Resumen} element={<Resumen />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
