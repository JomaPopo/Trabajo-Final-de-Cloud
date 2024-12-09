import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/registerUser.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        navigate("/login");
      } else {
        setErrorMessage(data.message || "Error al registrarte.");
      }
    } catch (error) {
      console.error("Error al registrarte:", error);
      setErrorMessage("Error del servidor. Inténtalo más tarde.");
    }
  };

  return (
    <section className="padded">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Registrarse</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-2">
                <label htmlFor="username">Usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password">Contraseña:</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <button type="submit" className="btn btn-primary w-100">
                  Registrarse
                </button>
              </div>
            </form>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <p className="text-center">
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                className="btn btn-link"
                onClick={() => navigate("/login")}
              >
                Inicia Sesión aquí
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
