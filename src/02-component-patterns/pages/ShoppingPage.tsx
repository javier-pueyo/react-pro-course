import { wrap } from "module";
import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
    id: "1",
    title: "Coffe Mug - 1",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}>
                {/* Opción 1: Mediante "Children" en ProductCard podemos externalizar sus subcomponentes, 
                para que cualquiera tenga facil acceso a estos y pueda añadir las propiedades que quiera.

                Se ha usado <useContext> para que los subcomponentes tengan acceso a ProductCard
                Se encuentra un <Provider> en <ProducCard> para que tengan acceso através de "Children"*/}
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                {/* Opción 2: La misma opción que la 1. Pero además añadimos los subcomponentes como propiedades de ProductCard.
                Como resultado ProductCard tiene las propiedades: Children, Image, Title, Button.
                
                De manera que podemos nombrar estos componentes como <ProductCard.SubComponente>
                Esto se ha hecho en index.ts */}
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title
                        className="text-bold"
                        title="Mi productito"
                    />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                {/* LINE STYLES */}
                <ProductCard
                    product={product}
                    style={{ backgroundColor: "#70D1F8" }}>
                    <ProductImage
                        style={{
                            boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)",
                        }}
                    />
                    <ProductTitle style={{ fontWeight: "600" }} />
                    <ProductButtons
                        style={{ display: "flex", justifyContent: "center" }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};
