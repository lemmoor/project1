import { Link } from 'react-router-dom';

type PageOverviewCardProps = {
  title: string;
  text: string;
  imgSrc: string;
  url: string;
};

function PageOverviewCard({ title, text, imgSrc, url }: PageOverviewCardProps) {
  return (
    <div className="card card-bordered w-96 bg-base-300 shadow-xl">
      <figure>
        <img
          src={imgSrc}
          alt=""
          className="max-h-72 object-cover object-bottom w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link to={url} className="btn btn-primary mt-3">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageOverviewCard;
