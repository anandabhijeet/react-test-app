import React, { useEffect } from "react";
import "../Css/bannercard.css";

const BannerCard = ({ bannerData }) => {
  useEffect(() => {
    console.log("bannerData", bannerData.mail);
  }, []);
  return (
    <div className="container banner-container">
      <div className="banner-card">
        <h1>{bannerData.email}</h1>
      </div>
    </div>
  );
};

export default BannerCard;
