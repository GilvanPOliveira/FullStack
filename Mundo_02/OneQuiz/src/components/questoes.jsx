import React, { useContext, useState, useRef, useEffect } from "react";
import { QuizContext } from "../data/quiz";
import Option from "./opcoes";
import Clock from "./cronometro"; // Assuming "cronometro" is the Clock component
import "./questoes.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const [selectedAnswerCorrect, setSelectedAnswerCorrect] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const clockRef = useRef();

  const onSelectOption = (option) => {
    const isCorrect = currentQuestion.answer === option;
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
    setSelectedAnswerCorrect(isCorrect);
  };

  const handleContinue = () => {
    setSelectedAnswerCorrect(null);
    clockRef.current.resetClock();
    dispatch({ type: "CHANGE_QUESTION" });
  };

  const handleTimeUp = () => {
    if (selectedAnswerCorrect === null && !quizState.answerSelected) {
      dispatch({
        type: "TIME_UP",
        payload: { correctAnswer: currentQuestion.answer },
      });
      setSelectedAnswerCorrect("Tempo Esgotado");
    }
  };

  useEffect(() => {
    setSelectedAnswerCorrect(null);

    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      setButtonsVisible(false);
    };
  }, [quizState.currentQuestion]);

  useEffect(() => {
    if (quizState.answerSelected) {
      setButtonsVisible(false);
    }
  }, [quizState.answerSelected]);

  const renderAnswerStatus = () => {
    if (selectedAnswerCorrect !== null) {
      return (
        <p className="animo">
          {selectedAnswerCorrect === "Tempo Esgotado"
            ? "Tempo Esgotado"
            : selectedAnswerCorrect
            ? "Você acertou!"
            : "Você errou!"}
        </p>
      );
    }
    return null;
  };

  const renderNavigationButtons = () => {
    if (!quizState.answerSelected && !quizState.help && buttonsVisible) {
      return (
        <>
          {currentQuestion.tip && (
            <button
              className="btn_navegacao"
              onClick={() => dispatch({ type: "SHOW_TIP" })}
            >
              Dica
            </button>
          )}
          <button
            className="btn_navegacao"
            onClick={() => dispatch({ type: "REMOVE_OPTION" })}
          >
            Excluir uma alternativa
          </button>
        </>
      );
    } else if (quizState.answerSelected) {
      return (
        <button className="btn_navegacao" onClick={() => handleContinue()}>
          Continuar
        </button>
      );
    }
    return null;
  };

  const renderTipButton = () => {
    if (!quizState.answerSelected && quizState.help === "tip") {
      return <button className="dica">{currentQuestion.tip}</button>;
    }
    return null;
  };

  return (
    <div id="padrao">
      <div id="sair" onClick={() => dispatch({ type: "NEW_GAME" })}>
        <p title="Sair">Encerrar</p>
      </div>
      <div>{renderAnswerStatus()}</div>
      <div id="questoes">
        <div id="titulo">
          <p
            title={`${quizState.currentQuestion + 1} pergunta(s) de ${
              quizState.questions.length
            }`}
          >
            {quizState.score + " ponto(s)"}
          </p>
          <h1
            onClick={() => dispatch({ type: "NEW_GAME" })}
            title="Página inicial"
          >
            1Q
          </h1>
          <p title="Cronômetro">
            <Clock ref={clockRef} onTimeUp={handleTimeUp} />
          </p>
        </div>
        <h2>{currentQuestion.question}</h2>
        <div id="box">
          <div id="respostas">
            {currentQuestion.options.map((option) => (
              <Option
                option={option}
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
                hide={quizState.optionToHide === option ? "hide" : null}
              />
            ))}
          </div>
        </div>
        <div id="navegacao">{renderNavigationButtons()}</div>
      </div>
      <div>{renderTipButton()}</div>
    </div>
  );
};

export default Question;
