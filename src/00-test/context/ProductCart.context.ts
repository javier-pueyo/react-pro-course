import { createContext } from "react";
import { IContextProductCard } from "../interfaces/interfaces";

export const ProductContext = createContext(
    {} as IContextProductCard
);
export const { Provider } = ProductContext;
