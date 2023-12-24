import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValues: { name: "", email: "", password: "" },
    statusListener: false,
    currentUpdatePerson: 0

}

const globalSlice = createSlice({
    name: 'globalValues',
    initialState,
    reducers: {
        resetInputValues: (state) => {
            state.inputValues = { name: "", email: "", password: "" };
        },
        updateNameInputValue: (state, action) => {
            state.inputValues.name = action.payload;
        },
        updateEmailInputValue: (state, action) => {
            state.inputValues.email = action.payload;
        },
        updatePasswordInputValue: (state, action) => {
            state.inputValues.password = action.payload;
        },
        changeStatusListener: (state) => {
            state.statusListener = !state.statusListener;
        },
        changeCurrentUpdatePerson: (state, action) => {
            state.currentUpdatePerson = action.payload;
        }
    }
})

// console.log(cartSlice);
export const { resetInputValues, updateNameInputValue, updateEmailInputValue, updatePasswordInputValue, changeStatusListener, changeCurrentUpdatePerson } = globalSlice.actions;

export default globalSlice.reducer;