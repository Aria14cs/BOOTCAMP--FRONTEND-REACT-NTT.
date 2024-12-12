// faltan tests
import React, { createContext, useState, ReactNode } from "react";
import { Usuario } from "@/domain/usuario/usuario";

interface UserContextType {
  user: Usuario | null;
  isAuthenticated: boolean;
  setUser: (user: Usuario | null) => void;
}

// Crear el contexto
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

// Componente proveedor para envolver la app
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Usuario | null>(null);

  return (
    <UserContext.Provider value={{ user, isAuthenticated: !!user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
