import PageOverviewCard from './PageOverviewCard';
import vocabImg from '../assets/vocab-card-img.jpg';
import dictionaryImg from '../assets/dictionary-card-img.jpg';
import quizzImg from '../assets/quizz-card-img.jpg';
import idiomsImg from '../assets/idioms-card-img.jpg';
import { useContext } from 'react';
import { TranslationsContext } from '../context/translationsContext';

function PagesOverview() {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <section className="p-4">
      <h2 className="font-bold text-center text-3xl my-8 md:text-5xl">
        {t.discoverMore}
      </h2>
      <div className="flex items-center justify-center flex-col gap-6 flex-shrink md:flex-row md:max-xl:flex-wrap md:items-stretch ">
        <PageOverviewCard
          title={t.slang}
          text={t.discoverMoreCard0Text}
          imgSrc={vocabImg}
          url="/slang"
        />
        <PageOverviewCard
          title={t.idioms}
          text={t.discoverMoreCard1Text}
          imgSrc={idiomsImg}
          url="/idioms"
        />
        <PageOverviewCard
          title={t.quizzes}
          text={t.discoverMoreCard2Text}
          imgSrc={quizzImg}
          url="/quizzes"
        />
        <PageOverviewCard
          title={t.dictionary}
          text={t.discoverMoreCard3Text}
          imgSrc={dictionaryImg}
          url="/dictionary"
        />
      </div>
    </section>
  );
}

export default PagesOverview;
