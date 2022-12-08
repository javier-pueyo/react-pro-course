import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage2, LazyPage3 } from "../pages";
import LazyPage1 from "../pages/LazyPage1";

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<LazyPage1 />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3" element={<LazyPage3 />} />

                <Route path="/" element={<Navigate to={"lazy1"} replace />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
};

export default LazyLayout;
