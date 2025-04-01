import React, {useState} from 'react';
import './UiSelectItem.scss'
import {isImageExists} from "@/shared/lib/helpers/helpers.ts";

export type UiSelectItemProps = {
    iconSrc?: string | null
    title: string
    id: number
    selected: boolean,
    onHandleClick: (id:number) => void
}
const UiSelectItem: React.FC<UiSelectItemProps> = ({
                                                       selected,
                                                       id,
                                                       title, iconSrc, onHandleClick
                                                   }) => {

    const [showIcon, setShowIcon] = useState(false);

    isImageExists(iconSrc).then((exists) => {
        setShowIcon(!!exists)
    });
    return (
        <div onClick={() => onHandleClick(id)} className={`ui-select-item ${selected && 'ui-select-item_selected'}`}>
            <div className="ui-select-item__inner">
                {iconSrc && showIcon && (
                    <img
                        className="ui-select-item__icon"
                        src={iconSrc}/>
                )}
                <div className="ui-select-item__label">{title}</div>
            </div>
        </div>
    );
};

export default UiSelectItem;