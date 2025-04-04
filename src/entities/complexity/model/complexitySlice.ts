import {createSlice} from "@reduxjs/toolkit";
import {complexityInitialState} from "@/entities/complexity/libs/constants.ts";

const complexitySlice = createSlice({
    name: 'complexitySlice',
    initialState: complexityInitialState,
    reducers: {
        chooseComplexity: (state, action) => {
            const id = action.payload
            state.complexityList.forEach((_) => {
                if (_.id === id) {
                    _.selected = !_.selected
                }
            })
        }
    }
})

export {complexitySlice}
export const {chooseComplexity} = complexitySlice.actions