import './UiPaginate.scss'
import prevPageArrow from 'icons/btn-arrow-left.svg'
import nextPageArrow from 'icons/btn-arrow-right.svg'
import paginateDotsIcon from 'icons/paginate-dots.svg'
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";

type UiPaginateProps = {
    lastPage: number,
    showPages: number[],
    currentPage: number,
    firstPage: number,
    onHandleNextPage: () => void,
    onHandlePrevPage: () => void,
    selectPage: (page: number) => void,
}
const UiPaginate = ({
                                                   lastPage,
                                                   firstPage,
                                                   showPages,
                                                   currentPage,
                                                   selectPage,
                                                   onHandleNextPage,
                                                   onHandlePrevPage,
                                               }:UiPaginateProps) => {
    return (
        <div className="ui-paginate">
            <UiImage src={prevPageArrow} onClick={onHandlePrevPage} className="ui-paginate__prev-page"/>
            {firstPage + 4 < currentPage && (<>
                <div className="ui-paginate__first-page"
                     onClick={() => selectPage(firstPage)}
                >{firstPage}</div>
                {currentPage > 3 && (<UiImage src={paginateDotsIcon} className="ui-paginate__dots"/>)}
            </>)}
            <div className="ui-paginate__show-pages">
                {showPages.map((page) => (
                    <div key={page}
                         onClick={() => selectPage(page)}
                         className={`ui-paginate__show-page ${currentPage === page ?
                             `ui-paginate__show-page_current` : ''}`}>{page}</div>
                ))}
            </div>
            {currentPage + 4 < lastPage && (
                <UiImage src={paginateDotsIcon} className="ui-paginate__dots"/>
            )}
            {currentPage + 4 < lastPage && (<div className="ui-paginate__last-page"
                                                 onClick={() => selectPage(lastPage)}
            >{lastPage}</div>)}
            <UiImage src={nextPageArrow} onClick={onHandleNextPage} className="ui-paginate__next-page"/>
        </div>
    );
};

export default UiPaginate;