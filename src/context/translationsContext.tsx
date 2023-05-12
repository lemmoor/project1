import { createContext } from 'react';
import enTranslations from '../locales/en.json';
import plTranslations from '../locales/pl.json';

interface Translations {
  [key: string]: typeof enTranslations;
}

interface TranslationsContext {
  currentLanguage: string;
  translations: Translations;
  setCurrentLanguage: (language: string) => void;
}

export const TranslationsContext = createContext<TranslationsContext>({
  currentLanguage: '',
  translations: { en: enTranslations, pl: plTranslations },
  setCurrentLanguage: () => {},
});
