import React from 'react';

function Header() {
  return (
    <div className="row justify-content-between header-item">
      <div className="p">
        <a href="/">
          <img className="header-img" src="./images/leafImg.png" href="/" />
        </a>
      </div>
      <div className="p-2">
        <a target="blank" href="https://twitter.com/UCSBGreenRoof"><i className="twitter-icon fab fa-twitter" /></a>
      </div>

      <div className="links-container">
        <a className="header-link" href="/about">About</a>
        <a className="header-link" href="/sign-petition">Petition</a>
      </div>
    </div>
  );
}

export default Header;
