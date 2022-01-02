import React from "react";
import Card from "./Card";
import "../Css/BodyCardList.css";

const BodyCardList = ({ dataList, setBannerData }) => {
  return (
    <div className="container-fluid body-list">
      <div className="row body-list-row">
        {dataList.map((user) => {
          return (
            <div
              className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 btn card-btn "
              role="button"
              aria-pressed="false"
              onClick={() => setBannerData(user)}
              key={user.index}
            >
              <Card
                gender={user?.gender}
                title={user?.name?.title}
                first={user?.name?.first}
                last={user?.name?.last}
                email={user?.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyCardList;
