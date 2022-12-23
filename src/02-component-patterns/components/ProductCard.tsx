import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";

import {
    IProductContextProps,
    IProduct,
    onChangeArgs,
} from "../interfaces/interfaces";

// "as" https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: IProduct;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChangeEvent?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChangeEvent,
    value,
}: Props) => {
    const { increaseBy, counter } = useProduct({
        onChangeEvent,
        product,
        value,
    });

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
