import { createSlice } from "@reduxjs/toolkit";


const initialState={


    Attendance:false
}

const attendanceSlice = createSlice({

    name:"Attendance",
    initialState,
    reducers:{

        ChangeAttendance:(state)=>{
            state.Attendance=true
        }
    }})

export const {ChangeAttendance} = attendanceSlice.actions;

export default attendanceSlice.reducer;