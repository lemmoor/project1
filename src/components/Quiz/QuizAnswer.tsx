interface QuizAnswerProps {
  handleRadioChange: (isCorrect: boolean) => void;
  answerChosen: boolean;
  text: string;
  isCorrect: boolean;
  id: number;
}

function QuizAnswer({
  answerChosen,
  text,
  isCorrect,
  handleRadioChange,
  id,
}: QuizAnswerProps) {
  return (
    <div className="flex align-text-bottom gap-4 mt-4">
      <input
        type="radio"
        name={`radio-${id}`}
        className={`radio ${
          answerChosen ? (isCorrect ? 'radio-success' : 'radio-error') : ''
        } disabled:opacity-100 disabled:cursor-auto`}
        onChange={() => handleRadioChange(isCorrect)}
        disabled={answerChosen}
      />
      <p>{text}</p>
    </div>
  );
}

export default QuizAnswer;
