import PageOverviewCard from './PageOverviewCard';
import vocabImg from '../assets/vocab-card-img.jpg';
import dictionaryImg from '../assets/dictionary-card-img.jpg';
import quizzImg from '../assets/quizz-card-img.jpg';
import idiomsImg from '../assets/idioms-card-img.jpg';

function PagesOverview() {
  return (
    <section className="p-4">
      <h2 className="font-bold text-center text-3xl my-8 md:text-5xl">
        Discover more
      </h2>
      <div className="flex items-center justify-center flex-col gap-6 flex-shrink md:flex-row md:max-xl:flex-wrap md:items-stretch ">
        <PageOverviewCard
          title="Vocabulary"
          text="Explore the differences between American and British English with this comprehensive guide to vocabulary variations."
          imgSrc={vocabImg}
          url="/vocabulary"
        />
        <PageOverviewCard
          title="Idioms"
          text="Discover popular English idioms and sayings with our fun and informative guide. Learn their meanings, origins, and how to use them in everyday conversation."
          imgSrc={idiomsImg}
          url="/idioms"
        />
        <PageOverviewCard
          title="Quizzes"
          text="Test your knowledge of English language with our entertaining quizzes. Challenge yourself and compete with your friends to see who's the ultimate language expert."
          imgSrc={quizzImg}
          url="/quizzes"
        />
        <PageOverviewCard
          title="Dictionary"
          text="Find the definitions and pronunciations of English words and phrases with our online dictionary."
          imgSrc={dictionaryImg}
          url="/dictionary"
        />
      </div>
    </section>
  );
}

export default PagesOverview;
