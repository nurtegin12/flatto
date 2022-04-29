import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientContext } from "../context/ClientContext";

const PayPage = () => {
  const data = React.useContext(clientContext);
  const { addCardDatas } = data;

  const [cardNumber, setCardNumber] = useState("");
  const [cardPassword, setCardPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCardData = {
      cardNumber: cardNumber,
      cardPassword: cardPassword,
      payDate: Date.now(),
    };

    for (let key in newCardData) {
      if (!newCardData) {
        alert("Заполните все поля!");
        return;
      }
    }

    addCardDatas(newCardData);

    setCardNumber("");
    setCardPassword("");
    navigate("/");
  };

  return (
    <Container className="pay-page">
      <h2>Этап оплаты:</h2>
      <div className="pay-page-block">
        <img
          src="https://mobcompany.info/wp-content/uploads/2017/04/Biometric-Mastercard.jpg"
          alt="credit card image"
        />

        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setCardNumber(e.target.value)}
            color="success"
            type="number"
            value={cardNumber}
            label="Введите номер карты"
          />
          <TextField
            style={{ marginTop: 10 }}
            onChange={(e) => setCardPassword(e.target.value)}
            color="success"
            type="number"
            value={cardPassword}
            label="Введите пароль карты"
          />
          <Button
            style={{ marginTop: 15 }}
            color="success"
            variant="contained"
            type="submit"
          >
            Оплатить
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default PayPage;
