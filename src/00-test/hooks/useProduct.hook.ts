import { useEffect, useState } from "react";
import { IOnChange, IProduct } from "../interfaces/interfaces";

export interface IuseProduct {
    onChange?: (args: IOnChange) => void;
    product: IProduct;
    modifyCount?: number;
    limitMaxCount?: number;
}

export const useProduct = ({
    onChange,
    product,
    modifyCount,
    limitMaxCount,
}: IuseProduct) => {
    const [counter, setCounter] = useState<number>(0);

    const incrementBy = (
        initialValue: number,
        incrementValue: number
    ) => {
        return initialValue + incrementValue;
    };

    const limitCounter = (
        counter: number,
        limitMin?: number,
        limitMax?: number
    ) => {
        let limitCounter = null;
        if (limitMin) {
            const limitCounterMin = Math.max(counter, limitMin);
            limitCounter = limitCounterMin;
        }
        if (limitMax) {
            const limitCounterMax = Math.min(counter, limitMax);
            limitCounter = limitCounterMax;
        }
        return limitCounter ? limitCounter : counter;
    };

    const incrementCounter = (numberIncrement: number) => {
        let newCount = incrementBy(counter, numberIncrement);
        newCount = limitCounter(newCount, 0, limitMaxCount);
        setCounter(newCount);
        onChange && onChange({ newCount, product });
    };

    useEffect(() => {
        if (modifyCount !== undefined) setCounter(modifyCount);
    }, [modifyCount]);

    return {
        incrementCounter,
        counter,
    };
};
