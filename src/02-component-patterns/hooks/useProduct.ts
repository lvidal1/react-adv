import { useState } from 'react'

export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const updateItemsBy = (amount: number) => {
        setCounter((prev) => Math.max(0, prev + amount));
    };

    return {
        counter,
        updateItemsBy
    }
}

export default useProduct;
