// npm i react-router-dom@6
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate,
} from "react-router-dom";

import {
    LazyPage1,
    LazyPage2,
    LazyPage3,
} from "../01-lazyload/pages";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />

                    <ul>
                        <li>
                            <NavLink
                                to="/lazy1"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Lazy1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2">Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3">Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="lazy1"
                        element={<LazyPage1 />}
                    ></Route>
                    <Route
                        path="lazy2"
                        element={<LazyPage2 />}
                    ></Route>
                    <Route
                        path="lazy3"
                        element={<LazyPage3 />}
                    ></Route>
                    <Route
                        path="/*"
                        element={<Navigate to="/lazy1" replace />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
};
