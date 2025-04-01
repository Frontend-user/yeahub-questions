import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISpecialization, ISpecializationsSliceInitialState} from "@/entities/specializations";

const initialState: ISpecializationsSliceInitialState = {
    specializations: [],
    formattedSpecializations: [],
    status: ''
}

const specializationsSlice = createSlice({
    name: 'specializations',
    initialState,
    reducers: {
        setSpecializationsList: (state, action: PayloadAction<ISpecialization[]>) => {
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
        setFormattedSpecializations: (state, action: PayloadAction<ISpecialization[]>) => {
            state.formattedSpecializations = action.payload.map((spec) => ({...spec, selected: false}))
            state.status = 'fulfilled'
        }
    }
})

export {specializationsSlice}
export const {
    setSpecializationsList,
    chooseSpecialization,
    setFormattedSpecializations
} = specializationsSlice.actions