import React, { useEffect, useState } from "react";

import "./mainPage.scss";

function MainPage() {
  const [isIntro, setIsIntro] = useState(true);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHome(false);
    }, 4000);
    setTimeout(() => {
      setIsIntro(false);
    }, 4400);
  }, []);
  return (
    <div className="wrapper">
      <div className="home-wrapper">
        <h1>Welcome to my blog</h1>
        {!isHome && (
          <video className="video home" autoPlay loop muted>
            <source src="https://hoang.moe/wp-content/themes/degamin/dist/public/video/02_HomeLoop.h264.m4v" />
          </video>
        )}

        {isIntro && (
          <video className="video intro" autoPlay muted>
            <source src="https://hoang.moe/wp-content/themes/degamin/dist/public/video/01_Intro.h264.m4v" />
          </video>
        )}
      </div>
      {/* <div className="infor">
        <h2 onClick={showInformation}>my information</h2>
        <div class="lds-dual-ring"></div>
      </div> */}
      {/* <button onClick={handleClickkkk}>click me</button> */}
    </div>
  );
}

export default MainPage;
