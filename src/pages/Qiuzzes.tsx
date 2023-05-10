import { useState } from 'react';
import QuizQuestionCard from '../components/Quiz/QuizQuestionCard';

function Quizzes() {
  const [qiuzOpen, setQuizOpen] = useState<'slang' | 'idiom'>('slang');
  const [points, setPoints] = useState(0);

  return (
    <main className="container p-4">
      <div className="btn-group mx-auto block w-fit">
        <button
          type="button"
          className={`btn ${qiuzOpen === 'slang' && 'btn-active'}`}
          onClick={() => setQuizOpen('slang')}
        >
          Slang
        </button>
        <button
          type="button"
          className={`btn ${qiuzOpen === 'idiom' && 'btn-active'}`}
          onClick={() => setQuizOpen('idiom')}
        >
          Idioms
        </button>
      </div>
      <section>
        <QuizQuestionCard setPoints={setPoints} id={0} />
        <QuizQuestionCard setPoints={setPoints} id={1} />
        <p>Your points: {points} </p>
      </section>
    </main>
  );
}

export default Quizzes;
