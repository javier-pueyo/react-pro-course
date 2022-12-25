import { addProduct } from "../redux/controllerProducts.slice";
import { products } from "../data/products.data";

export const useProduct = () => {
    const getProduct = async () => {
        return products;
    };
    const loadProduct = () => async (dispatch: any) => {
        const products = await getProduct();
        products.forEach((product) => {
            dispatch(addProduct(product));
        });
    };
    return {
        loadProduct,
    };
};
