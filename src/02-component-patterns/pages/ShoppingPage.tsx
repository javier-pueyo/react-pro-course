import { wrap } from "module";
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";

import "../styles/custom-styles.css";

import { products } from "../data/products.data";

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{ count: 4, maxCount: 10 }}>
                {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
                    //Una función que esta devolviendo un JSX. Patrón de Formik
                    // En la interfaz debemos indicar que children es "() => JSX.Element"
                    // Permite enviar funcionalidad mediante argumento
                    <>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}> -2 </button>
                        {!isMaxCountReached && (
                            <button onClick={() => increaseBy(+2)}> +2 </button>
                        )}
                        <span> {count}</span>
                    </>
                )}
            </ProductCard>
        </div>
    );
};
