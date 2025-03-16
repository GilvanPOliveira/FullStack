import { useContext } from "react";
import { QuizContext } from "../data/quiz";
import "./categoria.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="categoria">
      <h1>1Q</h1>
      <h2>Escolha um tema:</h2>
      <div id="disciplinas">
        {quizState.questions.map((question) => (<button className="btn_disciplinas" onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>))}
      </div>
    </div>
  );
};

export default PickCategory;
