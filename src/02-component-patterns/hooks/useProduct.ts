import { useEffect, useRef, useState } from "react";
import { IonChangeArgs, IProduct, IInitialValues } from "../interfaces/interfaces";

interface IuseProductArgs {
    product: IProduct;
    onChangeEvent?: (args: IonChangeArgs) => void;
    value?: number;
    initialValues: IInitialValues;
}

interface argsLimitCount extends IInitialValues {
    addValue: number;
    minCount?: number;
}

export const useProduct = ({
    onChangeEvent,
    product,
    value = 0,
    initialValues,
}: IuseProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const limitCount = ({ count, addValue, minCount, maxCount }: argsLimitCount) => {
        let newValue = count;
        if (minCount !== null) newValue = Math.max(count + addValue, minCount);
        if (maxCount) newValue = Math.min(newValue, maxCount);
        return newValue;
    };

    const increaseBy = (value: number) => {
        const argsLimitCount = {
            count: counter,
            addValue: value,
            minCount: 0,
            maxCount: initialValues.maxCount,
        };
        const newValue = limitCount(argsLimitCount);

        setCounter(newValue);

        onChangeEvent && onChangeEvent({ count: newValue, product });
    };

    const reset = () => {
        setCounter(initialValues.count || value);
    };

    useEffect(() => {
        if (isMounted.current === false) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        increaseBy,
        isMaxCountReached:
            initialValues?.count !== null && initialValues.maxCount === counter,
        reset,
    };
};
