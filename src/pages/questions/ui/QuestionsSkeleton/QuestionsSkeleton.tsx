import './QuestionsSkeleton.scss'

const QuestionsSkeleton = () => {
    const questionsSkeletonArr = Array.from({length: 12}, (_, i) => i)
    return (
        <div className="questions-skeleton">
            <div className="questions-skeleton__title"></div>
            <div>
                {questionsSkeletonArr.map((_) => (
                    <div key={_} className="questions-skeleton__item">
                        <div className="questions-skeleton__fill-item"></div>
                        <div className="questions-skeleton__icon"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionsSkeleton;