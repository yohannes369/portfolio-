import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import FaBars from react-icons/fa
import { HiX } from "react-icons/hi"; // Import HiX from react-icons/hi
import { Link } from "react-scroll"; // Use react-scroll for smooth scrolling
import Jo from "../../images/jo.png";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "home",
  },
  {
    label: "ABOUT ME",
    to: "about",
  },
  {
    label: "SKILLS",
    to: "skills",
  },
  {
    label: "RESUME",
    to: "resume",
  },
  {
    label: "CONTACT",
    to: "contact",
  },
];

const Navbar = ({ scrollToSection }) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="home" smooth={true} duration={500} className="navbar__container__logo">
          <img src={Jo} alt="Logo" style={{ width: 80, height: 80, borderRadius: 25 }} />
        </Link>
      </div>
      <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
        {data.map((item, key) => (
          <li key={key} className="navbar__container__menu__item">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="navbar__container__menu__item__links"
              onClick={() => {
                setToggleIcon(false); // Close the mobile menu on link click
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-icon" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;