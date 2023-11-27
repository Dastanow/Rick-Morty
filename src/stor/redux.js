import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";

const store = configureStore({ 
    reducer:{ 
    caracter: characterSlice
    }
})
export default store