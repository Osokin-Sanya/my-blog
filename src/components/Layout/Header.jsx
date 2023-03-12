import React from "react";
import photo from "../../images/avtor.jpg";
import Instagram from "../../images/InstagramSocial.svg";

import "./Layout.scss";

export default function Header() {
  return (
    <div className="header">
      <a href="https://www.instagram.com/osok1ns/" className="link_instagram">
        <img className="icon" src={Instagram} />
        <div className="instagram_profile">Osok1ns</div>
      </a>

      <div className="header_title">Блог Александра Осокина</div>
      <img className="photo" src={photo} />
    </div>
  );
}
