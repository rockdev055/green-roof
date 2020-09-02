import React from 'react';

function Header() {
  return (
    <div className="row justify-content-between header-item">
      <div className="pl-3">
        <a href="/">
          <img className="header-img" src="./images/leafImg.png" href="/" />
        </a>
      </div>
      <div></div>
      <div className="mr-3 dropdown-menu-head">
        <a className="header-link" href="/sign-petition">Sign Here</a>
      </div>
    </div>
  );
}

export default Header;
