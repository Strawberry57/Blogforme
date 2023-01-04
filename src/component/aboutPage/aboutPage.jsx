import React from "react";
import "./aboutPage.scss";
import avatar from "../../../src/asset/images/avatar.jpg";
import imgGif from "../../../src/asset/images/imgGif.gif";
function AboutPage() {
  return (
    <>
      <div className="aboutPage">
        <div className="inforPage">
          <div className="detail-box">
            <div>Name:</div>
            <span>Đinh Sỹ Dũng</span>
          </div>
          <div className="detail-box">
            <div>Date of birth:</div>
            <span>25-05-****</span>
          </div>
          <div className="detail-box">
            <div>Hometown:</div>
            <span>Bắc Ninh</span>
          </div>
          <div className="detail-box">
            <div>Realationship:</div>
            <span>****</span>
          </div>
        </div>
        <div className="imagePage">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="introMe">
        <p>
          Hi! I'm<span className="namePage"> Dinh Sy Dung</span>. I currently
          work full-time as a<span> Software Engineer</span>, and I build
          open-source projects for fun. I taught myself how to make websites
          first as a hobby and later as a professional programmer
        </p>
      </div>
      <div className="gif">
        <img src={imgGif} alt="" />
      </div>
    </>
  );
}

export default AboutPage;
