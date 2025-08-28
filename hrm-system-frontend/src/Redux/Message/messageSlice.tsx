import { createSlice } from "@reduxjs/toolkit";

const initialState={
    messageObject:[]
}


const MessageHandlerSlice = createSlice({

    name:"Message",
    initialState,
    reducers:{

        getMessage:(state,action)=>{
            state.messageObject=action.payload
        }
    }

})


export const {getMessage} = MessageHandlerSlice.actions;

export default MessageHandlerSlice.reducer;