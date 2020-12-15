import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img
          style={{ borderRadius: '0px' }}
          src={`/images/me_icon.jpg`}
          alt=""
        />
      </Link>
      <header>
        <h2>Rohit V&apos;Pratti</h2>
        <p>
          <a href="mailto:rohit.pratti@gmail.com">rohit.pratti@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Rohit. I am a software engineering professional equipped
        with technical abilities and decisive nature necessary for successful
        Responsive Web Application and SaaS tools development. My most recent
        employment was at{' '}
        <a href="https://cabana.life" target="_blank" rel="noopener noreferrer">
          Cabana
        </a>{' '}
        Where I worked as a junior developer building them Dashboards and a
        Marketing website
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Resume
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Rohit Pratti <Link to="/">rohitpratti.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
