import { configureStore } from "@reduxjs/toolkit"; 
import searchReducer from "./feature/searchSlice";
import collectionReducer from "./feature/collectionSlice";


export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
});