import { useState } from "react";

export const useProduct = () => {
    const [counter, setcounter] = useState<number>(0);

    const increaseBy = (value: number) => {
        setcounter((prev) => Math.max(prev + value, 0));
    };
    return { increaseBy, counter };
};
