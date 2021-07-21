import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cart: [],
		totalQty: null,
		precioTotal: 0,
	},
	reducers: {
		ADD_TO_CART: (state, action) => {
			const repeated = state.cart.findIndex(
				(product) => product.item.id === action.payload.item.id
			);

			state.totalQty = state.totalQty + action.payload.cantidad;

			state.precioTotal = state.precioTotal +=
				action.payload.cantidad * action.payload.item.precio;

			if (repeated !== -1) {
				const newArray = Array.from(state.cart);
				state.cart[repeated].cantidad += action.payload.cantidad;
				state.cart = newArray;
			} else {
				state.cart = [...state.cart, action.payload];
			}
		},
		REMOVE_ITEM: (state, action) => {
			const arrayAfterDelete = state.cart.filter(
				(product) => product.item.id !== action.payload.item.id
			);
			state.cart = arrayAfterDelete;

			state.totalQty = state.totalQty - action.payload.cantidad;

			state.precioTotal = state.precioTotal - action.payload.item.precio;
		},
		CLEAR_CART: (state) => {
			state.cart = [];
			state.precioTotal = 0;
			state.totalQty = 0;
		},
		LOAD_LOCALSTORAGE: (state, action) => {
			state.cart = action.payload.cart;
			state.totalQty = action.payload.totalQty;
			state.precioTotal = action.payload.precioTotal;
		},
	},
});
export const { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART, LOAD_LOCALSTORAGE } =
	cartSlice.actions;

export default cartSlice.reducer;
