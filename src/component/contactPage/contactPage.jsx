/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contactPage.scss";
import ImageContact from "../../asset/images/contacct.png";
function ContactPage() {
  return (
    <div className="wrapper_contact">
      <div className="block_img">
        <img alt="" src={ImageContact} />
      </div>
      <div className="block_icon">
        <a
          href="https://www.facebook.com/dinhdung.gemini"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon className="icon" name="logo-facebook"></ion-icon>
        </a>
        <a href="https://m.me/dinhdung.gemini" target="_blank" rel="noreferrer">
          <ion-icon className="icon" name="mail-outline"></ion-icon>
        </a>
        <a
          href="https://www.instagram.com/gemini.ds/"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon className="icon" name="logo-instagram"></ion-icon>
        </a>
        <a>
          <ion-icon title={"abc"} className="icon" name="at-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
