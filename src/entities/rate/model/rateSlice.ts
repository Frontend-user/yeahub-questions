import {createSlice} from "@reduxjs/toolkit";
import {rateInitialState} from "@/entities/rate/libs/constants.ts";

const rateSlice = createSlice({
    name: 'createSlice',
    initialState :rateInitialState,
    reducers: {
        chooseRate: (state, action) => {
            const id = action.payload
            state.rateList.forEach((_) => {
                if (_.id === id) {
                    _.selected = !_.selected
                }
            })
        }
    }
})

export {rateSlice}
export const {chooseRate} = rateSlice.actions