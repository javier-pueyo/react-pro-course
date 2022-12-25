export interface IContextProductCard {
    counter?: number;
    product?: IProduct;
    incrementCounter: (value: number) => void;
    incrementCounter2: any;
}

export interface IProduct {
    id: string;
    title?: string;
    img?: string;
}

export interface IOnChange {
    newCount: number;
    product: IProduct;
}

export interface IProductInCart {
    newCount: number;
    product: IProduct;
}
export interface IStateProductCart {
    [key: string]: IProductInCart;
}
export interface IComponent {
    className?: string;
}
