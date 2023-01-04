/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./inforPage.scss";
function InforPage(props) {
  const [isClick, setIsClick] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [backRight, setBackRight] = useState(true);
  const [isActive, setIsActive] = useState("about");
  const handleClick = () => {
    setIsClick((pre) => !pre);
    setIsRight((pre) => !pre);
    setBackRight((pre) => !pre);
    if (isClick === false) {
      setIsActive("about");
    }
  };
  const handleActive = (text) => {
    setIsActive(text);
  };
  useEffect(() => {
    props.click(isClick);
    props.right(isRight);
    props.backRight(backRight);
    props.InforPage(isActive);
  }, [backRight, isActive, isClick, isRight, props]);

  return (
    <div className="wrapper_inforPage">
      <div className="header_infor">
        <span className="square individual">
          <a onClick={handleClick} className="ninth before after infor">
            My Information
          </a>
        </span>
      </div>
      {isClick && (
        <div className="sub_infor">
          <div className="basic_infor ">
            <p
              onClick={() => handleActive("about")}
              className={
                (isActive === "about" && "text_infor txt_active") ||
                "text_infor"
              }
            >
              About me
            </p>
          </div>
          <div className="basic_infor">
            <p
              onClick={() => handleActive("album")}
              className={
                (isActive === "album" && "text_infor txt_active") ||
                "text_infor"
              }
            >
              My album
            </p>
          </div>
          <div className="basic_infor">
            <p
              onClick={() => handleActive("contact")}
              className={
                (isActive === "contact" && "text_infor txt_active") ||
                "text_infor"
              }
            >
              Contact with me
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InforPage;
