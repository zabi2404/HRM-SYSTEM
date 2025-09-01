import { createSlice } from "@reduxjs/toolkit";


const initialState={


    Attendance:false
}

const attendanceSlice = createSlice({

    name:"Attendance",
    initialState,
    reducers:{

        ClockIn:(state)=>{
            state.Attendance=true
        }
        ,ClockOut:(state)=>{
            state.Attendance=false
        },

    }})

export const {ClockIn,ClockOut} = attendanceSlice.actions;

export default attendanceSlice.reducer;