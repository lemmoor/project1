import { useContext } from 'react';
import { TranslationsContext } from '../context/translationsContext';

interface FooterProps {
  sourcesLinks: {
    title: string;
    link: string;
  }[];
}

function Footer({ sourcesLinks }: FooterProps) {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">{t.Sources}</span>
        {sourcesLinks.map((source, i) => {
          return (
            <a
              className="link link-hover"
              href={source.link}
              target="_blank"
              key={i}
            >
              {source.title}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
