import { createSlice } from "@reduxjs/toolkit";

export const catFilterSlice = createSlice ({
    name: 'breed',
    initialState: {
            options: [{
                value: "",
                label: "None",   
            }]
    },
    reducers: {
        setBreed: (state,{payload}) => {
            state.options = payload || []
        }
    }
})

export const { setBreed } = catFilterSlice.actions

export const selectBreed = (state) => state.breed.options

export default catFilterSlice.reducer