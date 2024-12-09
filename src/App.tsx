import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";  // Asegúrate de importar useState
import "./App.css";
import Home from "./pages/Home";
import MainHeader from "./common/MainHeader";
import MainNav from "./common/MainNav";
import MainFooter from "./common/MainFooter";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = (): JSX.Element => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

    const handleLogin = (userData: any) => {
        console.log("Usuario autenticado:", userData);
        setIsAuthenticated(true); // Set authenticated state after login
        // You can save userData to localStorage or context if necessary
    };

    return (
        <BrowserRouter>
            <MainHeader />
            <MainNav isAuthenticated={isAuthenticated} username="Username" /> {/* Pass username here if available */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/game"
                    element={isAuthenticated ? <Game /> : <Navigate to="/login" replace />}
                />
            </Routes>
            <MainFooter />
        </BrowserRouter>
    );
};

export default App;
