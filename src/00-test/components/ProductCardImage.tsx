import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { IComponent } from "../interfaces/interfaces";
import { ProductContext } from "../context/ProductCart.context";

export const ProductCardImage = ({ className }: IComponent) => {
    const { product } = useContext(ProductContext);
    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={product?.img || noImage}
            alt="My Product img"
        />
    );
};
