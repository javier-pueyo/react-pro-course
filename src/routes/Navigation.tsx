// npm i react-router-dom@6
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate,
} from "react-router-dom";

import { routes } from "./routes";

import logo from "../logo.svg";

import { Suspense } from "react";

export const Navigation = () => {
    return (
        // Suspense indica que mientras que cargando el lazy() haz lo siguiente
        <Suspense fallback={<span>Loading</span>}>
            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />

                        <ul>
                            {routes.map(({ to, name }, index) => {
                                return (
                                    <li>
                                        <NavLink
                                            key={name + index}
                                            to={to}
                                            className={({ isActive }) =>
                                                isActive ? "nav-active" : ""
                                            }>
                                            {name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <Routes>
                        {routes.map(({ path, Component }, index) => {
                            return (
                                <Route
                                    key={path + index}
                                    path={path}
                                    element={<Component />}></Route>
                            );
                        })}
                        <Route
                            path="/*"
                            element={
                                // "replace" es para que el user no se pueda hechar para atrás
                                <Navigate to={routes[0].to} replace />
                            }></Route>
                    </Routes>
                </div>
            </Router>
        </Suspense>
    );
};
