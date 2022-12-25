// import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products.data";
import { useProductCart } from "../hooks/useProductCart.hook";

import { ProductCard } from "../components";

export const ShoppingPage = () => {
    const { productsCart, updateProductsCart } = useProductCart();
    return (
        <div>
            <h1>ShoppingPage</h1>
            {products.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onChange={updateProductsCart}
                        modifyCount={
                            productsCart[product.id]?.newCount || 0
                        }
                        limitMaxCount={10}
                    >
                        <ProductCard.Image />
                        <ProductCard.Title className={"hola"} />
                        <ProductCard.Buttons />
                    </ProductCard>
                );
            })}
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
