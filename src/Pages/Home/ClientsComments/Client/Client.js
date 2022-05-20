import React from "react";
import "./Client.css";

const Client = ({ client }) => {
  const { name, img, comment } = client;

  return (
    <div className="clientSection">
      <div className="client">
        <div className="d-flex">
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Client;
