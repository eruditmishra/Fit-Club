import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const menuHandler = () => {
    menuOpened === false ? setMenuOpened(true) : setMenuOpened(false);
  };
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="" />
      {menuOpened === false && mobile === true ? (
        <div className="hamburger-container" onClick={menuHandler}>
          <img src={Bars} className="hamburger" alt="" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link>
              <Link
                to="home"
                span={true}
                smooth={true}
                onClick={menuHandler}
                activeClass="active"
              >
                Home
              </Link>
            </Link>
          </li>
          <li onClick={menuHandler}>
            <Link to="programs" span={true} smooth={true} onClick={menuHandler}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" span={true} smooth={true} onClick={menuHandler}>
              Why Us
            </Link>
          </li>
          <li>
            <Link to="plans" span={true} smooth={true} onClick={menuHandler}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={menuHandler}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
