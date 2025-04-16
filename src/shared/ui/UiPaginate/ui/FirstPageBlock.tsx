import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import paginateDotsIcon from "icons/paginate-dots.svg";
import "./UiPaginate.scss";

interface FirstPageBlockProps {
  firstPage: number;
  selectPage: (page: number) => void;
}

const FirstPageBlock = ({ firstPage, selectPage }: FirstPageBlockProps) => {
  const handleClick = () => selectPage(firstPage);

  return (
    <>
      <div className="ui-paginate__first-page" onClick={handleClick}>
        {firstPage}
      </div>
      <UiImage src={paginateDotsIcon} className="ui-paginate__dots" />
    </>
  );
};

export default FirstPageBlock;
