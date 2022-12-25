import { Provider } from "../context/ProductCart.context";
import { useProduct } from "../hooks/useProductCard.hook";
import { IOnChange, IProduct } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export interface IProductCard {
    product: IProduct;
    children?: JSX.Element | JSX.Element[];
    onChange?: (args: IOnChange) => void;
    onChange2?: () => void;
    modifyCount?: number;
    limitMaxCount?: number;
}

export const ProductCard = ({
    product,
    children,
    onChange,
    onChange2,
    modifyCount,
    limitMaxCount,
}: IProductCard) => {
    const { incrementCounter, counter, incrementCounter2 } =
        useProduct({
            onChange,
            onChange2,
            product,
            modifyCount,
            limitMaxCount,
        });

    return (
        <Provider
            value={{
                product,
                counter,
                incrementCounter,
                incrementCounter2,
            }}
        >
            <div className={`${styles.productCard}`}>{children}</div>
        </Provider>
    );
};
