import { FC, ReactElement } from "react";
import style from "./style.module.css";
import { CellProps } from "./props";

const Cell: FC<CellProps> = ({
  isAirplane,
  showOutcome,
  onClickCell,
}): ReactElement => {
  const getOutcome = () => {
    if (!showOutcome) {
      return;
    }

    return isAirplane ? (
      <img
        src="/plane-up-solid.svg"
        alt="airplane"
        className={`${style.icon} ${style.airplaneIcon}`}
      />
    ) : (
      <img src="/circle-xmark-solid.svg" alt="xmark" className={style.icon} />
    );
  };

  return (
    <div className={style.cellContainer} onClick={onClickCell}>
      <div>{getOutcome()}</div>
    </div>
  );
};

export default Cell;
