import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice.js";
// separate data layer into different layers (navigation slice stores user info)

export const store = configureStore({
    reducer : {
        nav: navReducer,
    },
});