import React, { useEffect } from "react";
import "../Css/bannercard.css";

const BannerCard = ({ bannerData }) => {
  // var thumbnail = bannerData.picutre.thumbnail;
  // useEffect(() => {
  //   console.log("bannerData", bannerData?.picture.thumbnail);
  // }, []);
  return (
    <div className="container banner-container mt-5">
      <div className="banner-card">
        {/* <h2>hello</h2> */}
        <div className="row">
          <div className="col col-lg-3 col-md-12 col-sm-12 col-xs-12  banner-img-container">
            <img
              src={bannerData?.picture?.medium}
              className="banner-img"
              alt=""
            />
          </div>
          <div className="col col-lg-9 col-md-12 col-sm-12 col-xs-12 banner-user-container">
            <div>
              <h1 className="banner-name">
                {bannerData?.name?.title} {bannerData?.name?.first}{" "}
                {bannerData?.name?.last}
              </h1>

              <h5 className="banner-address">
                {bannerData?.location?.street?.number},
                {bannerData?.location?.street?.name},{" "}
                {bannerData?.location?.city},{bannerData?.location?.state},{" "}
                {bannerData?.location?.country},{bannerData?.location?.postcode}
                <br />
                {bannerData?.location?.timezone?.offset},
                {bannerData?.location?.timezone?.description}
              </h5>
              <p className="banner-gender">{bannerData?.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
