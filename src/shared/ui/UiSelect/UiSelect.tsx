import {useMemo} from 'react';
import './UiSelect.scss'
import UiSelectItem from "@/shared/ui/UiSelectItem/UiSelectItem.tsx";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import {ISelectItem} from "@/shared/types/types.ts";
import {useToggle} from "@/shared/hooks/useToggle.tsx";

type UiSelectProps = {
    title: string,
    list: ISelectItem[],
    sliceCount?: number
    onHandleClick: (id: number) => void
    showButton?: boolean
}

const UI_SELECT_DEFAULT_SLICE_COUNT = 5


const UiSelect = ({
                      showButton = true,
                      sliceCount = UI_SELECT_DEFAULT_SLICE_COUNT,
                      title, list, onHandleClick
                  }: UiSelectProps) => {


    const [showAllList, toggleShowAllList] = useToggle()

    const shouldRenderButton = showButton && sliceCount < list?.length

    const slicedList = useMemo(() => {
        if (showAllList) {
            return list
        }
        return list.slice(0, sliceCount)
    }, [list, showAllList, sliceCount])


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
            {shouldRenderButton && <UiButton
                onClick={toggleShowAllList}
                type="text-link" text={showAllList ? 'Скрыть' : 'Показать все'}/>}
        </div>
    );
};

export default UiSelect;