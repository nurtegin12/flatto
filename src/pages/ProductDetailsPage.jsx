import { Container, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../context/ClientContext";

const ProductDetailsPage = () => {
  const data = React.useContext(clientContext);
  const { getProductDetails, productDetails, addFeedback } = data;

  const params = useParams();

  const [feedbackUser, setFeedbackUser] = useState("");
  const [feedbackValue, setFeedbackValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFeedback = {
      title: feedbackValue,
      user: feedbackUser,
    };

    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните все поля!");
        return;
      }
    }

    addFeedback(newFeedback, productDetails);

    setFeedbackUser("");
    setFeedbackValue("");
  };

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  if (!productDetails) {
    return <h3>loading...</h3>;
  }

  return (
    <Container>
      <div className="product-details">
        <img
          className="product-details-image"
          src={productDetails.image}
          alt="product image"
        />
        <div>
          <h2>{productDetails.name}</h2>
          <p>
            <strong>Цена: </strong> {productDetails.price} $
          </p>
          <p>
            <strong>Описание:</strong> {productDetails.desc}
          </p>
          <p>
            <strong>Цвет:</strong> {productDetails.color}
          </p>
        </div>
      </div>

      <div className="product-details-feedback">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Введите ваше имя"
            onChange={(e) => setFeedbackUser(e.target.value)}
            value={feedbackUser}
            type="text"
            variant="standard"
            color="success"
          />
          <TextField
            style={{ marginTop: 10 }}
            label="Введите ваш отзыв"
            variant="standard"
            onChange={(e) => setFeedbackValue(e.target.value)}
            value={feedbackValue}
            type="text"
            multiline
            maxRows={3}
            minRows={3}
            color="success"
          />
          <Button
            color="success"
            type="submit"
            style={{ marginTop: 15 }}
            variant="contained"
          >
            Оставить отзыв
          </Button>
        </form>
      </div>
      <div className="product-details-feedback">
        {productDetails.feedbacks?.map((item, index) => {
          return (
            <div className="feedback" key={index}>
              <h5 className="product-details-h5">{item.user}:</h5>
              <p className="product-details-p">{item.title}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
