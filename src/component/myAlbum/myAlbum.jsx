import { Spin } from "antd";
import React from "react";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { PhotoAlbum } from "react-photo-album";
import "./myAlbum.scss";
import photos from "./photo";
function MyAlbum() {
  const [isWait, setIsWait] = useState(true);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 26,
      }}
      spin
    />
  );
  useEffect(() => {
    setTimeout(() => {
      setIsWait(false);
    }, 1000);
  }, []);
  return isWait ? (
    <div className="spin_album">
      <Spin indicator={antIcon} />
    </div>
  ) : (
    <div className="pt-album">
      <PhotoAlbum photos={photos} layout="masonry" />
    </div>
  );
}

export default MyAlbum;
