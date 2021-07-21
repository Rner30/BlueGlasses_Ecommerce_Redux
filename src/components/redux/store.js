import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import { saveState, LoadState } from "./localStorage";

const store = configureStore({
	reducer: {
		authSlice: authSlice,
		cartSlice: cartSlice,
	},
});
LoadState();

store.subscribe(() => {
	saveState(store.getState().cartSlice);
});
export default store;
