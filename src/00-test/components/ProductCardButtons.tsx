import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { IComponent } from "../interfaces/interfaces";
import { ProductContext } from "../context/ProductCart.context";

export const ProductCardButtons = ({ className }: IComponent) => {
    const { counter, incrementCounter } = useContext(ProductContext);
    return (
        <div className={className}>
            <button
                className={styles.buttonMinus}
                onClick={() => incrementCounter(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd}`}
                onClick={() => incrementCounter(+1)}
            >
                +
            </button>
        </div>
    );
};
