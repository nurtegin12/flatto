import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { clientContext } from "../context/ClientContext";
import { CardHeader, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductCard(props) {
  const { item } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const data = React.useContext(clientContext);
  const {
    addProductToCart,
    checkProductInCart,
    deleteProductInCart,
    likeCounter,
  } = data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className="product-card-block" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt="product image"
        />
        <Link to={`/details/${item.id}`}>
          <CardHeader title={item.name} subheader={`${item.price} $`} />
        </Link>
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            {item.price}$
          </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            disabled={liked}
            onClick={() => {
              likeCounter(item.id, item.likes || 0);
              setLiked(true);
            }}
            aria-label="add to favorites"
          >
            <FavoriteIcon color={liked ? "error" : "inherit"} />
            <span>{item.likes}</span>
          </IconButton>
          {checkProductInCart(item.id) ? (
            <IconButton onClick={() => deleteProductInCart(item.id)}>
              <ShoppingCart color="error" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToCart(item)}>
              <ShoppingCart color="inherit" />
            </IconButton>
          )}
          <Button
            variant="contained"
            color="secondary"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            Подробнее
          </Button>
        </CardActions>
        <Collapse
          className="product-card-collapse"
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography>{item.desc}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
