import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { IComponent } from "../interfaces/interfaces";
import { ProductContext } from "../context/ProductCart.context";
import {
    useAppDispatch,
    useAppSelector,
} from "../hooks/useRedux.hooks";

export const ProductCardButtons = ({ className }: IComponent) => {
    const { counter, incrementCounter, incrementCounter2, product } =
        useContext(ProductContext);
    const dispatch = useAppDispatch();

    return (
        <div className={className}>
            <button
                className={styles.buttonMinus}
                onClick={() =>
                    dispatch(incrementCounter2(-1, product))
                }
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd}`}
                onClick={() =>
                    dispatch(incrementCounter2(+1, product))
                }
            >
                +
            </button>
        </div>
    );
};
