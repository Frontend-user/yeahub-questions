import './UiTag.scss'

interface UiTagProps {
    label: string
    value: string | number
}

const UiTag = ({label, value}: UiTagProps) => {
    return (
        <div className="ui-tag">
            <div className="ui-tag__inner">
                <div className="ui-tag__label">{label}:</div>
                <div className="ui-tag__value">{value}</div>
            </div>
        </div>
    );
};

export default UiTag;