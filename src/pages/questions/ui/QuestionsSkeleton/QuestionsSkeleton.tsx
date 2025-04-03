import './QuestionsSkeleton.scss'

const QuestionsSkeleton = () => {
    return (
        <div className="questions-skeleton">
            <div className="questions-skeleton__title"></div>
            <div>
                {Array.from({length: 12},(v,i) => i).map((_)=>(
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