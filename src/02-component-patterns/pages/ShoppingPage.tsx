import { wrap } from "module";
import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle,
} from "../components";

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
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
                {/* Opción 2: La misma opción que la 1. Pero además añadimos los subcomponentes como propiedades de ProductCard.
                Como resultado ProductCard tiene las propiedades: Children, Image, Title, Button.
                
                De manera que podemos nombrar estos componentes como <ProductCard.SubComponente>
                Esto se ha hecho en index.ts */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Mi productito" />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
