import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import { convertMsToTime, getCells } from "../../utils";
import style from "./style.module.css";
import Board from "../Board";
import { GameProps } from "./props";
import { CellContent } from "../../types";
import Highscore from "../Highscore";

const Game: FC<GameProps> = ({ boardSize = 5 }): ReactElement => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [cells, setCells] = useState<CellContent[]>([]);
  const [strikes, setStrikes] = useState<number>(0);
  const [showHighscore, setShowHighscore] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const initTable = useCallback(() => {
    setStartDate(new Date());
    setCells(getCells(boardSize));
    setGameStarted(true);
  }, [boardSize]);

  useEffect(() => {
    if (gameStarted) {
      return;
    }
    initTable();
  }, [gameStarted, initTable]);

  const onClickCell = (index: number) => {
    if (strikes > 0) {
      return;
    }

    setCells(
      cells.map((cell, idx) =>
        index === idx ? { ...cell, showOutcome: true } : cell
      )
    );

    if (cells[index].isAirplane) {
      // +1 because we are counting the current click
      const currentStrikes =
        cells.reduce((acc, cell) => (cell.showOutcome ? acc + 1 : acc), 0) + 1;

      const durationInMs = Math.abs(new Date().getTime() - startDate.getTime());
      const highscores = JSON.parse(localStorage.getItem("highscores") || "[]");

      localStorage.setItem(
        "highscores",
        JSON.stringify([
          ...highscores,
          {
            strikes: currentStrikes,
            duration: convertMsToTime(durationInMs),
            date: new Date().toLocaleDateString(),
          },
        ])
      );
      setStrikes(currentStrikes);
    }
  };

  const onClickRestart = () => {
    initTable();
    setGameStarted(false);
    setStrikes(0);
  };

  const toggleHighscore = () => {
    setShowHighscore(!showHighscore);
  };

  return (
    <div className={style.gameContainer}>
      <div className={style.gameHeader}>
        <img
          src="/trophy-solid.svg"
          alt="trophy"
          className={style.trophyImage}
          onClick={toggleHighscore}
        />
      </div>
      <Board cells={cells} onClickCell={onClickCell} size={boardSize} />
      {strikes > 0 && (
        <>
          <p className={style.winText}>You won!</p>
          <button
            type="button"
            className={style.button}
            onClick={onClickRestart}
          >
            Play again
          </button>
          <p>Strikes: {strikes}</p>
        </>
      )}
      {showHighscore && <Highscore onClickX={toggleHighscore} />}
    </div>
  );
};

export default Game;
