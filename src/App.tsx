import { useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import style from "./globalStyle.module.css";

function App() {
  useEffect(() => {
    document.title = "Airplane Game";
  }, []);

  return (
    <div className={style.container}>
      <Game boardSize={5} />
    </div>
  );
}

export default App;
