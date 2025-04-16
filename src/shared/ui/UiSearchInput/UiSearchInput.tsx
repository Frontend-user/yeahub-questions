import "./UiSearchInput.scss";
import searchIcon from "icons/search-icon.svg";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import { ChangeEvent } from "react";

type UiSearchInputProps = {
  onChange: (newValue: string) => void;
  value?: string | number;
};

const UiSearchInput = ({ onChange, value }: UiSearchInputProps) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <div className="ui-input-search">
      <div className="ui-input-search__inner">
        <UiImage src={searchIcon} className="ui-input-search__icon" />
        <input
          value={value}
          onChange={onHandleChange}
          className="ui-input-search__field"
          placeholder="Введите запрос"
          type="text"
        />
      </div>
    </div>
  );
};

export default UiSearchInput;
