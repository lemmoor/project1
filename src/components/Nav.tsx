import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TranslationsContext } from '../context/translationsContext';
import SelectLanguage from './SelectLanguage';

function Nav() {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <nav className="navbar bg-base-300 py-4">
      <div className="container sm:flex">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            British vs American
          </NavLink>
        </div>
        <div className="sm:flex-none max-sm:dropdown order-2 sm:order-none">
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
              <NavLink to="/vocabulary">{t.slang}</NavLink>
            </li>
            <li>
              <NavLink to="/idioms">{t.idioms}</NavLink>
            </li>
            <li>
              <NavLink to="/quizzes">{t.quizzes}</NavLink>
            </li>
            <li>
              <NavLink to="/dictionary">{t.dictionary}</NavLink>
            </li>
          </ul>
        </div>
        <SelectLanguage />
      </div>
    </nav>
  );
}

export default Nav;
