import './UiSearchInput.scss'
import searchIcon from 'icons/search-icon.svg'
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

type UiInputProps = {
    onChange: (arg: any) => void;
    value?: string | number
}
const UiSearchInput = ({onChange, value}: UiInputProps) => {
    return (
        <div className="ui-input-search">
            <div className="ui-input-search__inner">
                <UiImage
                    src={searchIcon}
                    className="ui-input-search__icon"/>
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="ui-input-search__field"
                    placeholder="Введите запрос"
                    type="text"/>
            </div>
        </div>
    );
};

export default UiSearchInput;