import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    IStateProductCart,
    IProduct,
} from "../interfaces/interfaces";

const INITAL_STATE: IStateProductCart = {};

type IUpdateCounterAction = {
    newCount: number;
    product: IProduct;
};

export const controllerProductSlice = createSlice({
    name: "controllerProduct",
    initialState: INITAL_STATE,
    reducers: {
        removeProduct: (state, { type, payload }) => {
            const { [payload.id]: removeFromList, ...restList } =
                state;
            return { ...restList };
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const { type, payload } = action;
            return {
                ...state,
                [payload.id]: {
                    newCount: 0,
                    product: payload,
                },
            };
        },
        updateCounter: (
            state,
            action: PayloadAction<IUpdateCounterAction>
        ) => {
            const { newCount, product } = action.payload;
            return {
                ...state,
                [product.id]: { newCount, product },
            };
        },
    },
});

export const { updateCounter, addProduct } =
    controllerProductSlice.actions;

export const controllerProductReducer =
    controllerProductSlice.reducer;
