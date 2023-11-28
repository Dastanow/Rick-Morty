import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";

const store = configureStore({ 
    reducer:{ 
    caracter: characterSlice
    }
}) 
window.store = store 
export default store