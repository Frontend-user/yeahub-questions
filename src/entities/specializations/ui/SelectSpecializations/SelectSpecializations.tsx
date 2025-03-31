import React, {useEffect} from 'react';
import './SelectSpecializations.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseSpecialization} from "@/entities/specializations/model/specializationsSlice.ts";

const SelectSpecializations: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        defineQueryParams()
    }, [])
    const dispatch = useDispatch()
    const list = useSelector((state) => state.specializations.formattedSpecializations)
    const defineQueryParams = () => {
        const findSpec = list.find(_ => _.selected)
        if (findSpec) {
            searchParams.set('specialization', findSpec.id.toString())
            setSearchParams(searchParams)
        }
    }

    const onChooseItem = (id: number) => {
        dispatch(chooseSpecialization(id))
        defineQueryParams()
    }
    return (
        <div>
            <UiSelect
                onHandleClick={onChooseItem}
                title="Специализация" list={list}/>
        </div>
    );
};

export default SelectSpecializations;