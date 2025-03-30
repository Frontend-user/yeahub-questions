import React, {useState} from 'react';
import './UiSelectItem.scss'
import {isImageExists} from "@/shared/lib/helpers/helpers.ts";

export type UiSelectItemProps = {
    icon?: string
    label: string
}
const UiSelectItem: React.FC<UiSelectItemProps> = ({
                                                       label, icon
                                                   }) => {

    const [showIcon, setShowIcon] = useState(false);

    isImageExists(icon).then((exists) => {
            setShowIcon(!!exists)
    });
    return (
        <div className="ui-select-item">
                <div className="ui-select-item__inner">
                    {icon && showIcon && (
                        <img
                            className="ui-select-item__icon"
                            src={icon}/>
                    )}
                    <div className="ui-select-item__label">{label}</div>
            </div>
        </div>
    );
};

export default UiSelectItem;