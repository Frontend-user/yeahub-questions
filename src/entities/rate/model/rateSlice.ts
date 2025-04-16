import {createSlice} from "@reduxjs/toolkit";
import {rateInitialState} from "@/entities/rate/libs/constants.ts";

const rateSlice = createSlice({
    name: 'createSlice',
    initialState: rateInitialState,
    reducers: {
        chooseRate: (state, action) => {
            const choosedRateId = action.payload
            state.rateList.forEach((rateItem) => {
                if (rateItem.id === choosedRateId) {
                    rateItem.selected = !rateItem.selected
                }
            })
        }
    }
})

export {rateSlice}
export const {chooseRate} = rateSlice.actions