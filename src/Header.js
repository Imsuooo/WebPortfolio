import React from "react";
import { Link } from "react-scroll";
import "./style/header.css";

const Header = () => {

  return (
    <header id="header" className="header">
      <nav id="nav">
        <div className="container">
          <ul className="nav_area">
            <li>
              <Link
                to="main"
                spy={true}
                smooth={true}
                className="enFont portfolio"
              >
                <img src="./img/logo.png" className="logo" alt="logo"/>
              </Link>
            </li>
            <li>
              <ul className="menu">
                <li>
                  <Link
                    to="info"
                    spy={true}
                    smooth={true}
                    className="enFont menu_list"
                  >
                    <span>INFO</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="project01"
                    spy={true}
                    smooth={true}
                    className="enFont menu_list"
                  >
                    <span>FREITAG</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="project02"
                    spy={true}
                    smooth={true}
                    className="enFont menu_list"
                  >
                    <span>UNICEF</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="project03"
                    spy={true}
                    smooth={true}
                    className="enFont menu_list"
                  >
                    <span>MAEIL</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="more"
                    spy={true}
                    smooth={true}
                    className="enFont menu_list"
                  >
                    <span>MORE</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
