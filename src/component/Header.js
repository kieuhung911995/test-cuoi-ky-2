import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleActive = (params) => {
    return params.isActive ? "active-item" : "";
  };
  return (
    <header>
      <ul className="header">
        <li>
          <NavLink to="/" className={handleActive}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" className={handleActive}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" className={handleActive}>
            Completed
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
