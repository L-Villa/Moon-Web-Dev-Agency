import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/" exact>
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" exact>
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact>
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label contact-nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/audit" exact>
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>123 A Common St</li>
                <li>LA, California</li>
                <li>United States</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+1 (123) 555 0101</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
