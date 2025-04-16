import {useEffect} from 'react';
import './SelectComplexity.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import { useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {chooseComplexity} from "@/entities/complexity";
import {useChangeParams} from "@/shared/hooks/useChangeParams.ts";

export const SelectComplexity = () => {
    const list = useSelector((state: AppStateType) => state.complexity.complexityList)
    const [onHandleClick, defineParamsInState] = useChangeParams(chooseComplexity,'complexity')

    useEffect(() => {
        defineParamsInState()
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