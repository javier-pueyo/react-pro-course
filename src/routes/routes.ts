import { ShoppingPage } from "../00-test/pages/ShoppingPage";

interface IRoutes {
    path: string;
    to: string;
    nameLink: string;
    Component: () => JSX.Element;
}
export const routes: IRoutes[] = [
    {
        path: "shopping",
        to: "/shopping",
        nameLink: "Shopping Page",
        Component: ShoppingPage,
    },
];
