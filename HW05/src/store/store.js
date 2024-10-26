import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../reducers/themeColorReducer";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;
