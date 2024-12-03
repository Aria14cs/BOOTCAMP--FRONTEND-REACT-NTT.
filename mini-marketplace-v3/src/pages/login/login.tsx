import React, { useState } from "react";
import Title from "@/components/title/title";
import CampoFormulario from "@/components/campo-formulario/campo-formulario";
import Boton from "@/components/botones/boton";
import "./login.css";
import "../../styles/variables.css";
import { useNavigate } from "react-router-dom";
import { ModuleRoutes } from "@/routes/routes";
import { postAuth } from "../../services/productos";
import { useUser } from "../../hooks/usuario";

const Login: React.FC = () => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
    general: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrorMessages({
      ...errorMessages,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!formData.username) {
      setErrorMessages((prev) => ({
        ...prev,
        username: "Por favor ingresa tu nombre de usuario.",
      }));
      isValid = false;
    }

    if (!formData.password) {
      setErrorMessages((prev) => ({
        ...prev,
        password: "Por favor ingresa tu contraseña.",
      }));
      isValid = false;
    }

    if (!isValid) return;

    try {
      setErrorMessages({ username: "", password: "", general: "" });

      const authState = await postAuth(formData.username, formData.password);

      setUser({ username: formData.username });

      console.log("Inicio de sesión exitoso", authState);
      navigate(ModuleRoutes.Home);
    } catch (error: any) {
      setErrorMessages((prev) => ({
        ...prev,
        general: error.message || "Error al iniciar sesión",
      }));
    }
  };

  return (
    <div className="contenedor-login">
      <div className="tarjeta-login">
        <div className="circulo-encabezado">
          <Title
            text="G & E"
            size="large"
            align="center"
            color="white"
            className="titulo-login"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grupo-formulario">
            <CampoFormulario
              label="Usuario"
              type="username"
              id="username"
              name="username"
              className="campo-formulario"
              value={formData.username}
              onChange={handleChange}
            />
            {errorMessages.username && (
              <span className="error-message">{errorMessages.username}</span>
            )}
          </div>

          <div className="grupo-formulario">
            <CampoFormulario
              label="Contraseña"
              type="password"
              id="password"
              name="password"
              className="campo-formulario"
              value={formData.password}
              onChange={handleChange}
            />
            {errorMessages.password && (
              <span className="error-message">{errorMessages.password}</span>
            )}
          </div>

          {errorMessages.general && (
            <span className="error-message">{errorMessages.general}</span>
          )}

          <a href="#" className="olvidaste-contraseña">
            ¿Olvidé Contraseña?
          </a>
          <Boton text={"Iniciar sesión"} color={"orange"} size={"large"} />
        </form>
        <p className="enlace-registro">
          ¿No tienes una cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
