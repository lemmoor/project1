import { useContext } from 'react';
import banner from '../assets/home-bg-banner.jpg';
import PagesOverview from '../components/PagesOverview';
import { TranslationsContext } from '../context/translationsContext';

function Home() {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <>
      <div
        className="hero h-[calc(100vh-5rem)]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content text-center text-neutral-content grid items-center">
          <h1 className="text-5xl font-bold mb-4">British vs American</h1>
          <p className="text-xl">{t.heroText}</p>
        </div>
        <div className="hero-overlay bg-opacity-65" />
      </div>
      <div className="container">
        <PagesOverview />
      </div>
    </>
  );
}

export default Home;
