import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../context/AdminContext";

const EditProductPage = () => {
  const data = React.useContext(adminContext);
  const { getProductsToEdit, productToEdit, saveEditedProduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }
    saveEditedProduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h3>loading...</h3>;
  }

  return (
    <Container>
      <div className="add-product-form">
        <h2>Edit product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            value={editedProduct.name}
            type="text"
            label="Введите название"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, desc: e.target.value })
            }
            value={editedProduct.desc}
            type="text"
            label="Введите описание"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
            value={editedProduct.price}
            type="number"
            label="Введите цену"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            type="text"
            label="Всавьте URL картинки"
            variant="standard"
            style={{ marginTop: 10 }}
          />
          <FormControl style={{ marginTop: 10 }} variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, color: e.target.value })
              }
              value={editedProduct.color}
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
            Edit product
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default EditProductPage;
