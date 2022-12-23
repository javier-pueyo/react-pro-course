import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: IProductInCart;
    }>({});

    const modifyCounterShoppingCart = (oldShoppingCart, product, count) => {
        if (count === 0) {
            const { [product.id]: remove, ...restShoppingCart } =
                oldShoppingCart;
            return restShoppingCart;
        }
        return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
        };
    };

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: IProduct;
    }) => {
        setShoppingCart((oldShoppingCart) =>
            modifyCounterShoppingCart(oldShoppingCart, product, count)
        );
    };

    return { shoppingCart, onProductCountChange };
};
