import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    // TODO: maxCount
    const {
        counter,
        increaseBy,
        initialValues: { maxCount },
    } = useContext(ProductContext);
    const buttonIncrement = useRef(null);

    const toogleDisableButton = (reference, condition) => {
        if (condition) {
            reference.current.setAttribute("disabled", "");
        } else {
            reference.current.removeAttribute("disabled");
        }
    };

    //TODO: isMaxReached = useCallback, dependencias[counter, maxCount]
    // TRUE si el count === maxCount
    //False no lo es

    const isMaxReachedd = useCallback(
        () => maxCount !== null && counter === maxCount,
        [counter, maxCount]
    );

    useEffect(() => {
        toogleDisableButton(buttonIncrement, isMaxReachedd());
    }, [counter, isMaxReachedd]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                ref={buttonIncrement}
                className={`${styles.buttonAdd} ${isMaxReachedd() && styles.disabled}`}
                onClick={() => increaseBy(+1)}>
                +
            </button>
        </div>
    );
};
