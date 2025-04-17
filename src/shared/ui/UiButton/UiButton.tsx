import "./UiButton.scss";
import { MouseEventHandler } from "react";

type UiButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement> | undefined;
  text?: string;
  children?: string;
  type?: string;
  className?: string | string[];
};
const UiButton = ({ className, onClick, text, type, children }: UiButtonProps) => {
  return (
    <button onClick={onClick} className={`ui-button ${className} ${type && `ui-button__${type}`}`}>
      <span>{children || text}</span>
    </button>
  );
};

export default UiButton;
