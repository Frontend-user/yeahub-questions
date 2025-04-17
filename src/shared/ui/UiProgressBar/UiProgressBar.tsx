import classes from "./UiProgressBar.module.scss";
import { useLayoutEffect, useRef } from "react";

interface PropsUiProgressBar {
  title: string;
  allCount: number;
  passedCount: number;
}

const UiProgressBar = ({ title, allCount, passedCount }: PropsUiProgressBar) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (progressRef.current) {
      const filledPercent = Math.round((passedCount * 100) / allCount);
      progressRef.current.style.setProperty("width", `${filledPercent}%`);
    }
  }, [passedCount, allCount]);

  return (
    <div className={classes.uiProgressBar}>
      <div className={classes.inner}>
        <div className={classes.header}>
          <div className={classes.title}>{title}</div>
          <div className={classes.progressCount}>
            {passedCount}/{allCount}
          </div>
        </div>
        <div className={classes.uiProgressWrap}>
          <div ref={progressRef} className={classes.uiProgressFill}></div>
        </div>
      </div>
    </div>
  );
};

export default UiProgressBar;
