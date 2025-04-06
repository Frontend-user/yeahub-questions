import {useState} from 'react';
import './UiSelectItem.scss'
import {isImageExists} from "@/shared/lib/helpers/helpers.ts";
import {ISelectItem} from "@/shared/model/types/types.ts";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

export interface UiSelectItemProps extends ISelectItem {
    onHandleClick?: (id: number) => void
}

const UiSelectItem = ({
                          selected,
                          id,
                          title, imageSrc, onHandleClick
                      }: UiSelectItemProps) => {

    const [showIcon, setShowIcon] = useState(false);

    // isImageExists(imageSrc).then((exists) => {
    //     setShowIcon(!!exists)
    // });
    const checkValidHandleClick = () => {
        if (onHandleClick) {
            onHandleClick(id)
        }
    }
    return (
        <div onClick={checkValidHandleClick}
             className={`ui-select-item ${selected && 'ui-select-item_selected'}`}>
            <div className="ui-select-item__inner">
                {/*{imageSrc && showIcon && (*/}
                {/*    <UiImage*/}
                {/*        className="ui-select-item__icon"*/}
                {/*        src={imageSrc}/>*/}
                {/*)}*/}
                <div className="ui-select-item__label">{title}</div>
            </div>
        </div>
    );
};

export default UiSelectItem;