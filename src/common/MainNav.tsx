import { Link } from "react-router-dom";
import "./MainNav.css";

interface MainNavProps {
    isAuthenticated: boolean;
    username?: string;
}

const MainNav: React.FC<MainNavProps> = ({ isAuthenticated, username }): JSX.Element => {
    return (
        <nav id="main-header" className="navbar navbar-expand-lg sticky-top navbar-dark">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/game">Game</Link>
                            </li>
                        )}
                        {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link disabled">Welcome, {username || "User"}</span>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
