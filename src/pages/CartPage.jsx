import React, { useEffect } from "react";
import { clientContext } from "../context/ClientContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, TableFooter, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const CartPage = () => {
  const data = React.useContext(clientContext);
  const {
    getProductFromCart,
    cartProducts,
    countInCart,
    deleteProductInCart,
    cartCount,
  } = data;

  useEffect(() => {
    getProductFromCart();
  }, [cartCount]);

  if (!cartProducts) {
    return <h2 style={{ marginLeft: 20 }}>loading...</h2>;
  }

  if (cartProducts.products.length == 0) {
    return <h2 style={{ marginLeft: 20 }}>Ваша корзина пока пуста...</h2>;
  }

  return (
    <Container>
      <h2>Корзина:</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Название</TableCell>
              <TableCell align="center">Изображение</TableCell>
              <TableCell align="center">Количество</TableCell>
              <TableCell align="center">Цена</TableCell>
              <TableCell align="center">#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.products.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.product.name}</TableCell>
                <TableCell align="center">
                  <img
                    width={150}
                    src={item.product.image}
                    alt="laptop image"
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    onChange={(e) =>
                      countInCart(item.product.id, e.target.value)
                    }
                    min={1}
                    color="success"
                    className="cartproduct-subprice"
                    type="number"
                    value={item.count}
                  />
                </TableCell>
                <TableCell type="outlined" align="center">
                  {item.subPrice} $
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => deleteProductInCart(item.id)}
                    color="error"
                    variant="outlined"
                  >
                    DEL
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter
            style={{
              backgroundColor: "rgb(190, 250, 190)",
              height: "35px",
            }}
          >
            <TableRow>
              <TableCell align="right" colSpan={4}>
                <h2>Общая сумма:</h2>
              </TableCell>
              <TableCell align="center">
                <h2>{cartProducts.totalPrice} $</h2>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CartPage;
