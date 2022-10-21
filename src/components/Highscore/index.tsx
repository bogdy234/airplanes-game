import { FC, ReactElement, useEffect, useState } from "react";
import { Stats } from "../../types";
import { HighscoreProps } from "./props";
import style from "./style.module.css";

const Highscore: FC<HighscoreProps> = ({ onClickX }): ReactElement => {
  const [stats, setStats] = useState<Stats[]>([]);

  useEffect(() => {
    const highscores = JSON.parse(localStorage.getItem("highscores") || "[]");
    setStats(
      highscores.sort((a: Stats, b: Stats) => (a.strikes > b.strikes ? 1 : -1))
    );
  }, []);

  return (
    <div className={style.highscoreContainer}>
      <div className={style.content}>
        <div className={style.xButton} onClick={onClickX}>
          X
        </div>
        <h1>Highscore</h1>
        <div className={style.statsContainer}>
          {stats.map(({ date, duration, strikes }, index) => (
            <div className={style.stat} key={`highscore-${index}`}>
              <div>{index + 1}.</div>
              <div>
                <div> Date: {date.toString()}</div>
                <div> Duration: {duration}</div>
                <div> Strikes: {strikes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highscore;
