import React, { useEffect } from "react";
import Card from "./Card";
import "../Css/BodyCardList.css";

const BodyCardList = ({ dataList }) => {
  return (
    <div className="container-fluid  body-list">
      <div className="row">
        {dataList.map((user) => {
          return (
            <div className="col col-lg-3" key={user.index}>
              <Card
                gender={user.gender}
                title={user.name.title}
                first={user.name.first}
                last={user.name.last}
                email={user.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyCardList;
