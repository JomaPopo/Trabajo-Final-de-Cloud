import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    onLogin: (userData: any) => void;
    isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin, isAuthenticated }) => {
    const [isLoading, setIsLoading] = useState(false); // Indicador de carga
    const navigate = useNavigate();

    const iniciarSesion = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Activa el indicador de carga

        const dataForm = new FormData(event.currentTarget);

        // Obtén los datos del formulario
        const username = dataForm.get("username")?.toString().trim();
        const password = dataForm.get("password")?.toString().trim();

        // Validación en el frontend
        if (!username || !password) {
            alert("Por favor, complete todos los campos.");
            setIsLoading(false);
            return;
        }

        try {
            // Construir datos para enviar al backend
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            formData.append("created_by", "Player"); // Valor de "created_by" como "Player"

            // Hacer la solicitud al backend
            const response = await fetch("http://localhost/addDataLogin.php", {
                method: "POST",
                body: formData,
            });

            // Analizar la respuesta
            const result = await response.json();

            // Manejo de la respuesta
            if (result.status === 1) { // Revisa el status
                alert(result.message);
                onLogin(result.userData); // Llama a la función onLogin con los datos del usuario
                if (isAuthenticated) {
                    navigate("/"); // Redirige al inicio
                }
            } else {
                alert(result.message || "Error desconocido, intente nuevamente.");
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Ocurrió un problema al iniciar sesión.");
        } finally {
            setIsLoading(false); // Desactiva el indicador de carga
        }
    };

    return (
        <section className="padded">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 className="text-center">Iniciar sesión</h2>
                        {isLoading && (
                            <div className="alert alert-info text-center">
                                Cargando, por favor espere...
                            </div>
                        )}
                        <form onSubmit={iniciarSesion}>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    name="username" // Cambiado de "usuario" a "username"
                                    placeholder="Usuario"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    id="txtClave"
                                    name="password" // Cambiado de "clave" a "password"
                                    placeholder="Contraseña"
                                />
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    onClick={(event) =>
                                        document
                                            .getElementById("txtClave")
                                            ?.setAttribute(
                                                "type",
                                                event.currentTarget.checked ? "text" : "password"
                                            )
                                    }
                                />
                                <label className="form-check-label">&nbsp;Mostrar contraseña</label>
                            </div>
                            <div className="mb-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={isLoading} 
                                >
                                    {isLoading ? "Iniciando..." : "Iniciar sesión >"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Login;