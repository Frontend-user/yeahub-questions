import './UiButton.scss'
import React from "react";

type UiButtonProps = {
    onHandleClick?: () => MouseEvent;
    text: string;
    type?: string;
    className?: string | string[];
}
const UiButton: React.FC<UiButtonProps> = ({className, onHandleClick, text, type}) => {
    return (
        <button onClick={onHandleClick}
                className={`ui-button ${className} ${type ? `ui-button__${type}` : ''}`}>
           <span>{text}</span>
        </button>
    );
};

export default UiButton;