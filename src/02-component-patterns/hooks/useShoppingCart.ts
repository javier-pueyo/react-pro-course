import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: IProductInCart;
    }>({});

    const modifyCounterShoppingCart = (oldShoppingCart, product, count) => {
        /*
         * Versión 2
         * Teniendo en cuenta que movemos la lógica de sumar del contador
         * count ahora devuelve +1 o -1;
         * */

        //Evaluar más adelante si el producto tiene contador 0 o no.
        const productInCart: IProductInCart = oldShoppingCart[product.id] || {
            ...product,
            count: 0,
        };

        const additionCount = productInCart.count + count;

        if (Math.max(additionCount, 0) > 0) {
            productInCart.count += count;
            return {
                ...oldShoppingCart,
                [product.id]: productInCart,
            };
        }

        const { [product.id]: toRemove, ...restShoppingCart } = oldShoppingCart;
        return { ...restShoppingCart };
        /**
         * Versión 1:
         * Si el contador de un producto está 0, eliminarlo del objeto.
         * Puede hacerse ...rest en destructuración
         *  mediante la método delete() de Object.
         */
        /*if (count === 0) {
                const { [product.id]: remove, ...restShoppingCart } =
                    oldShoppingCart;
                return restShoppingCart;
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };*/
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
