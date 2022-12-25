import { useState } from "react";
import {
    IProductInCart,
    IStateProductCart,
} from "../interfaces/interfaces";

interface IRemoveIfCounterIsEmpty {
    list: IStateProductCart;
    counter: number;
    idNewObject: string;
}

export const useProductCart = () => {
    const [productsCart, setProductsCart] =
        useState<IStateProductCart>({});

    const removeIfCounterIsEmpty = ({
        list,
        counter,
        idNewObject,
    }: IRemoveIfCounterIsEmpty): IStateProductCart | null => {
        if (counter === 0) {
            const { [idNewObject]: removeFromList, ...restList } =
                list;
            return restList;
        }
        return null;
    };

    const updateProductsCart2 = () => {
        return "";
    };

    const updateProductsCart = ({
        newCount,
        product,
    }: IProductInCart) => {
        const newProductCart = { newCount, product };
        const idProduct = product.id;

        setProductsCart((productsCart) => {
            const newList = {
                ...productsCart,
                [idProduct]: newProductCart,
            };
            const removeList = removeIfCounterIsEmpty({
                list: productsCart,
                counter: newCount,
                idNewObject: idProduct,
            });
            return removeList ? removeList : newList;
        });
    };

    return {
        productsCart,
        updateProductsCart,
        updateProductsCart2,
    };
};
