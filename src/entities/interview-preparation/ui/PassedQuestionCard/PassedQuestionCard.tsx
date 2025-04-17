import classes from "./PassedQuestionCard.module.scss";
import UiButton from "@/shared/ui/UiButton/UiButton.tsx";
import passedQuestionStaticImage from "images/static-passed-question-image.svg";
import { IPassedQuestionCardProps } from "@/entities/interview-preparation/model/types.ts";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import UiTextHtml from "@/shared/ui/UiTextHtml/UiTextHtml.tsx";

const { info, image, title, block, inner, imageWrapper, statusButton } = classes;

const PassedQuestionCard = ({ imageSrc, question = "", isUserKnow }: IPassedQuestionCardProps) => {
  return (
    <div className={block}>
      <div className={inner}>
        <div className={imageWrapper}>
          <UiImage className={image} src={imageSrc || passedQuestionStaticImage} />
        </div>
        <div className={info}>
          <UiTextHtml className={title}>{question}</UiTextHtml>
          {isUserKnow ? (
            <UiButton className={statusButton} type="like">
              Я знаю
            </UiButton>
          ) : (
            <UiButton className={statusButton} type="dislike">
              Незнаю
            </UiButton>
          )}
        </div>
      </div>
    </div>
  );
};

export { PassedQuestionCard };
