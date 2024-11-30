// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ModuleRoutes } from "./routes/routes";
// import Home from "./pages/home/home";

// import "./App.css";
// import Resumen from "./pages/resumen/resumen";

// const App: React.FC = () => {
//   // las rutas pueden estar en enum para evitar escribirlas manualmente
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path={ModuleRoutes.Home} element={<Home />} />
//           <Route path={ModuleRoutes.Resumen} element={<Resumen />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModuleRoutes } from "./routes/routes";
import Home from "./pages/home/home";
import Resumen from "./pages/resumen/resumen";
import { CartProvider } from "./context/CartContext"; // Asegúrate de importar CartProvider

import "./App.css";

const App: React.FC = () => {
  return (
    <CartProvider>
      {" "}
      {/* Envuelve tu aplicación con CartProvider */}
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
