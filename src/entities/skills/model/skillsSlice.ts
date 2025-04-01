import {IFormattedSkill, ISkill, ISkillsInitialState} from "@/entities/skills";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ISkillsInitialState = {
    skills: [],
    formattedSkills: [],
    skillsQueryIds: [],
    status: ''
}

const skillsSlice = createSlice({
    name: 'skillsSlice',
    initialState,
    reducers: {
        setSkillsList: (state, action: PayloadAction<ISkill[]>) => {
            state.skills = action.payload
        },

        setFormattedSkillsList: (state, action: PayloadAction<IFormattedSkill[]>) => {
            state.formattedSkills = action.payload.map(_ =>
                ({
                    id: _.id,
                    title: _.title,
                    imageSrc: _.imageSrc,
                    selected: false,
                }))
            state.status = 'fulfilled'
        },
        chooseSkills: (state, action) => {
            const id = action.payload
            state.formattedSkills.forEach((_) => {
                if (_.id === id) {
                    _.selected = !_.selected
                }
            })
            state.skillsQueryIds = state.formattedSkills.filter(_ => _.selected).map(_ => _.id.toString())
        }
    }
})
export const {setSkillsList, setFormattedSkillsList, chooseSkills} = skillsSlice.actions
export {skillsSlice}