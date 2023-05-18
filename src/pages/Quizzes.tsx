import { useContext, useEffect, useState } from 'react';
import QuizQuestionCard from '../components/Quiz/QuizQuestionCard';
import { quizSlang } from '../components/Quiz/quizSlang';
import { TranslationsContext } from '../context/translationsContext';
import { quizIdioms } from '../components/Quiz/quizIdioms';

function Quizzes() {
  const [quizOpen, setQuizOpen] = useState<'slang' | 'idiom'>('slang');
  const [points, setPoints] = useState(0);
  const { currentLanguage } = useContext(TranslationsContext);
  const quizS = quizSlang[currentLanguage];
  const quizI = quizIdioms[currentLanguage];

  useEffect(() => {
    setPoints(0);
  }, [quizOpen]);

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
        {quizOpen == 'slang'
          ? quizS.map((question) => {
              return (
                <QuizQuestionCard
                  setPoints={setPoints}
                  data={question}
                  key={question.id}
                />
              );
            })
          : quizI.map((question) => {
              return (
                <QuizQuestionCard
                  setPoints={setPoints}
                  data={question}
                  key={question.id}
                />
              );
            })}
        <p>Your points: {points} </p>
      </section>
    </main>
  );
}

export default Quizzes;
