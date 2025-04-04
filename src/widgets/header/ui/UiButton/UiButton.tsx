import './UiButton.scss'
import {MouseEventHandler} from "react";

type UiButtonProps = {
    onHandleClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement> | undefined
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