import React, { useEffect } from "react";
import { useState } from "react";
import "./mobileInfor.scss";
function MobileInfor(props) {
  const [typeBlock, setType] = useState("");
  const handleClick = (type) => {
    setType(type);
    if (type === typeBlock) {
      setType("");
    }
  };
  useEffect(() => {
    props.type(typeBlock);
  }, [props, typeBlock]);
  return (
    <div className="mobile-warp">
      <ul>
        <li
          className={
            (typeBlock === "about" && "li-select active") || "li-select"
          }
          onClick={() => handleClick("about")}
        >
          About me
        </li>
        <li
          className={
            (typeBlock === "album" && "li-select active") || "li-select"
          }
          onClick={() => handleClick("album")}
        >
          my album
        </li>
        <li
          className={
            (typeBlock === "contact" && "li-select active") || "li-select"
          }
          onClick={() => handleClick("contact")}
        >
          contact me
        </li>
      </ul>
    </div>
  );
}

export default MobileInfor;
