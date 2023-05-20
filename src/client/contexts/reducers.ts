import React, { createContext, useReducer } from 'react';
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = 'CREATE_PRODUCT',
  Delete = 'DELETE_PRODUCT',
  Increase = 'INCREASE_PRODUCT',
  Decrease = 'DECREASE_PRODUCT',
  DeleteALL = 'DELETEALL_PRODUCT',
}

type ProductType = {
  id: number;
  title: string;
  price: number;
  count: number;
  picture: string;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    title: string;
    price: number;
    picture: string;
    count: number;
  };
  [Types.Delete]: {
    id: number;
  };
  [Types.Increase]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: any[],
  action: {
    type: any;
    payload: { id: any; title: any; price: any; picture: any; count: any };
  }
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          picture: action.payload.picture,
          count: action.payload.count,
        },
      ];
    case Types.Delete:
      return [
        ...state.filter(
          (product: { id: any }) => product.id !== action.payload.id
        ),
      ];
    case Types.Increase:
      return [
        ...state.map((product: { id: any; count: number }) =>
          product.id === action.payload.id
            ? { ...product, count: product.count + 1 }
            : product
        ),
      ];
    case Types.Decrease:
      return [
        ...state.map((product: { id: any; count: number }) =>
          product.id === action.payload.id
            ? { ...product, count: product.count - 1 }
            : product
        ),
      ];
    case Types.DeleteALL:
      return [];
    default:
      return state;
  }
};
