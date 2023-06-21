import { createSlice } from "@reduxjs/toolkit";

export const catFilterSlice = createSlice ({
    name: 'breed',
    initialState: {
        value: "",
        label: "None",
    },
    reducers: {
        setBreed: (option) => {
            option;
        }
    }
})