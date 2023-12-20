import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useFetch from "../../../hook/useFetch";
import SingleProduct from "../../components/SingleProduct";
import { PrivateAxios } from "../../../api/AxiosInstance";
import ViewHeading from "../../components/ViewHeading";
import API_ROUTES from "../../../api/apiRoutes";

const CustomerCart = (product) => {
  const baseURl = API_ROUTES.CART_ROUTES;

  const { isLoading, data, error, fetchDataByUrl, setData } = useFetch();

  useEffect(() => {
    fetchDataByUrl(`${API_ROUTES.CART_ROUTES}/${product}`);
  }),
    [fetchDataByUrl, product];

  console.log("product", product);

  return (
    <div className="py-3">
      <ViewHeading headingTitle="My Cart" />
      <section className="row">
        <div className="card">
          <SingleProduct product={product} />
          <h1>{product.name}</h1>
        </div>
      </section>
    </div>
  );
};

export default CustomerCart;
