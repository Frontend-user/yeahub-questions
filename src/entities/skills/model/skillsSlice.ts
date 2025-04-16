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
            state.formattedSkills = action.payload.map(formattedSkill =>
                ({
                    id: formattedSkill.id,
                    title: formattedSkill.title,
                    imageSrc: formattedSkill.imageSrc,
                    selected: false,
                }))

            state.status = 'fulfilled'
        },
        chooseSkills: (state, action) => {
            const choosedSkillId = action.payload

            state.formattedSkills.forEach((skill) => {
                if (skill.id === choosedSkillId) {
                    skill.selected = !skill.selected
                }
            })

            state.skillsQueryIds = state.formattedSkills
                .filter(formattedSkillItem => formattedSkillItem.selected)
                .map(formattedSkillItem => formattedSkillItem.id.toString())

        }
    }
})
export const {setSkillsList, setFormattedSkillsList, chooseSkills} = skillsSlice.actions
export {skillsSlice}