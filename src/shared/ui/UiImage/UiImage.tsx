import {MouseEventHandler} from "react";
import './UiImage.scss'

interface PropsUiImage {
    src?: string
    className?: string;
    alt?: string
    onClick?: MouseEventHandler<HTMLImageElement>
}

const UiImage = ({src, className, onClick,alt}: PropsUiImage) => {
    return (
        <img src={src}
             onClick={onClick}
             alt={alt}
             className={`ui-image ${className}`}/>
    );
};

export default UiImage;