import { useContext, useState } from 'react';
import QuizQuestionCard from '../components/Quiz/QuizQuestionCard';
import { quizSlang } from '../components/Quiz/quiz1';
import { TranslationsContext } from '../context/translationsContext';

function Quizzes() {
  const [quizOpen, setQuizOpen] = useState<'slang' | 'idiom'>('slang');
  const [points, setPoints] = useState(0);
  const { currentLanguage } = useContext(TranslationsContext);
  const quiz1 = quizSlang[currentLanguage];

  return (
    <main className="container p-4">
      <div className="btn-group mx-auto block w-fit">
        <button
          type="button"
          className={`btn ${quizOpen === 'slang' && 'btn-active'}`}
          onClick={() => setQuizOpen('slang')}
        >
          Slang
        </button>
        <button
          type="button"
          className={`btn ${quizOpen === 'idiom' && 'btn-active'}`}
          onClick={() => setQuizOpen('idiom')}
        >
          Idioms
        </button>
      </div>
      <section>
        {quiz1.map((question) => {
          return (
            <QuizQuestionCard
              setPoints={setPoints}
              data={question}
              key={question.id}
            />
          );
        })}
        {/* <QuizQuestionCard setPoints={setPoints} id={1} /> */}
        <p>Your points: {points} </p>
      </section>
    </main>
  );
}

export default Quizzes;
