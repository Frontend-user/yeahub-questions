import React, { useState} from 'react';
import './UiSelectItem.scss'
import {isImageExists} from "@/shared/lib/helpers/helpers.ts";
import {ISelectItem} from "@/shared/model/types/types.ts";

export interface UiSelectItemProps extends ISelectItem {
    onHandleClick: (id: number) => void
}

const UiSelectItem: React.FC<UiSelectItemProps> = ({
                                                       selected,
                                                       id,
                                                       title, imageSrc, onHandleClick
                                                   }) => {

    const [showIcon, setShowIcon] = useState(false);

            // isImageExists(imageSrc).then((exists) => {
            //     setShowIcon(!!exists)
            // });

    return (
        <div onClick={() => onHandleClick(id)} className={`ui-select-item ${selected && 'ui-select-item_selected'}`}>
            <div className="ui-select-item__inner">
                {/*{imageSrc && showIcon && (*/}
                {/*    <img*/}
                {/*        className="ui-select-item__icon"*/}
                {/*        src={imageSrc}/>*/}
                {/*)}*/}
                <div className="ui-select-item__label">{title}</div>
            </div>
        </div>
    );
};

export default UiSelectItem;