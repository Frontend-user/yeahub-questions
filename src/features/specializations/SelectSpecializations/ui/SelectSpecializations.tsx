import {useEffect} from 'react';
import './SelectSpecializations.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { useSelector} from "react-redux";
import {chooseSpecialization} from "@/entities/specializations";
import {AppStateType} from "@/app/AppStore.ts";
import {useChangeParams} from "@/shared/hooks/useChangeParams.ts";
import {DEFAULT_SPECIALIZATIONS_SLICE_COUNT, SELECT_TYPE} from "@/shared/constats/constats.ts";

export const SelectSpecializations = () => {
    const list = useSelector((state: AppStateType) => state.specializations.formattedSpecializations)
    const [onChooseItem, defineParamsInState] = useChangeParams(chooseSpecialization,
        'specialization', SELECT_TYPE.ONE_ITEM)

    useEffect(() => {
        defineParamsInState()
    }, []);

    return (
        <div className="select-specializations">
            <UiSelect
                sliceCount={DEFAULT_SPECIALIZATIONS_SLICE_COUNT}
                onHandleClick={onChooseItem}
                title="Специализация" list={list}/>
        </div>
    );
};