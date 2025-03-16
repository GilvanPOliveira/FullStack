import { useContext } from "react";
import { QuizContext } from "../data/quiz";
import "./home.css";


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <div id="centralizar">
      <h2>Bem-vindo ao</h2> 
      <p>One Quiz</p>
      <button id="home" onClick={() => dispatch({ type: "CHANGE_STAGE" })}> → </button>
      </div>
    </div>
  );
};

export default Welcome;
