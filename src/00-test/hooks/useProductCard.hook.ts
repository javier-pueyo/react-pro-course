import { useEffect, useState } from "react";
import { IOnChange, IProduct } from "../interfaces/interfaces";
import { updateCounter } from "../redux/controllerProducts.slice";

export interface IuseProduct {
    onChange?: (args: IOnChange) => void;
    onChange2?: () => void;
    product: IProduct;
    modifyCount?: number;
    limitMaxCount?: number;
}

export const useProduct = ({
    onChange,
    onChange2,
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
        if (limitMin !== undefined && counter < limitMin) {
            const limitCounterMin = Math.max(counter, limitMin);
            limitCounter = limitCounterMin;
        }
        if (limitMax !== undefined && counter > limitMax) {
            const limitCounterMax = Math.min(counter, limitMax);
            limitCounter = limitCounterMax;
        }
        return limitCounter !== null ? limitCounter : counter;
    };

    const incrementCounter2 =
        (numberIncrement: number, product: IProduct) =>
        async (dispatch: any) => {
            let newCount = incrementBy(counter, numberIncrement);
            newCount = limitCounter(newCount, 0, limitMaxCount);
            dispatch(updateCounter({ newCount, product }));
            onChange && onChange({ newCount, product });
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
        incrementCounter2,
        counter,
    };
};
