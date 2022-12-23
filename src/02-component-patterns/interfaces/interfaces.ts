import { Props as ProductButtonProps } from "../components/ProductButton";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductContextProps {
    counter: number;
    product: IProduct;
    increaseBy: (value: number) => void;
}

export interface IProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Buttons: (Props: ProductButtonProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
    product: IProduct;
    count: number;
}

export interface IProductInCart extends IProduct {
    count: number;
}
