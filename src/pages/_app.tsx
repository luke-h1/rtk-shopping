import NavBar from "@frontend/components/NavBar";
import "@frontend/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import productReducer, {
  productsFetcher,
} from "@frontend/slices/productsSlice";
import cartReducer, { getTotals } from "@frontend/slices/cartSlice";
import { productApi } from "@frontend/slices/productApi";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(productsFetcher());
store.dispatch(getTotals({}));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}
