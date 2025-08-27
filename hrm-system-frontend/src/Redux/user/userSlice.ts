import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    currentUser : null,
}


const userSlice  = createSlice({ 
        name:"User",
        initialState,
        reducers:{ 
           
            signInSuccess:(state,action)=>{
                state.currentUser=action.payload;  
            },
             UpdateUserSuccess:(state,action)=>{
                state.currentUser=action.payload;
            },
             DeleteUserSuccess:(state)=>{
                state.currentUser=null;
            }
            ,
             signOutUserSuccess:(state)=>{
                state.currentUser=null;
              
            }     

        }
    }
)

export const {
    
    signInSuccess
    ,UpdateUserSuccess
    ,DeleteUserSuccess
    ,signOutUserSuccess

} = userSlice.actions;

export default userSlice.reducer;
