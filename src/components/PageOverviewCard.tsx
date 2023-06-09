import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TranslationsContext } from '../context/translationsContext';

type PageOverviewCardProps = {
  title: string;
  text: string;
  imgSrc: string;
  url: string;
};

function PageOverviewCard({ title, text, imgSrc, url }: PageOverviewCardProps) {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <div className="card card-bordered bg-base-300 shadow-xl w-full max-w-sm">
      <figure>
        <img
          src={imgSrc}
          alt=""
          className=" object-cover max-h-56 object-bottom w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link to={url} className="btn btn-primary mt-3">
            {t.learnMore}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageOverviewCard;
