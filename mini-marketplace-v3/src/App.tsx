import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ModuleRoutes } from "./routes/routes";
import Home from "./pages/home/home";
import Resumen from "./pages/resumen/resumen";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/login/login";

import "./App.css";

const App: React.FC = () => {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path={ModuleRoutes.Home} element={<Home />} />
            <Route path={ModuleRoutes.Resumen} element={<Resumen />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
