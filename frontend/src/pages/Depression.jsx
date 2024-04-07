
import React, { useState } from 'react';

const Depression = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  const handlePrevious = () => {
    setCurrIndex(currIndex => Math.max(0, currIndex - 1));
  };

  const handleNext = () => {
    setCurrIndex(currIndex => Math.min(questions.length - 1, currIndex + 1));
  };

  const handleOptionSelect = (event) => {
    const selectedAnswer = event.target.value;
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const handleSubmit = () => {
    setUserAnswers(userAnswers => [...userAnswers]); // Ensuring all questions are answered
    const newScore = userAnswers.reduce((acc, answer, index) => {
      if (answer === questions[index].answer) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    setScore(newScore);
  };

  return (
    <div className="App">
      <section className="container" style={{ /* container styles */ }}>
        <p className="question" style={{ /* question styles */ }}>{questions[currIndex].question}</p>
        <form className="options">
          {questions[currIndex].options.map((option, index) => (
            <div className="option" key={index}>
              <input
                type="radio"
                id={option}
                value={option}
                name="common"
                checked={userAnswers[currIndex] === option}
                onChange={handleOptionSelect}
              />
              <label htmlFor={option} style={{ /* option label styles */ }}>{option}</label>
            </div>
          ))}
        </form>
        <div className="control" style={{ /* control styles */ }}>
          <div>
            <button className="left arrow" onClick={handlePrevious}><img src="assets/left.png" alt="" /></button>
            <span className="number">{`${currIndex + 1}/${questions.length}`}</span>
            <button className="right arrow" onClick={handleNext}><img src="assets/right.png" alt="" /></button>
          </div>
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </section>
      <div className="result" style={{ display: score !== null ? 'block' : 'none', /* result container styles */ }}>
        <div className="score" style={{ /* score container styles */ }}>
          {score}/10
        </div>
        <span>Your Score</span>
      </div>
    </div>
  );
}

export default Depression;
