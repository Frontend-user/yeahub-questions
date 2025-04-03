import './QuestionsDetailsHeader.scss'

interface QuestionsDetailsHeaderProps {
    imageSrc?: string;
    title: string;
    description?: string;

}

const QuestionsDetailsHeader = ({imageSrc, title, description}: QuestionsDetailsHeaderProps) => {
    return (
        <div className="questions-details-header">
            <div className="questions-details-header__inner">
                <img src={imageSrc} alt="" className="questions-details-header__image"/>
                <div className="questions-details-header__info">
                    <div className="questions-details-header__title">{title}</div>
                    <div className="questions-details-header__desc">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsDetailsHeader;