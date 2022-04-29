import React from "react";
import { Badge, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../context/ClientContext";

const NavbarPromo = () => {
  const data = React.useContext(clientContext);
  const { cartCount } = data;

  return (
    <div className="navbar-promo">
      <div className="navbar-promo1">
        <Link to={"/cart-panel"}>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCart />
          </Badge>
        </Link>
      </div>
      <div className="navbar-promo2">
        <Link to={"/"}>
          <Button color="success" variant="contained">
            Main page
          </Button>
        </Link>
        <Link to={"/admin-panel"}>
          <Button color="success" variant="contained">
            Admin page
          </Button>
        </Link>
        <Link to={"/admin-panel/add"}>
          <Button color="success" variant="contained">
            Add product page
          </Button>
        </Link>
      </div>
      <div className="navbar-promo3">
        <Link to={"/cart-panel"}>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCart />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default NavbarPromo;
