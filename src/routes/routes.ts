/**
 * {@link https://ui.dev/react-router-nested-routes}
 */

import { lazy } from "react";

import { NoLazy } from "../01-lazyload/pages/NoLazy";

const LazyLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLayout" */
            "../01-lazyload/layout/LazyLayout"
        )
);

type JSXComponent = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// "/lazyload/*" Mediante el * indicamos que cualquier ruta interna en
// el componente < LazyLayout /> tenga el prefijo /lazyload/
export const routes: Route[] = [
    {
        to: "/lazyload",
        path: "/lazyload/*",
        Component: LazyLayout,
        name: "Lazy Layout - Dash",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy",
    },
];
