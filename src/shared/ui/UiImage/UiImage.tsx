import {MouseEventHandler, useEffect, useState} from "react";
import './UiImage.scss'

interface PropsUiImage {
    src?: string
    className?: string;
    alt?: string
    onClick?: MouseEventHandler<HTMLImageElement>
}

const UiImage = ({src, className, onClick, alt}: PropsUiImage) => {
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        if (!src) return;
        fetch(src, {method: 'HEAD'})
            .then((response) => {
                if (response.ok) {
                    setImgSrc(src);
                } else {
                    setImgSrc("");
                }
            })
            .catch(() => {
                setImgSrc("");
            });
    }, [src]);
    if (imgSrc === "") {
        return (<></>)
    }
    return (
        <img src={imgSrc}
             onClick={onClick}
             alt={alt}
             className={`ui-image ${className}`}/>
    );
};

export default UiImage;