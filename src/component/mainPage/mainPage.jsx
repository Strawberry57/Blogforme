import React, { useEffect, useState } from "react";
import AboutPage from "../aboutPage/aboutPage";
import ContactPage from "../contactPage/contactPage";
// import Cursor from "../cursor/cursor";
import InforPage from "../inforPage/inforPage";
import MyAlbum from "../myAlbum/myAlbum";
import AudioPlayer from "react-h5-audio-player";
import IsYou from "../../asset/song/La-Anh-Mong-Nhien.mp3";
import MissYou from "../../asset/song/Danh-Mat-Em-Tinh-Lung.mp3";
import CauseOfYou from "../../asset/song/Chi-Vi-Qua-Yeu-Anh-Dinh-Phu-Ni.mp3";
import newVideo from "../../asset/video/introMp4.mp4";
import mainVideo from "../../asset/video/main.m4v";

import "./mainPage.scss";
import MobileInfor from "../mobileInfor/mobileInfor";

function MainPage() {
  const [isIntro, setIsIntro] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [isClick, setIsClick] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [backRight, setBackRight] = useState(false);
  const [page, setPage] = useState("about");
  const [pageMobile, setPageMobile] = useState("");

  const [nameMusic, setNameMusic] = useState("Là Anh (是你)");
  const [indexMS, setIndexMS] = useState(0);
  const [linkOr, setLinkOr] = useState(IsYou);
  const listMusic = [
    {
      name: "Là Anh (是你)",
      singer: "Mộng Nhiên",
      link: `${IsYou}`,
      img: "https://i.ytimg.com/vi/ZrOsnRvcTXU/maxresdefault.jpg",
    },
    {
      name: "Chỉ Vì Quá Yêu Anh / 只是太爱你",
      singer: "Đinh Phù Ni",
      link: `${CauseOfYou}`,
      img: "https://avatar-ex-swe.nixcdn.com/song/2019/05/28/1/a/6/2/1559010897624_640.jpg",
    },
    {
      name: "Đánh Mất Em / 丢了你",
      singer: "Tỉnh Lung",
      link: `${MissYou}`,
      img: "https://1.bp.blogspot.com/-dGkFI9zy8k4/YFi5v9Sj0TI/AAAAAAAAPqM/nlqX0jL9uxoAO2zX4-Vfzjxjmaio_lTKACLcBGAsYHQ/s16000/T002R300x300M000001KNNDJ21bqSa.jpg",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setIsHome(false);
    }, 4200);
    setTimeout(() => {
      setIsIntro(false);
    }, 4400);
  }, []);
  const clickFnc = (isClickFnc) => {
    setIsClick(isClickFnc);
  };
  const rightFnc = (isRightFnc) => {
    setIsRight(isRightFnc); // false -> click -> true
  };
  const backRightFnc = (isBackRightFnc) => {
    if (isRight) {
      setBackRight(isBackRightFnc); // true -> false -> click -> false -> true
    }
  };
  const InforPageFnc = (inforPageFnc) => {
    setPage(inforPageFnc);
  };
  const handleChangeMusic = (item, index) => {
    setLinkOr(item.link);
    setNameMusic(item.name);
    setIndexMS(index);
  };
  const handleNextMusic = () => {
    let newIndex = indexMS;
    if (indexMS >= listMusic.length - 1) {
      newIndex = -1;
    }
    setLinkOr(listMusic[newIndex + 1].link);
    setNameMusic(listMusic[newIndex + 1].name);
    setIndexMS(newIndex + 1);
  };
  const handlePreviousMusic = () => {
    let newIndex = indexMS;
    if (indexMS <= 0) {
      newIndex = 3;
    }
    setLinkOr(listMusic[newIndex - 1].link);
    setNameMusic(listMusic[newIndex - 1].name);
    setIndexMS(newIndex - 1);
  };

  const typeMB = (e) => {
    setPageMobile(e);
  };
  return (
    <div className="wrapper">
      {/* <Cursor /> */}
      <div className="home-wrapper">
        <h1>Welcome to my blog</h1>
        {!isHome && (
          <video
            className={
              (isRight && "video home isRight") ||
              (backRight && !isRight && "video home backRight") ||
              "video home"
            }
            autoPlay
            loop
            muted
          >
            <source src={mainVideo} />
          </video>
        )}

        {isIntro && (
          <video className="video intro" autoPlay muted>
            <source src={newVideo} />
          </video>
        )}
        {pageMobile === "" ? (
          <video className={"video home mobileHome"} autoPlay loop muted>
            <source src={mainVideo} />
          </video>
        ) : (
          <></>
        )}
      </div>
      {!isIntro && (
        <div className={(isClick && "infor infor_isClick") || "infor"}>
          <InforPage
            click={clickFnc}
            right={rightFnc}
            backRight={backRightFnc}
            InforPage={InforPageFnc}
          />
        </div>
      )}
      {isClick && (
        <div className="pageDetail">
          {page === "contact" && <ContactPage />}
          {page === "album" && <MyAlbum />}
          {page === "about" && <AboutPage />}
        </div>
      )}
      <div className="audio">
        <h2>Chilling with me</h2>
        <h3>{nameMusic}</h3>
        <AudioPlayer
          style={{ width: "300px" }}
          autoPlay
          src={linkOr}
          showSkipControls={true}
          onClickNext={handleNextMusic}
          onClickPrevious={handlePreviousMusic}
          // other props here
        />
        <div className="playList">
          <ul>
            {listMusic.map((item, index) => {
              return (
                <li
                  key={index}
                  className="music"
                  onClick={() => handleChangeMusic(item, index)}
                >
                  <div className="imageMusic">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="nameMusic">
                    <span className="name">{item.name}</span>
                    <span>{item.singer}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <MobileInfor type={typeMB} />
      <div className="pageDetail">
        {pageMobile === "contact" && <ContactPage />}
        {pageMobile === "album" && <MyAlbum />}
        {pageMobile === "about" && <AboutPage />}
      </div>
    </div>
  );
}

export default MainPage;
