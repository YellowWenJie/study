import './DetailsRelated.scss';
import { Link } from 'react-router-dom';
interface Iprops {
  buttonName?: string;
  linkItems: {
    title: string;
    link: string;
  }[];
  assign: string;
}

export default function DetailsRelated(props: Iprops) {
  const { buttonName, linkItems, assign } = props;

  return (
    <aside className="app-related-items related">
      <h2 className="govuk-heading-m">What you can do next</h2>
      <nav
        role="navigation"
        aria-labelledby="what-you-can-do-next"
        className="govuk-list"
      >
        {linkItems.map(({ title, link }) => (
          <li key={link}>
            <Link to={link} className="govuk-link">
              {title}
            </Link>
          </li>
        ))}
      </nav>
      {buttonName && (
        <div className="govuk-!-margin-top-9">
          <div className="govuk-button-group">
            <a href={assign}>
              <button className="govuk-button" data-module="govuk-button">
                {buttonName}
              </button>
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}
