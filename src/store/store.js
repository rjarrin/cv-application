import { configureStore } from "@reduxjs/toolkit";
import generalInfoSlice from './generalInfoSlice';
import educationSlice from "./educationSlice";
import experienceSlice from "./experienceSlice";

export const store = configureStore({
    reducer: {
        generalInfo: generalInfoSlice.reducer,
        education: educationSlice.reducer,
        experience: experienceSlice.reducer,
    },
});