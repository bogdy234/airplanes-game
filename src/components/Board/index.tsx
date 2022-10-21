import { FC, ReactElement } from "react";
import style from "./style.module.css";
import { BoardProps } from "./props";
import Cell from "../Cell";

const Board: FC<BoardProps> = ({ cells, onClickCell, size }): ReactElement => {
  return (
    <div
      className={style.boardContainer}
      style={{
        gridTemplateRows: `repeat(${size},81px)`,
        gridTemplateColumns: `repeat(${size},81px)`,
      }}
    >
      {cells.map((cell, index) => (
        <Cell
          isAirplane={cell.isAirplane}
          showOutcome={cell.showOutcome}
          key={`cell-${index}`}
          onClickCell={() => onClickCell(index)}
        />
      ))}
    </div>
  );
};

export default Board;
