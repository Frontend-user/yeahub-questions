import "./PageLoadingSkeleton.scss";

export const PageLoadingSkeleton = () => {
  const questionsSkeletonArr = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="page-loading-skeleton">
      <div className="page-loading-skeleton__title"></div>
      <div>
        {questionsSkeletonArr.map((_) => (
          <div key={_} className="page-loading-skeleton__item">
            <div className="page-loading-skeleton__fill-item"></div>
            <div className="page-loading-skeleton__icon"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
