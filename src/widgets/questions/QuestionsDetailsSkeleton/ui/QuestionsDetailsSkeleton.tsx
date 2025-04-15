import './QuestionsDetailsSkeleton.scss'

export const QuestionsDetailsSkeleton = () => {
    return (
        <div className="questions-details-skeleton">
            <div className="questions-details-skeleton__inner">
                <div className="questions-details-skeleton__left">
                    <div className="questions-details-skeleton__block-1 fill"></div>
                    <div className="questions-details-skeleton__block-2 fill"></div>
                    <div className="questions-details-skeleton__block-4 fill"></div>
                </div>
                <div>

                    {[1,].map((_) => (
                        <div key={_} className="questions-details-skeleton__item">
                            <div
                                className="questions-details-skeleton__fill questions-details-skeleton__big-fill"></div>
                            <div className="questions-details-skeleton__title"></div>
                            <div className="questions-details-skeleton__cols-wrap ">
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                                <div className="questions-details-skeleton__fill"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};