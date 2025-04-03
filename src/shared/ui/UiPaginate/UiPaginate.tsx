import React from 'react';
import './UiPaginate.scss'
import prevPageArrow from 'icons/btn-arrow-left.svg'
import nextPageArrow from 'icons/btn-arrow-right.svg'
import paginateDotsIcon from 'icons/paginate-dots.svg'

type UiPaginateProps = {
    lastPage: number;
    showPages: number[];
    currentPage: number;
    firstPage: number;
    onHandleNextPage: () => void;
    onHandlePrevPage: () => void;
    selectPage: (page: number) => void;

}
const UiPaginate: React.FC<UiPaginateProps> = ({
                                                   lastPage,
                                                   firstPage,
                                                   showPages,
                                                   currentPage,
                                                   selectPage,
                                                   onHandleNextPage,
                                                   onHandlePrevPage
                                               }) => {
    return (
        <div className="ui-paginate">
            <img src={prevPageArrow} onClick={onHandlePrevPage} className="ui-paginate__prev-page"/>
            {firstPage + 4   < currentPage && (<>
                <div className="ui-paginate__first-page"
                     onClick={() => selectPage(firstPage)}
                >{firstPage}</div>
                {currentPage > 3 && (<img src={paginateDotsIcon} className="ui-paginate__dots"/>)}
            </>)}
            <div className="ui-paginate__show-pages">
                {showPages.map((page) => (
                    <div key={page}
                         onClick={() => selectPage(page)}
                         className={`ui-paginate__show-page ${currentPage === page ?
                             `ui-paginate__show-page_current` : ''}`}>{page}</div>
                ))}
            </div>
            {currentPage + 2 < lastPage && (<img src={paginateDotsIcon} className="ui-paginate__dots"/>)}
            {currentPage +2 < lastPage &&  (<div className="ui-paginate__last-page"
                   onClick={() => selectPage(lastPage)}
            >{lastPage}</div>)}
            <img src={nextPageArrow} onClick={onHandleNextPage} className="ui-paginate__next-page"/>
        </div>
    );
};

export default UiPaginate;