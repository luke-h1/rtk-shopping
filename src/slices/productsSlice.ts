import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "",
};

export const productsFetcher = createAsyncThunk(
  "products/productsFetcher",
  async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsFetcher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productsFetcher.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(productsFetcher.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export default productsSlice.reducer;
