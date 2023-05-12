import { useEffect, useState } from 'react';
import enTranslations from '../locales/en.json';
import plTranslations from '../locales/pl.json';
import { TranslationsContext } from '../context/translationsContext';

function TranslationsProvider({ children }: React.PropsWithChildren) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const translations = {
    en: enTranslations,
    pl: plTranslations,
  };

  useEffect(() => {
    const userLanguage = navigator.language.substring(0, 2);
    setCurrentLanguage(userLanguage);
  }, []);

  return (
    <TranslationsContext.Provider
      value={{ currentLanguage, translations, setCurrentLanguage }}
    >
      {children}
    </TranslationsContext.Provider>
  );
}

export default TranslationsProvider;
