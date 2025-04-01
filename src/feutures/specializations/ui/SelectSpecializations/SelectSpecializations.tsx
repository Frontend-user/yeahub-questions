import React, {useEffect} from 'react';
import './SelectSpecializations.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseSpecialization} from "@/entities/specializations";
import {AppStateType} from "@/app/AppStore.ts";

const SelectSpecializations: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const list = useSelector((state: AppStateType) => state.specializations.formattedSpecializations)
    const status = useSelector((state: AppStateType) => state.specializations.status)
    useEffect(() => {
        if (status === 'fulfilled') {
            const findSpecializationInQueryId = searchParams.get('specialization')
            console.log(findSpecializationInQueryId, 'findSpecializationInQueryId')
            if (findSpecializationInQueryId) {
                dispatch(chooseSpecialization(+findSpecializationInQueryId))
            }
        }

    }, [status])
    useEffect(() => {
        if (!list.some(_ => _.selected)) {
            searchParams.delete('specialization')
            setSearchParams(searchParams)
        }
    }, [list]);
    const onChooseItem = (id: number) => {
        dispatch(chooseSpecialization(id))
        searchParams.set('specialization', id.toString())
        setSearchParams(searchParams)
    }
    return (
        <div className="select-specializations">
            <UiSelect
                onHandleClick={onChooseItem}
                title="Специализация" list={list}/>
        </div>
    );
};

export default SelectSpecializations;