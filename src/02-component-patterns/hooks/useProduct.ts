import { useEffect, useRef, useState } from "react";
import { onChangeArgs, IProduct } from "../interfaces/interfaces";

interface useProductArgs {
    product: IProduct;
    onChangeEvent?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({
    onChangeEvent,
    product,
    value = 0,
}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(value);

    const isControlled = useRef(Boolean(onChangeEvent));

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            //"!" Indica a typescript que siempre tendrá ese valor
            return onChangeEvent!({ count: value, product });
        }

        const newvalue = Math.max(counter + value, 0);
        setCounter(newvalue);

        onChangeEvent && onChangeEvent({ count: newvalue, product });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return { increaseBy, counter };
};
