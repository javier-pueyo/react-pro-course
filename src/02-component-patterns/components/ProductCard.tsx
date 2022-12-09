import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

import {
    ProductContextProps,
    ProductCardProps,
} from "../interfaces/interfaces";

// "as" https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { increaseBy, counter } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>{children}</div>
        </Provider>
    );
};
