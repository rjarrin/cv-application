import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: ''
};

export const generalInfoSlice = createSlice({
    name: 'generalInfo',
    initialState,
    reducers: {
        updateGeneralInfo: (state, action) => {
            return action.payload;
        },
    },
});

export const {updateGeneralInfo} = generalInfoSlice.actions;

export default generalInfoSlice;
