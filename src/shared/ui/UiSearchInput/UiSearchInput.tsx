import "./UiSearchInput.scss";
import searchIcon from "icons/search-icon.svg";
import UiImage from "@/shared/ui/UiImage/UiImage.tsx";
import { ChangeEvent, InputHTMLAttributes } from "react";

type UiSearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (newValue: string) => void;
  value?: string | number;
};

const UiSearchInput = ({ onChange, value }: UiSearchInputProps) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <div className="ui-input">
      <div className="ui-input__inner">
        <UiImage src={searchIcon} className="ui-input__icon" />
        <input
          value={value}
          onChange={onHandleChange}
          className="ui-input__field"
          placeholder="Введите запрос"
          type="text"
        />
      </div>
    </div>
  );
};

export default UiSearchInput;
