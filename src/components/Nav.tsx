import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar bg-base-300 py-4">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          British vs American
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/words">Words</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/dict">Dictionary</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
