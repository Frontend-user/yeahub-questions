import './FiltersSkeleton.scss'

const QuestionsSkeleton = () => {
    return (
        <div className="filters-skeleton">
            {[1,2,3,4].map((_)=>(
                <div className="filters-skeleton__item">
                    <div className="filters-skeleton__fill filters-skeleton__big-fill"></div>
                    <div className="filters-skeleton__title"></div>
                    <div className="filters-skeleton__cols-wrap ">
                        <div className="filters-skeleton__fill"></div>
                        <div className="filters-skeleton__fill"></div>
                        <div className="filters-skeleton__fill"></div>
                        <div className="filters-skeleton__fill"></div>
                        <div className="filters-skeleton__fill"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuestionsSkeleton;