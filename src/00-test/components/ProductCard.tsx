import { Provider } from "../context/ProductCart.context";
import { useProduct } from "../hooks/useProduct.hook";
import { IOnChange, IProduct } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export interface IProductCard {
    product: IProduct;
    children?: JSX.Element | JSX.Element[];
    onChange?: (args: IOnChange) => void;
    modifyCount?: number;
    limitMaxCount?: number;
}

export const ProductCard = ({
    product,
    children,
    onChange,
    modifyCount,
    limitMaxCount,
}: IProductCard) => {
    const { incrementCounter, counter } = useProduct({
        onChange,
        product,
        modifyCount,
        limitMaxCount,
    });

    return (
        <Provider value={{ product, counter, incrementCounter }}>
            <div className={`${styles.productCard}`}>{children}</div>
        </Provider>
    );
};
