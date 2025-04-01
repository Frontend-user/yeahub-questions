import React from 'react';
import './UiInput.scss'
import searchIcon from 'icons/search-icon.svg'

type UiInputProps = {
    onHandleInputChange: (arg0: string) => void;
    value?: string | number
}
const UiInput: React.FC<UiInputProps> = ({onHandleInputChange, value}) => {
    return (
        <div className="ui-input">
            <div className="ui-input__inner">
                <img
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