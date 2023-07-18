import create from 'zustand';

export const cartStore = create(set => ({
    products: [],
    orderTotal: 0.0,
}));