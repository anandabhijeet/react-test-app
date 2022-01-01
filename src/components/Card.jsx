import React from "react";
import "../Css/card.css";

const Card = ({ gender, title, first, last, email }) => {
  return (
    <div className="container custom-card py-1 ">
      <p>{gender}.NL</p>
      <div>
        <h5 className="user-name">
          {title}. {first} {last}
        </h5>
      </div>
      <p className="mail">{email}</p>
    </div>
  );
};

export default Card;
