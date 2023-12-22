import React from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";

const Product = ({ name, id, status, gender, species, image }) => {
  return (
    <div className="global">
      <div className="foto">
        <img src={image} alt="rick" />
        <h1>{name}</h1>
        <h3>{status}</h3>
      </div>
    </div>
  );
};

export default Product;
