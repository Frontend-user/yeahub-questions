import classes from "./UiCounter.module.scss";

interface PropsUiCounter {
  label?: string;
  value: number;
  increment: () => void;
  decrement: () => void;
}

const UiCounter = ({ label, value, increment, decrement }: PropsUiCounter) => {
  return (
    <div className={classes.uiCounter}>
      <div className={classes.label}>{label}</div>
      <div className={classes.block}>
        <div className={classes.blockInner}>
          <div className={classes.minusButton} onClick={decrement}></div>
          <div className={classes.value}>{value}</div>
          <div className={classes.plusButton} onClick={increment}></div>
        </div>
      </div>
    </div>
  );
};

export default UiCounter;
