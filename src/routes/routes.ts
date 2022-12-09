/**
 * {@link https://ui.dev/react-router-nested-routes}
 */

import { lazy } from "react";

import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

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
        to: "/",
        path: "/",
        Component: ShoppingPage,
        name: "ShoppingPage",
    },
];
