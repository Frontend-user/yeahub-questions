import React, { useMemo, useState} from 'react';
import './UiSelect.scss'
import UiSelectItem, {UiSelectItemProps} from "@/shared/ui/UiSelectItem/UiSelectItem.tsx";
import UiButton from "@/widgets/header/ui/UiButton/UiButton.tsx";

type UiSelectProps = {
    title: string,
    list: Array<UiSelectItemProps>,
    onHandleClick: () => void
}
const UiSelect: React.FC<UiSelectProps> = ({
                                               title, list, onHandleClick
                                           }) => {
    const [showAllList, setShowAllList] = useState(false)
    const onHandleShowAllList = () => {
        setShowAllList(pr => !pr)
    }
    const slicedList = useMemo(() => {
        if (showAllList) {
            return list
        }
        return list.slice(0, 5)
    }, [list, showAllList])
    return (
        <div className="ui-select">
            <div className="ui-select__title">{title}</div>
            <div className="ui-select__list">

                {slicedList.map((item) => (
                    <UiSelectItem key={item.id} id={item.id} iconSrc={item.iconSrc}
                                  selected={item.selected}
                                  onHandleClick={onHandleClick}
                                  title={item.title}/>
                ))}

            </div>
        <UiButton
                onHandleClick={onHandleShowAllList}
                type="text-link" text={showAllList ? 'Скрыть' : 'Посмотреть все'}/>
        </div>
    );
};

export default UiSelect;