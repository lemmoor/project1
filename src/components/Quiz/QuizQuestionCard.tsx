import { useState } from 'react';
import QuizAnswer from './QuizAnswer';

interface Question {
  id: number;
  question: string;
  answers: {
    id: number;
    answer: string;
    isCorrect: boolean;
  }[];
}

interface QuizQuestionCardProps {
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  data: Question;
}

function QuizQuestionCard({ setPoints, data }: QuizQuestionCardProps) {
  const [answerChosen, setAnswerChosen] = useState(false);
  const handleRadioChange = (isCorrect: boolean) => {
    setAnswerChosen(true);
    setPoints((prev) => (isCorrect ? prev + 1 : prev));
  };

  return (
    <div className="bg-base-300 mt-6 p-10 rounded-xl border-base-content border-opacity-50 border-2 max-w-2xl mx-auto">
      <p className="text-center text-lg font-medium mb-4">{data.question}</p>
      <div className="form-control">
        {data.answers.map((a) => {
          return (
            <QuizAnswer
              key={a.id}
              isCorrect={a.isCorrect}
              answerChosen={answerChosen}
              radioId={data.id}
              handleRadioChange={handleRadioChange}
              text={a.answer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuizQuestionCard;
