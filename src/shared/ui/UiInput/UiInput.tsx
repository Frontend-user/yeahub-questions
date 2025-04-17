import "./UiInput.scss";

interface UiInputProps {
  value?: string | number;
  type?: string;
  placeholder?: string;
  className?: string;
  variant?: string;
}

const UiInput = ({ ...rest }: UiInputProps) => {
  return <input className="ui-input" {...rest} />;
};

export default UiInput;
