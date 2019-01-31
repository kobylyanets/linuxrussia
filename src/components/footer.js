import React from 'react';

const Footer = () => {
  return (
    <footer className="footer has-text-white has-background-info">
      <div className="content has-text-centered">
        <p>
          &copy; LinuxRussia.com, 2013 - {new Date().getFullYear()}. Все права
          защищены.
        </p>
        <p>
          <span className="has-text-weight-bold">Ubuntu</span> is a registered
          trademark of{' '}
          <span className="has-text-weight-bold">Canonical Inc</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
