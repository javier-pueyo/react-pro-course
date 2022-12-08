/**
 * {@link https://reactjs.org/docs/code-splitting.html}
 */

import { lazy } from "react";

//Importación de componente sin lazyload
import { LazyPage3 } from "../01-lazyload/pages";
// Importación de componente mediante lazyload
// Indicar webpackChunkName para renombar el archivo por defecto de chunk
// chunk es un conjunto de datos que descompone el problema para su paralelización
const Lazy1 = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyPage1" */
            "../01-lazyload/pages/LazyPage1"
        )
);
const Lazy2 = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyPage2" */
            "../01-lazyload/pages/LazyPage2"
        )
);
const Lazy3 = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyPage3" */
            "../01-lazyload/pages/LazyPage3"
        )
);

//Usamos "type" para abreviar la interface en Component
type JSXComponent = () => JSX.Element;
/* 
interface JSXComponent {
    (): JSX.Element;
}
*/

// "Components" se indica con MAYUS porque JSX.Element espera una variable con MAYUS
interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: Lazy1,
        name: "Lazy-1",
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: Lazy2,
        name: "Lazy-2",
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: Lazy3,
        name: "Lazy-3",
    },
];
