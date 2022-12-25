import { useContext } from "react";
import { ProductContext } from "../context/ProductCart.context";
import { IComponent } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductCardTitle = ({ className }: IComponent) => {
    const { product } = useContext(ProductContext);
    return (
        <h2 className={`${styles.productDescription} ${className}`}>
            {product?.title || "No title"}
        </h2>
    );
};
