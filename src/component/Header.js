import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleActive = (params) => {
    return params.isActive ? "active-item" : "";
  };
  return (
    <header className="header">
      <ul className="ulheader">
        <li>
          <NavLink to="/" className={handleActive}>
            <h3>All</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" className={handleActive}>
            <h3>Active</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" className={handleActive}>
            <h3>Completed</h3>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
