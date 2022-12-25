import { ProductCardButtons } from "./ProductCardButtons";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardTitle } from "./ProductCardTitle";
import { ProductCard as ProductCardHOC } from "./ProductCard";

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductCardTitle,
    Image: ProductCardImage,
    Buttons: ProductCardButtons,
});
