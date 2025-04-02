import {createSlice} from "@reduxjs/toolkit";
import {RateSliceInitialState} from "@/entities/rate";

const initialState: RateSliceInitialState = {
    rateList: [
        {
            id: 1,
            title: '1',
            selected: false
        },
        {
            id: 2,
            title: '2',
            selected: false
        },
        {
            id: 3,
            title: '3',
            selected: false
        },
        {
            id: 4,
            title: '4',
            selected: false
        },

        {
            id: 5,
            title: '5',
            selected: false
        },
    ]
}
const rateSlice = createSlice({
    name: 'createSlice',
    initialState,
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