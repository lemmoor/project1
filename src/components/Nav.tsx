import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TranslationsContext } from '../context/translationsContext';

function Nav() {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];
  return (
    <nav className="navbar bg-base-300 py-4">
      <div className="container">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            British vs American
          </NavLink>
        </div>
        <div className="sm:flex-none max-sm:dropdown">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/no-noninteractive-tabindex */}
          <label tabIndex={0} className="btn btn-ghost btn-circle sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul className="menu sm:menu-horizontal px-2 max-sm:p-3 max-sm:mt-3 gap-2 menu-compact dropdown-content right-0 max-sm:bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/vocabulary">{t.vocabulary}</NavLink>
            </li>
            <li>
              <NavLink to="/idioms">Idioms</NavLink>
            </li>
            <li>
              <NavLink to="/quizzes">Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/dictionary">Dictionary</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
