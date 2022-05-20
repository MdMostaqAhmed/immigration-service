import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;

  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service text-center">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        <small>{description.slice(0, 300)}</small>
      </p>
      <p>
        <strong>${price}</strong>
      </p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-primary"
      >
        Book Appointment for : {name}
      </button>
    </div>
  );
};

export default Service;
