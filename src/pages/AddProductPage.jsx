import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { adminContext } from "../context/AdminContext";

const AddProductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;
  const [newProduct, setNewProduct] = useState({
    name: "",
    desc: "",
    price: "",
    image: "",
    color: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }

    addProduct(newProduct);

    setNewProduct({
      name: "",
      desc: "",
      price: "",
      image: "",
      color: "",
    });
  };
  return (
    <Container>
      <div className="add-product-form">
        <h2>Add product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            type="text"
            label="Введите название"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, desc: e.target.value })
            }
            value={newProduct.desc}
            type="text"
            label="Введите описание"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            value={newProduct.price}
            type="number"
            label="Введите цену"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            type="text"
            label="Всавьте URL картинки"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <FormControl style={{ marginTop: 10 }} variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
              labelId="color-select-label"
              label="Выберите цвет"
            >
              <MenuItem value="black">Чёрный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="grey">Серый</MenuItem>
              <MenuItem value="dark-blue">Тёмно-синий</MenuItem>
            </Select>
          </FormControl>
          <Button style={{ marginTop: 10 }} type="submit" variant="outlined">
            Add product
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddProductPage;
