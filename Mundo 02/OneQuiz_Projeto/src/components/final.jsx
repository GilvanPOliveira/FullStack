import { useContext } from "react";
import { QuizContext } from "../data/quiz";
import "./final.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="final">
      <h1>1Q</h1>
      <h2>Parabéns</h2>
      <p>Você acertou {quizState.score} de {quizState.questions.length}.
      </p>
      <p>Pontuação : {quizState.score} ponto(s)</p>
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Página inicial</button>
      </div>
  );
};

export default GameOver;
