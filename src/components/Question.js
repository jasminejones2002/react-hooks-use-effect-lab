import React, { useEffect ,useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    console.log("useEffect triggered")
    const timer = setTimeout(() => {
      console.log("Timer expired")
      if (timeRemaining === 0) {
        setTimeRemaining(10)
        console.log("the time is 0")
        onAnswered(false)
      } else {
        setTimeRemaining((time) => time - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeRemaining, onAnswered])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
