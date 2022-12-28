// npm i react-router-dom@6

import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate,
} from "react-router-dom";
import {
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
} from "../03-forms/pages";

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
                                to="/form"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic">
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup">
                                FormikYupPage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components">
                                FormikComponents
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction">
                                formik-asbstraction
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="about"
                        element={<h1>About Page</h1>}
                    ></Route>
                    <Route
                        path="formik-basic"
                        element={<FormikBasicPage />}
                    ></Route>
                    <Route
                        path="formik-yup"
                        element={<FormikYupPage />}
                    ></Route>
                    <Route
                        path="formik-components"
                        element={<FormikComponents />}
                    ></Route>
                    <Route
                        path="formik-abstraction"
                        element={<FormikAbstraction />}
                    ></Route>
                    <Route
                        path="/*"
                        element={
                            <Navigate
                                to="/formik-abstraction"
                                replace
                            />
                        }
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
};
