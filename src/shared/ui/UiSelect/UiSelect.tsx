import React, {useMemo} from 'react';
import './UiSelect.scss'
import UiSelectItem from "@/shared/ui/UiSelectItem/UiSelectItem.tsx";
import UiButton from "@/widgets/header/ui/UiButton/UiButton.tsx";
import {ISelectItem} from "@/shared/model/types/types.ts";
import {useToggle} from "@/shared/hooks/useToggle.tsx";

type UiSelectProps = {
    title: string,
    list: ISelectItem[],
    sliceCount?: number
    onHandleClick: (id: number) => void
    showButton?:boolean
}
const UiSelect: React.FC<UiSelectProps> = ({showButton=true,
                                               sliceCount = 5,
                                               title, list, onHandleClick
                                           }) => {
    const [showAllList, toggleShowAllList] = useToggle()
    const slicedList = useMemo(() => {
        if (showAllList) {
            return list
        }
        return list.slice(0, sliceCount)
    }, [list, showAllList])
    return (
        <div className="ui-select">
            <div className="ui-select__title">{title}</div>
            <div className="ui-select__list">

                {slicedList.map((item) => (
                    <UiSelectItem
                        key={item.id}
                        id={item.id}
                        imageSrc={item.imageSrc}
                        selected={item.selected}
                        onHandleClick={onHandleClick}
                        title={item.title}/>
                ))}

            </div>
            {showButton && sliceCount < list?.length && (
                <UiButton
                    onHandleClick={toggleShowAllList}
                    type="text-link" text={showAllList ? 'Скрыть' : 'Показать все'}/>)}
        </div>
    );
};

export default UiSelect;