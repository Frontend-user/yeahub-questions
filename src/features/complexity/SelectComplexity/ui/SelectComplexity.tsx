import {useEffect} from 'react';
import './SelectComplexity.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {chooseComplexity} from "@/entities/complexity";
import {useSearchParams} from "react-router-dom";

export const SelectComplexity  = () => {
    const list = useSelector((state: AppStateType) => state.complexity.complexityList)
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    function onHandleClick(id: number) {
        searchParams.set('page', '1')
        dispatch(chooseComplexity(id))
        const querySkills = searchParams.getAll('complexity')
        if (querySkills.includes(id.toString())) {
            const idxToDel = querySkills.findIndex(i => i === id.toString())

            querySkills.splice(idxToDel, 1)
            searchParams.delete('complexity')
            querySkills.forEach(s => searchParams.append('complexity', s))
            setSearchParams(searchParams)
        } else {
            querySkills.push(String(id))
            searchParams.delete('complexity')
            querySkills.forEach(s => searchParams.append('complexity', s))
            setSearchParams(searchParams)
        }
    }

    useEffect(() => {
        const querySkills = searchParams.getAll('complexity')
        if (querySkills.length) {
            querySkills.forEach((id) => {
                dispatch(chooseComplexity(+id))
            })
        }

    }, []);
    return (
        <div>
            <UiSelect
                showButton={false}
                title="Уровень сложности"
                onHandleClick={onHandleClick}
                list={list}/>
        </div>
    );
};