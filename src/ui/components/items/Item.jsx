import React from "react";
import "./Item.css";

const Item = (props) => {
  const { product } = props;

  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">रु {product?.mrp}</div>
        <div className="item-price-old">रु {product?.price}</div>
      </div>
    </div>
  );
};

export default Item;
