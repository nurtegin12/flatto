import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { adminContext } from "../context/AdminContext";
import { Link } from "react-router-dom";

export default function AdminTable(props) {
  const { products } = props;
  const data = React.useContext(adminContext);
  const { deleteProduct } = data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">№</TableCell>
            <TableCell align="center">Название</TableCell>
            <TableCell align="center">Описание</TableCell>
            <TableCell align="center">Цена</TableCell>
            <TableCell align="center">Изображение</TableCell>
            <TableCell align="center">Цвет</TableCell>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.desc}</TableCell>
              <TableCell align="center">{item.price} $</TableCell>
              <TableCell align="center">
                <img width={150} src={item.image} alt="laptop image" />
              </TableCell>
              <TableCell align="center">{item.color}</TableCell>
              <TableCell align="center">
                <Link to={`/admin-panel/edit/${item.id}`}>
                  <Button color="success" variant="outlined">
                    EDIT
                  </Button>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => deleteProduct(item.id)}
                  color="error"
                  variant="outlined"
                >
                  DEL
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
