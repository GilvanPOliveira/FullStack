import { useContext, useEffect } from "react";
import { QuizContext } from "./data/quiz";
import Welcome from "./components/home";
import Question from "./components/questoes";
import GameOver from "./components/final";
import PickCategory from "./components/categoria";
import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
