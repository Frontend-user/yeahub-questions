import {createSlice} from "@reduxjs/toolkit";

const specializationsSlice = createSlice({
    name: 'specializations',
    initialState: {
        specializations: [],
        formattedSpecializations: []
    },
    reducers: {
        setSpecializationsList: (state, action) => {
            state.specializations = action.payload
        },
        chooseSpecialization: (state, action) => {
            const id = action.payload
            state.formattedSpecializations.forEach((_) => {
                if (_.id === id) {
                    _.selected = !_.selected
                } else {
                    _.selected = false
                }
            })
        },
        setFormattedSpecializations: (state, action) => {
            state.formattedSpecializations = action.payload.map((_) => ({..._, selected: false}))
        }
    }
})

export {specializationsSlice}
export const {
    setSpecializationsList,
    chooseSpecialization,
    setFormattedSpecializations
} = specializationsSlice.actions