import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        addExperienceEntry: (state, action) => {
            state.push(action.payload);
        },
        updateExperienceEntry: (state, action) => {
            const index = state.findIndex(entry => entry.id === action.payload.id);
            if (index >= 0) {
                state[index] = action.payload;
            }
        },
        deleteExperienceEntry: (state, action) => {
            return state.filter(entry => entry.id !== action.payload);
        }
    },
});

export const {addExperienceEntry, updateExperienceEntry, deleteExperienceEntry} = experienceSlice.actions;

export default experienceSlice;
