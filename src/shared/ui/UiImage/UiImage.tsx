import { MouseEventHandler } from "react";
import "./UiImage.scss";

interface PropsUiImage {
  src?: string | null;
  className?: string;
  alt?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

const UiImage = ({ src, className, onClick, alt }: PropsUiImage) => {
  return (
    <>
      {src && (
        <img
          src={src}
          onClick={onClick}
          alt={alt}
          className={`ui-image ${className}`}
        />
      )}
    </>
  );
};

export default UiImage;
