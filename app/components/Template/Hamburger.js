import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // eslint-disable-next-line no-console
    console.log('Hello');
    setOpen(!open);
  };

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={handleOpen} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={handleOpen} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Menu right isOpen={open}>
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label}>
              <Link to={l.path} onClick={handleOpen}>
                <h3 className={l.index && 'index-li'}>{l.label}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default Hamburger;
