import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice"

export default configureStore({
    
    reducer:{
        products
    }
})

//configureStore is a function that receives a property called reducers and this one is an object to store the states.