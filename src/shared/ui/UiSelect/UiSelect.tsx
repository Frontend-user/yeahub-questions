import React from 'react';
import './UiSelect.scss'
import UiSelectItem, {UiSelectItemProps} from "@/shared/ui/UiSelectItem/UiSelectItem.tsx";

type UiSelectProps = {
    title: string,
    list: Array<UiSelectItemProps>,
}
const UiSelect: React.FC<UiSelectProps> = ({
                                               title, list
                                           }) => {
    return (
        <div className="ui-select">
            <div className="ui-select__title">{title}</div>
            <div className="ui-select__list">

                {list.map((item) => (
                    <UiSelectItem key={item.label} icon={item.icon} label={item.label}/>
                ))}
            </div>
        </div>
    );
};

export default UiSelect;