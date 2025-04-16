import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import paginateDotsIcon from "icons/paginate-dots.svg";
import './UiPaginate.scss'

interface LastPageBlockProps {
    lastPage:number;
    selectPage: (page: number) => void;
}

const LastPageBlock = ({lastPage, selectPage}:LastPageBlockProps) => {

    const handleClick = () => selectPage(lastPage)

    return (<>
        <UiImage src={paginateDotsIcon} className="ui-paginate__dots"/>
        <div className="ui-paginate__last-page"
             onClick={handleClick}
        >{lastPage}</div>
    </>)
};

export default LastPageBlock;