import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            className={styles.productImg}
            src={imgToShow}
            alt="My Product img"
        />
    );
};
