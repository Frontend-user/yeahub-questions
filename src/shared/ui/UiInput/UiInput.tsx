import "./UiInput.scss";

interface UiInputProps {
  value?: any;
  type?: string;
  placeholder?: string;
  className?: string;
  variant?: string;
  onChange: (v: any) => void;
}

const UiInput = ({ ...rest }: UiInputProps) => {
  return <input className="ui-input" {...rest} />;
};

export default UiInput;
