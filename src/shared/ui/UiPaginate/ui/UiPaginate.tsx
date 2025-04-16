import './UiPaginate.scss'
import prevPageArrow from 'icons/btn-arrow-left.svg'
import nextPageArrow from 'icons/btn-arrow-right.svg'
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import FirstPageBlock from "@/shared/ui/UiPaginate/ui/FirstPageBlock.tsx";
import LastPageBlock from "@/shared/ui/UiPaginate/ui/LastPageBlock.tsx";

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
                    }: UiPaginateProps) => {

    const threshold = 4
    const shouldShowFirstPageAndDots = firstPage + threshold < currentPage
    const shouldShowLastPageAndDots = currentPage + threshold < lastPage

    return (
        <div className="ui-paginate">
            <UiImage src={prevPageArrow} onClick={onHandlePrevPage} className="ui-paginate__prev-page"/>
            {shouldShowFirstPageAndDots && <FirstPageBlock firstPage={firstPage} selectPage={selectPage}/>}
            <div className="ui-paginate__show-pages">
                {showPages.map((showPage) => (
                    <div key={showPage}
                         onClick={() => selectPage(showPage)}
                         className={`ui-paginate__show-page ${currentPage === showPage && 'ui-paginate__show-page_current'}`}>{showPage}</div>
                ))}
            </div>

            {shouldShowLastPageAndDots && <LastPageBlock lastPage={lastPage} selectPage={selectPage}/>}

            <UiImage src={nextPageArrow} onClick={onHandleNextPage} className="ui-paginate__next-page"/>
        </div>
    );
};

export default UiPaginate;