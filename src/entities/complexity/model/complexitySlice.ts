import {createSlice} from "@reduxjs/toolkit";
import {ComplexityInitialState} from "@/entities/complexity";

const initialState: ComplexityInitialState = {
    complexityList: [
        {
            id: 1,
            title: '1-3',
            value: [1,2,3],
            selected: false
        },
        {
            id: 2,
            title: '4-6',
            value: [4,5,6],
            selected: false
        },
        {
            id: 3,
            title: '7-8',
            value: [7,8,9],
            selected: false
        },
        {
            id: 4,
            title: '9-10',
            value: [9,10],
            selected: false
        },
    ]
}
const complexitySlice = createSlice({
    name: 'complexitySlice',
    initialState,
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