// import { jwtDecode } from "jwt-decode";

// // Interfaz para el token decodificado
// export interface DecodedToken {
//   id: string; // ID del usuario (ajusta el tipo si no es un string)
//   role: string; // Rol del usuario (admin, user, etc.)
//   exp?: number; // Timestamp de expiración (opcional, si está en el token)
//   [key: string]: any; // Permite incluir campos adicionales si el token tiene más datos
// }

// // Guarda el token en el localStorage
// export const setToken = (token: string): void => {
//   localStorage.setItem("authToken", token);
// };

// // Recupera el token del localStorage
// export const getToken = (): string | null => {
//   return localStorage.getItem("authToken");
// };

// // Elimina el token del localStorage
// export const removeToken = (): void => {
//   localStorage.removeItem("authToken");
//   localStorage.removeItem("id");
//   localStorage.removeItem("role");
// };

// // Decodifica el token y guarda valores relevantes en el localStorage
// export const decryptToken = (): DecodedToken | null => {
//   const token = getToken();
//   if (!token) {
//     return null;
//   }

//   try {
//     // Decodifica el token usando jwt-decode
//     const decodedToken = jwtDecode<DecodedToken>(token);

//     // Guarda valores importantes en el localStorage
//     localStorage.setItem("id", decodedToken.id);
//     localStorage.setItem("role", decodedToken.role);

//     return decodedToken;
//   } catch (error) {
//     console.error("Error al decodificar el token:", error);
//     return null;
//   }
// };

// // Verifica si el token es válido según la expiración (si incluye el campo 'exp')
// export const isTokenValid = (): boolean => {
//   const token = getToken();
//   if (!token) return false;

//   const decoded = decryptToken();
//   if (!decoded || !decoded.exp) return false;

//   const now = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
//   return decoded.exp > now; // True si el token no ha expirado
// };
// export const fetchAuth = async (username: string, password: string) => {
//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ username, password }),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || "Login fallido");
//   }

//   return await response.json();
// };
