import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  item: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.item.find(
        (item) => state.id == action.payload.id
      );
      if (!alreadyExist) {
        state.item.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.item));
      }
    },
    removeCollection: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.item));
    },
    clearCollection: (state) => {
      state.item = [];
      localStorage.removeItem("collection");
    },
    addToToast: (state, action) => {
      toast.success("Added to Collection ✅", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addToToast } =
  collectionSlice.actions;

export default collectionSlice.reducer;
