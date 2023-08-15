import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Header.scss";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState("");
  const [navColor, setNavColor] = useState("");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__logo">
            <NavLink to="/">
              <img className="site__logo" src={Logo} alt="" />
            </NavLink>
          </div>
          <nav className="header__links">
            <NavLink
              className={`nav__links ${navColor === "home" ? "active" : " "}`}
              onClick={() => setNavColor("home")}
              to="/"
            >
              {t("home")}
            </NavLink>
            <NavLink
              className={`nav__links ${navColor === "about" ? "active" : " "}`}
              onClick={() => setNavColor("about")}
              to="/about"
            >
              {t("about")}
            </NavLink>
            <NavLink
              className={`nav__links ${
                navColor === "services" ? "active" : " "
              }`}
              onClick={() => setNavColor("services")}
              to="/services"
            >
              {t("services")}
            </NavLink>
          </nav>
          <div className="header__contacts">
            <div>
              <i class="fa-solid fa-phone fa-shake"></i>
              <a href="tel:+998903509948" target="_blank">
                +998 (90) 350 99 48
              </a>
            </div>
            <div>
              <i class="fa-regular fa-envelope fa-shake"></i>
              <a href="mailto:networkls@mail.ru" target="_blank">
                networkls@mail.ru
              </a>
            </div>
          </div>
          <div className="header__language">
            <span className="line"></span>
            <button
              className={`en__btn ${color === "en" ? "active" : " "}`}
              onClick={() => {
                changeLanguage("en");
                setColor("en");
              }}
            >
              ENG
            </button>
            <button
              className={`uz__btn ${color === "uz" ? "active" : " "}`}
              onClick={() => {
                changeLanguage("uz");
                setColor("uz");
              }}
            >
              O'Z
            </button>
            <button
              className={`ru__btn ${color === "ru" ? "active" : " "}`}
              onClick={() => {
                changeLanguage("ru");
                setColor("ru");
              }}
            >
              РУСС
            </button>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
