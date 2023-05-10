import { useState } from 'react';
import QuizAnswer from './QuizAnswer';

interface QuizQuestionCardProps {
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  id: number;
}

function QuizQuestionCard({ setPoints, id }: QuizQuestionCardProps) {
  const [answerChosen, setAnswerChosen] = useState(false);
  const handleRadioChange = (isCorrect: boolean) => {
    setAnswerChosen(true);
    setPoints((prev) => (isCorrect ? prev + 1 : prev));
  };

  return (
    <div className="bg-base-300 mt-4 p-8 rounded-xl border-base-content border-opacity-50 border-2">
      <p className="text-center text-lg bold mb-4">Question?</p>
      <div className="form-control">
        <QuizAnswer
          answerChosen={answerChosen}
          text="answer 1"
          isCorrect={false}
          handleRadioChange={handleRadioChange}
          id={id}
        />
        <QuizAnswer
          answerChosen={answerChosen}
          text="answer 2"
          isCorrect
          handleRadioChange={handleRadioChange}
          id={id}
        />
        <QuizAnswer
          answerChosen={answerChosen}
          text="answer 3"
          isCorrect={false}
          handleRadioChange={handleRadioChange}
          id={id}
        />
      </div>
    </div>
  );
}

export default QuizQuestionCard;
