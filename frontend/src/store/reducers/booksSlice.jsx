import { createSlice } from "@reduxjs/toolkit";

const initialState={
    books:[],
}

const booksSlice=createSlice({
    name:"books",
    initialState,
    reducers:{
        loadbooks:(state,action)=>{
            state.books=action.payload;
        }
    }
})
export default booksSlice.reducer;
export const {loadbooks}=booksSlice.actions;  