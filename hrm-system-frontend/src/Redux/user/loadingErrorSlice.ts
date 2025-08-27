import { createSlice, } from "@reduxjs/toolkit";

const initialState ={
    error:null,
    loading:false
}



const LoadingErrorSlice = createSlice({
    
    name:"LoadingError", 
    initialState,
     reducers:{
         Start:(state)=>{
             state.loading =true;
         },
         Success:(state)=>{
            state.loading=false;
         },
         failure:(state,action)=>{
            state.loading=false,
            state.error=action.payload;
         }
     }

    })


    export const {Start,Success,failure} =LoadingErrorSlice.actions;
    export default LoadingErrorSlice.reducer;