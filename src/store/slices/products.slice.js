import {createSlice}  from "@reduxjs/toolkit"
import axios from "axios"

const productsSlice= createSlice({
    name:"products",
    initialState: null,
    reducers:{

        setProducts:(state,action) => action.payload
         /*tiene actions que modifican mi estado, tanto como estaticamente asi como dinámicamente.
         payload lo hace dinamincamente. */
         /*setProduct has a function*/
    }
})

    export  const {setProducts}= productsSlice.actions

    export default productsSlice.reducer

    export const getAllProducts = () => (dispatch) => {

        const URL="https://ecommerce-api-react.herokuapp.com/api/v1/products"

        //coloca return porque usa llaves so no es implicito
        return axios.get(URL)
        .then(res=> dispatch(setProducts(res.data.data.products)))
        .catch(err=> console.log(err))
    }

        
    //slices are global states. Reducers are the actions and theses help to modify our states.
    //→Dinamic: User add information. Using action.payload like pokedex when the user enters the name. 
    //→static:like counter

    //representative element that we need to send to the store is the reducer that is why we export productsSlice.reducer.

    //petion from API to Redux is with redux thunk thus we have to create a dinamic action then I create  setProducts (state,action) => action.payload. 
    //Then I export the object with the actions productSlice.reducer and I destructure the action that I just created. 

    //In order to do the thunk an create a function that returns a function and then another funtion that returns what I need. The actions are dispatched therefore I need to do a dispatch(setProduct) and excuted with the paraments which is the information I am getting from the API. 