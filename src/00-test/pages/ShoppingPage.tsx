// import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products.data";
import { useProductCart } from "../hooks/useProductCart.hook";

import { ProductCard } from "../components";
import { useEffect } from "react";
import {
    useAppDispatch,
    useAppSelector,
} from "../hooks/useRedux.hooks";
import { useProduct } from "../hooks/useProduct.hook";

export const ShoppingPage = () => {
    const { productsCart, updateProductsCart, updateProductsCart2 } =
        useProductCart();

    const { loadProduct } = useProduct();

    const dispatch = useAppDispatch();

    const productss = useAppSelector((state) => state.products);

    useEffect(() => {
        dispatch(loadProduct());
    }, []);

    return (
        <div>
            {JSON.stringify(Object.entries(productss))}
            <h1>ShoppingPage</h1>
            {Object.entries(productss).map(
                ([key, { newCount, product }]) => {
                    return (
                        <ProductCard
                            key={key}
                            product={product}
                            onChange={updateProductsCart}
                            onChange2={() => updateProductsCart2}
                            modifyCount={newCount}
                            limitMaxCount={10}
                        >
                            <ProductCard.Image />
                            <ProductCard.Title className={"hola"} />
                            <ProductCard.Buttons />
                        </ProductCard>
                    );
                }
            )}
            <div>
                {Object.entries(productsCart).map(
                    ([key, { newCount, product }]) => {
                        return (
                            <ProductCard
                                key={key}
                                product={product}
                                onChange={updateProductsCart}
                                modifyCount={newCount}
                            >
                                <ProductCard.Image />
                                <ProductCard.Title />
                                <ProductCard.Buttons />
                            </ProductCard>
                        );
                    }
                )}
            </div>
        </div>
    );
};
