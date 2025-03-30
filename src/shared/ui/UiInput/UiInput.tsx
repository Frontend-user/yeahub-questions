import React from 'react';
import './UiInput.scss'
import searchIcon from 'icons/search-icon.svg'

const UiInput: React.FC = () => {
    return (
        <div className="ui-input">
            <div className="ui-input__inner">
                <img
                    src={searchIcon}
                    className="ui-input__icon"/>
                <input
                    className="ui-input__field"
                    placeholder="Введите запрос"
                    type="text"/>
            </div>
        </div>
    );
};

export default UiInput;