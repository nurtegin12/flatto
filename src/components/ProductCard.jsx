import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";
import { Share, ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../context/ClientContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { item } = props;

  const data = React.useContext(clientContext);
  const { addProductToCart, checkProductInCart, deleteProductInCart } = data;

  const navigate = useNavigate();

  return (
    <>
      <Card className="product-card-block" sx={{ maxWidth: 345 }}>
        <CardMedia
          onClick={() => navigate(`/product-details/${item.id}`)}
          component="img"
          height="140"
          image={item.image}
          alt="product image"
        />

        <CardContent>
          <Typography
            onClick={() => navigate(`/product-details/${item.id}`)}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price} $
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
        <CardActions>
          {checkProductInCart(item.id) ? (
            <IconButton onClick={() => deleteProductInCart(item.id)}>
              <ShoppingCart color="success" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToCart(item)}>
              <ShoppingCart color="inherit" />
            </IconButton>
          )}

          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
