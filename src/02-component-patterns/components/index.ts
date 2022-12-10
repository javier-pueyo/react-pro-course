/* 
Opción 2:

Se importan los tres componentes.

Para evitar el conflicto con "const ProductCard" se le ha establecido
otro nombre al ProductCard original
*/

import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButton";
import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

// Creación de un nuevo ProductCard mediante Object.assign
// fusionando el original con un objeto anónimo con tres propiedades(componentes).
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Buttons: ProductButtons,
    Image: ProductImage,
    Title: ProductTitle,
});

/* 
Opción 1:
Exportación simple para utilizarlos todos los componentes desde un mimsmo directorio
*/
export { ProductButtons } from "./ProductButton";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export default ProductCard;
