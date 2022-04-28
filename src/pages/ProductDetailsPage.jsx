import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../context/ClientContext";

const ProductDetailsPage = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails } = data;
  const params = useParams();
  console.log(productDetails);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  if (!productDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <div className="product-details">
          <img src={productDetails.image} alt="" />
          <div>
            <h2>{productDetails.name}</h2>
            <ul>
              <li>
                <strong>Цена: </strong>
                {productDetails.price}
              </li>
              <li>
                <strong>Цвет: </strong>
                {productDetails.color}
              </li>
              <li>
                <strong>Описание: </strong>
                {productDetails.desc}
              </li>
            </ul>
          </div>
        </div>
        <div className="product-details-feedback">
          <h3>Отзывы:</h3>
          <form>
            <TextField type="text" multiline minRows={3} maxRows={5} />
            <Button variant="outlined">Оставить отзыв</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
