import React, { useEffect} from 'react';
import './SelectSpecializations.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseSpecialization} from "@/entities/specializations/model/specializationsSlice.ts";

const SelectSpecializations: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const dispatch = useDispatch()
    const list = useSelector((state) => state.specializations.formattedSpecializations)
    const status = useSelector((state) => state.specializations.status)
    useEffect(() => {
        if (status === 'fulfilled') {
            const findSpecializationInQueryId = searchParams.get('specialization')
            console.log(findSpecializationInQueryId, 'findSpecializationInQueryId')
            if (findSpecializationInQueryId) {
                dispatch(chooseSpecialization(+findSpecializationInQueryId))
            }
        }
    }, [status])

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