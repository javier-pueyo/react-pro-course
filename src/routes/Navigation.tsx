// npm i react-router-dom@6

import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate,
} from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                </nav>

                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">User</NavLink>
                    </li>
                </ul>

                <Routes>
                    <Route
                        path="about"
                        element={<h1>About Page</h1>}
                    ></Route>
                    <Route
                        path="user"
                        element={<h1>Users Page</h1>}
                    ></Route>
                    <Route
                        path="home"
                        element={<h1>Home Page</h1>}
                    ></Route>
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
};
