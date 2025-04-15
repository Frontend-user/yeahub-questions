import  {useEffect} from 'react';
import './SelectSkills.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {chooseSkills} from "@/entities/skills";
import {ISelectItem} from "@/shared/types/types.ts";

export const SelectSkills= ({sliceCount=6,title="Навыки"}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const list: ISelectItem[] = useSelector((state: AppStateType) => state.skills.formattedSkills)
    const status: string = useSelector((state: AppStateType) => state.skills.status)
    const onChooseItem = (id: number) => {
        dispatch(chooseSkills(id))
        const querySkills = searchParams.getAll('skills')
        searchParams.set('page', String(1))
        if (querySkills.includes(id.toString())) {
            const idxToDel = querySkills.findIndex(i => i === id.toString())

            querySkills.splice(idxToDel, 1)
            searchParams.delete('skills')
            querySkills.forEach(s => searchParams.append('skills', s))
            setSearchParams(searchParams)
        } else {
            querySkills.push(id.toString())
            searchParams.delete('skills')
            querySkills.forEach(s => searchParams.append('skills', s))
            setSearchParams(searchParams)
        }
    }
    useEffect(() => {
            const querySkills = searchParams.getAll('skills')
            if (querySkills.length) {
                querySkills.forEach((id) => {
                    dispatch(chooseSkills(+id))
                })
            }

    }, [status]);
    return (
        <div className="select-skills">
            <UiSelect
                sliceCount={sliceCount}
                onHandleClick={onChooseItem}
                title={title} list={list}/>
        </div>
    );
};