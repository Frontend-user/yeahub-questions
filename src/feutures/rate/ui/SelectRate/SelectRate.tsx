import  {useEffect} from 'react';
import './SelectRate.scss'
import UiSelect from "@/shared/ui/UiSelect/UiSelect.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/app/AppStore.ts";
import {chooseRate} from "@/entities/rate";
import {useSearchParams} from "react-router-dom";

const SelectRate= () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const rateList = useSelector((state: AppStateType) => state.rate.rateList)
    const dispatch = useDispatch()
    const onHandleChooseRate = (id:number) => {
        searchParams.set('page', '1')
        dispatch(chooseRate(id))
        const querySkills = searchParams.getAll('rate')
        if (querySkills.includes(id.toString())) {
            const idxToDel = querySkills.findIndex(i => i === id.toString())

            querySkills.splice(idxToDel, 1)
            searchParams.delete('rate')
            querySkills.forEach(s => searchParams.append('rate', s))
            setSearchParams(searchParams)
        } else {
            querySkills.push(String(id))
            searchParams.delete('rate')
            querySkills.forEach(s => searchParams.append('rate', s))
            setSearchParams(searchParams)
        }
    }
    useEffect(() => {
        const querySkills = searchParams.getAll('rate')
        if (querySkills.length) {
            querySkills.forEach((id) => {
                dispatch(chooseRate(+id))
            })
        }

    }, []);
    return (
        <div>
            <UiSelect
                showButton={false}
                list={rateList}
                title="Рейтинг" onHandleClick={onHandleChooseRate}/>
        </div>
    );
};

export default SelectRate;