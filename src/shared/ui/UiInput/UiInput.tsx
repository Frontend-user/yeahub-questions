import './UiInput.scss'
import searchIcon from 'icons/search-icon.svg'
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

type UiInputProps = {
    onHandleInputChange: (arg0: string) => void;
    value?: string | number
}
const UiInput = ({onHandleInputChange, value}:UiInputProps) => {
    return (
        <div className="ui-input">
            <div className="ui-input__inner">
                <UiImage
                    src={searchIcon}
                    className="ui-input__icon"/>
                <input
                    value={value}
                    onChange={(e) => onHandleInputChange(e.target.value)}
                    className="ui-input__field"
                    placeholder="Введите запрос"
                    type="text"/>
            </div>
        </div>
    );
};

export default UiInput;