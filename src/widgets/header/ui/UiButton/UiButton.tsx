import './UiButton.scss'
import React from "react";

type UiButtonProps = {
    onHandleClick?: () => void;
    text: string;
    type?: string;
    className?: string | string[];
}
const UiButton= ({className, onHandleClick, text, type}:UiButtonProps) => {
    return (
        <button onClick={onHandleClick}
                className={`ui-button ${className} ${type ? `ui-button__${type}` : ''}`}>
            <span>{text}</span>
        </button>
    );
};

export default UiButton;