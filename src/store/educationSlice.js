import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        addEducationEntry: (state, action) => {
            state.push(action.payload);
        },
        updateEducationEntry: (state, action) => {
            const index = state.findIndex(entry => entry.id === action.payload.id);
            if(index >= 0) {
                state[index] = action.payload;
            }
        },
        deleteEducationEntry: (state, action) => {
            return state.filter(entry => entry.id !== action.payload);
        }
    },
});

export const {addEducationEntry, updateEducationEntry, deleteEducationEntry} = educationSlice.actions;

export default educationSlice;