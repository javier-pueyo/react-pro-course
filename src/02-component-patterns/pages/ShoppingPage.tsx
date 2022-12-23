import { wrap } from "module";
import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

import { products } from "../data/products.data";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();
    return (
        <div>
            <h1>ShoppingPage</h1>+
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        // cuando el evento y el handler usan el mismo argumento
                        // se puede quitar de los dos lados
                        //onChange={(evento) => onProductCountChange(evento)}
                        //Recibe desde el chidlren las variables count y product
                        onChangeEvent={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => {
                    return (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: "100px" }}
                            onChangeEvent={onProductCountChange}
                            value={product.count}>
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    );
                })}
            </div>
        </div>
    );
};
