import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { IProductCardHandlers } from "../interfaces/interfaces";

import {
    IProductContextProps,
    IProduct,
    IonChangeArgs,
    IInitialValues,
} from "../interfaces/interfaces";

// "as" https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: IProduct;
    // children?: ReactElement | ReactElement[];
    children: (args: IProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChangeEvent?: (args: IonChangeArgs) => void;
    value?: number;
    initialValues?: IInitialValues;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChangeEvent,
    value,
    initialValues,
}: Props) => {
    const { increaseBy, counter, isMaxCountReached, reset } = useProduct({
        onChangeEvent,
        product,
        value,
        initialValues,
    });

    return (
        <Provider value={{ counter, increaseBy, product, initialValues }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    );
};
