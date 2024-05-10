import SwitchTheme from "./SwitchTheme";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <nav className="header-nav">
        <div className="header-nav-logo">
          <a href="#hero">
            <p>
              AndNik<strong className="logo-dot">.</strong>
            </p>
          </a>
        </div>

        <div className="header-nav-links">
          <ul className="header-nav-list">
            <li className="nav-list-item">
              <a href="#about">About </a>
            </li>
            <li className="nav-list-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-list-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-list-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        
        <div className="nav-buttons">
          <SwitchTheme></SwitchTheme>
        </div>
      </nav>
    </div>
  );
};

export default Header;
