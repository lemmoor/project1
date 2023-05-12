import { useContext } from 'react';
import { TranslationsContext } from '../context/translationsContext';
import flagPL from './../assets/Flag_of_Poland.svg';
import flagUK from './../assets/Flag_of_the_United_Kingdom.svg';

function SelectLanguage() {
  const { currentLanguage, setCurrentLanguage } =
    useContext(TranslationsContext);
  return (
    <div className="dropdown dropdown-end order-1 sm:order-none">
      <label tabIndex={0} className="btn btn-circle">
        <img
          className="rounded-full w-3/4 h-3/4 object-cover"
          src={currentLanguage == 'pl' ? flagPL : flagUK}
          alt="selected language flag"
        />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-30 mt-3"
      >
        <li className="mb-1">
          <a
            className={currentLanguage == 'en' ? 'bg-primary' : ''}
            onClick={() => {
              setCurrentLanguage('en');
            }}
          >
            EN
          </a>
        </li>
        <li>
          <a
            className={currentLanguage == 'pl' ? 'bg-primary' : ''}
            onClick={() => {
              setCurrentLanguage('pl');
            }}
          >
            PL
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SelectLanguage;
