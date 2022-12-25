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

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {routes.map(({ nameLink, to }, index) => {
                            return (
                                <li
                                    key={JSON.stringify(
                                        nameLink + index
                                    )}
                                >
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "nav-active"
                                                : ""
                                        }
                                    >
                                        {nameLink}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <Routes>
                    {routes.map(({ Component, path }, index) => {
                        return (
                            <Route
                                key={JSON.stringify(path + index)}
                                path={path}
                                element={<Component />}
                            ></Route>
                        );
                    })}

                    <Route
                        path="/*"
                        element={
                            <Navigate to={routes[0].to} replace />
                        }
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
};
