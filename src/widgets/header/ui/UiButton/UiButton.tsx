import './UiButton.scss'
import React from "react";

type UiButtonProps = {
    onHandleClick?: () => MouseEvent;
    text: string;
    type?: string;
}
const UiButton: React.FC<UiButtonProps> = ({onHandleClick, text, type}) => {
    return (
        <button onClick={onHandleClick} className={`ui-button ${type ? `ui-button__${type}` : ''}`}>
            {text}
        </button>
    );
};

export default UiButton;