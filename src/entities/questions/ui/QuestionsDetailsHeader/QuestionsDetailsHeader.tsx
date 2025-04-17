import "./QuestionsDetailsHeader.scss";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

interface QuestionsDetailsHeaderProps {
  imageSrc?: string | null;
  title: string;
  description?: string;
}

const QuestionsDetailsHeader = ({ imageSrc, title, description }: QuestionsDetailsHeaderProps) => {
  return (
    <div className="questions-details-header">
      <div className="questions-details-header__inner">
        <UiImage src={imageSrc} className="questions-details-header__image" />
        <div className="questions-details-header__info">
          <div className="questions-details-header__title">{title}</div>
          <div className="questions-details-header__desc">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsDetailsHeader;
